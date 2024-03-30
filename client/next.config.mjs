/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    BASE_API_URL: "http://localhost:8080",
    NEXT_PUBLIC_BASE_API_URL: "http://localhost:8080",
  },
};

export default nextConfig;
