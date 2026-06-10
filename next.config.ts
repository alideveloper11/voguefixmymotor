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
    ];
  },
};

export default nextConfig;