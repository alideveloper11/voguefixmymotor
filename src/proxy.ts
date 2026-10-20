import { NextResponse, type NextRequest } from "next/server";

// Match case exactly so lowercase destinations never redirect to themselves.
const legacyPaths: Record<string, string> = {
  "/services/Head-Gasket-Repair": "/services/head-gasket-repair",
  "/services/Fuel-System-Cleaning": "/services/fuel-system-cleaning",
  "/services/Welding-Services": "/services/welding-services",
  "/services/Initial-Diagnostics": "/services/initial-diagnostics",
  "/services/Air-Conditioning-Service": "/services/air-conditioning-service",
  "/services/Timing-Chain-Replacement": "/services/timing-chain-replacement",
  "/services/Water-Pump-Replacement": "/services/water-pump-replacement",
  "/services/Alternator-Replacement": "/services/alternator-replacement",
  "/services/Diagnostics": "/services/diagnostics",
  "/services/Clutch-Replacement": "/services/clutch-replacement",
  "/services/Turbo-Replacement": "/services/turbo-replacement",
  "/services/Timing-Belts": "/services/timing-belts",
  "/services/MOT-Testing": "/services/mot-testing",
  "/services/Major-Service": "/services/major-service",
  "/services/AdBlue-Services": "/services/adblue-services",
  "/services/DPF-Cleaning-Service": "/services/dpf-cleaning-service",
  "/services/General-Service": "/services/general-service",
  "/services/Annual-Service": "/services/annual-service",
  "/services/Cam-Belts": "/services/cam-belts",
  "/services/Brake-Services": "/services/brake-services",
  "/services/All-Repairs-Services": "/services/all-repairs-services",
  "/services/Visual-Inspection": "/services/visual-inspection",
  "/services/Tyre-Replacement": "/services/tyre-replacement",
  "/services/Engine-Rebuild": "/services/engine-rebuild",
  "/services/NOx-Sensor-Repair": "/services/nox-sensor-repair",
  "/services/Exhaust-Repair": "/services/exhaust-repair",
  "/services/Performance-Upgrades": "/services/performance-upgrades",
  "/services/Interim-Service": "/services/interim-service",
  "/services/Wet-Belt": "/services/wet-belt",
  "/services/Transmission-Service": "/services/transmission-service",
  "/services/Battery-Replacement": "/services/battery-replacement",
  "/services/AC-Gas-Refill-Service": "/services/ac-gas-refill-service",
  "/services/Valeting-Services": "/services/valeting-services",
  "/services/Wheel-Alignment": "/services/wheel-alignment",
  "/services/Locking-Wheel-Nut-Removal-Replacement":
    "/services/locking-wheel-nut-removal-replacement",
  "/services/Engine-Flush": "/services/engine-flush",
  "/services/Suspension-Service": "/services/suspension-service",
  "/services/Vehicle-Health-Check": "/services/vehicle-health-check",
  "/services/Hybrid-EV-Repairs-Services": "/services/hybrid-ev-repairs-services",
};

export function proxy(request: NextRequest) {
  const destination = legacyPaths[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/services/:path*"],
};
