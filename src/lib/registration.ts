export function normalizeRegistration(value: string) {
  return value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

