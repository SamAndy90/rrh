/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: (process.env.IMAGE_DOMAINS ?? "")
      .split(",")
      .filter(Boolean)
      .map((i) => {
        const [protocol, hostname] = i.split("://");
        return {
          protocol,
          hostname,
        };
      }),
  },
};
export default nextConfig;
