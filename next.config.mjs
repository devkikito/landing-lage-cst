/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  maximumFileSizeToCacheInBytes: 4.5 * 1024 * 1024, // Set to 4.5 MB
});

export default withSerwist({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "streetviewpixels-pa.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["i.ytimg.com", "biomobtinastorage.blob.core.windows.net", "img.youtube.com"],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  staticPageGenerationTimeout: 1000,
  experimental: {
    nodeOptions: ["--no-experimental-fetch"],
  },
});
