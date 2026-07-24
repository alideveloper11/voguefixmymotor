import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.voguefixmymotor.co.uk",
          },
        ],
        destination: "https://voguefixmymotor.co.uk/:path*",
        permanent: true,
      },

      // Old blog URL -> New blog URL
      {
        source: "/blog/free-vehicle-health-check",
        destination:
          "/blog/free-vehicle-health-check-expert-car-inspection-service-near-you",
        permanent: true,
      },

      // Old blog URL -> New blog URL
      {
        source: "/blog/professional-car-battery-health-check",
        destination:
          "/blog/professional-car-battery-health-check-know-your-batterys-true-condition-before-it-lets-you-down",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;