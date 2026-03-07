/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/NicksWebsite3.0";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? repoBasePath : "",
  assetPrefix: isGitHubPages ? repoBasePath : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
