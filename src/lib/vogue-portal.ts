const PORTAL_BASE_URL = "https://portal.voguetechnics.co.uk/api/v1";

type PortalQuotePayload = {
  website_slug: string;
  vrm: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  issue: string;
  make?: string;
  model?: string;
  year?: string;
  engine_code?: string;
  maximum_bhp?: number;
  fuel_type?: string;
  engine_size?: string;
  engine_number?: string;
  vin?: string;
  color?: string;
  number_of_doors?: number;
  seat_capacity?: number;
  wheel_plan?: string;
  aspiration?: string;
  transmission?: string;
  co2_emissions?: number | string;
  body_type?: string;
  engine_type?: string;
};

function coerceOptionalNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
}

function cleanOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getPortalConfig() {
  const apiUser = process.env.API_USER || process.env.PORTAL_USERNAME;
  const apiKey = process.env.API_KEY || process.env.PORTAL_PASSWORD;
  const websiteSlug = "voguefixmymotor";

  return {
    apiUser,
    apiKey,
    websiteSlug,
    isConfigured: Boolean(apiUser && apiKey && websiteSlug),
  };
}

export function getPortalHeaders(): HeadersInit {
  const { apiUser, apiKey } = getPortalConfig();

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-API-USER": apiUser || "",
    "X-API-KEY": apiKey || "",
  };
}

export async function parseJsonResponse(response: Response) {
  const text = await response.text();

  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

export function buildPortalQuotePayload(
  body: Record<string, unknown>,
  websiteSlug: string
): PortalQuotePayload {
  const maximumBhp = coerceOptionalNumber(body.maximum_bhp);
  const co2EmissionsNumeric = coerceOptionalNumber(body.co2_emissions ?? body.co2);
  const co2EmissionsString = cleanOptionalString(body.co2_emissions ?? body.co2);

  return {
    website_slug: websiteSlug,
    vrm: String(body.vrm || body.regNumber || "").replace(/\s/g, "").toUpperCase(),
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    phone: String(body.phone || "").trim(),
    postcode: String(body.postcode || body.postCode || "").trim(),
    issue: String(body.issue || "").trim(),
    make: cleanOptionalString(body.make),
    model: cleanOptionalString(body.model),
    year: cleanOptionalString(body.year),
    engine_code: cleanOptionalString(body.engine_code),
    maximum_bhp: maximumBhp,
    fuel_type: cleanOptionalString(body.fuel_type || body.fuel),
    engine_size: cleanOptionalString(body.engine_size || body.size),
    engine_number: cleanOptionalString(body.engine_number),
    vin: cleanOptionalString(body.vin),
    color: cleanOptionalString(body.color),
    number_of_doors: coerceOptionalNumber(body.number_of_doors),
    seat_capacity: coerceOptionalNumber(body.seat_capacity),
    wheel_plan: cleanOptionalString(body.wheel_plan),
    aspiration: cleanOptionalString(body.aspiration),
    transmission: cleanOptionalString(body.transmission),
    co2_emissions: co2EmissionsNumeric ?? co2EmissionsString,
    body_type: cleanOptionalString(body.body_type || body.body_style),
    engine_type: cleanOptionalString(body.engine_type),
  };
}

export async function submitPortalQuote(payload: PortalQuotePayload) {
  return fetch(`${PORTAL_BASE_URL}/quotes`, {
    method: "POST",
    headers: getPortalHeaders(),
    body: JSON.stringify(payload),
  });
}
