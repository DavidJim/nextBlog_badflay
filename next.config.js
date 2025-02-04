/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**",
			},
		],
		domains: ["badflay-blog.local", "admin.badflay.com"],
	},
};

module.exports = nextConfig;
