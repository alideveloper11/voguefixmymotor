import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vogueimages.co.uk",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/services/auto-electrical-repairs",
        destination: "/services/auto-electrical-services",
        permanent: true,
      },
      {
        source: "/cdn-cgi/l/email-protection",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/areas/free-vehicle-health-check",
        destination: "/services/vehicle-health-check",
        permanent: true,
      },
      {
        source: "/services/24-7-Vehicle-Recovery",
        destination: "/services/vehicle-recovery",
        permanent: true,
      },
      {
        source: "/areas/professional-car-battery-health-check",
        destination: "/services/battery-replacement",
        permanent: true,
      },
      {
        source: "/forgot-password",
        destination: "https://voguefixmymotor.co.uk/",
        permanent: true,
      },
      {
        source: "/lighting-fixtures",
        destination: "https://voguefixmymotor.co.uk/",
        permanent: true,
      },
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

      // Keep previously published service URLs working.
      {
        source: "/services/van-repairs-services",
        destination: "/services/van-repairs-and-servicing",
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
