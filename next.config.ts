import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};
module.exports = {
  allowedDevOrigins: ['10.51.210.171'],
}
export default nextConfig;
