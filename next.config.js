const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.ctfassets.net"]
  },
  async rewrites() {
    return [
      {
        source: "/jobs",
        destination: "/"
      },

      // Landing pages
      {
        source: "/javascript-jobs",
        destination: "/landing-pages/javascript-jobs"
      },
      {
        source: "/python-jobs",
        destination: "/landing-pages/python-jobs"
      },
      {
        source: "/java-jobs",
        destination: "/landing-pages/java-jobs"
      },
      {
        source: "/c-jobs",
        destination: "/landing-pages/c-jobs"
      },
      {
        source: "/php-jobs",
        destination: "/landing-pages/php-jobs"
      },
      {
        source: "/ios-jobs",
        destination: "/landing-pages/ios-jobs"
      },
      {
        source: "/golang-jobs",
        destination: "/landing-pages/golang-jobs"
      },
      {
        source: "/react-jobs",
        destination: "/landing-pages/react-jobs"
      },
      {
        source: "/node-jobs",
        destination: "/landing-pages/node-jobs"
      },
      {
        source: "/angular-jobs",
        destination: "/landing-pages/angular-jobs"
      },
      {
        source: "/wordpress-jobs",
        destination: "/landing-pages/wordpress-jobs"
      },
      {
        source: "/django-jobs",
        destination: "/landing-pages/django-jobs"
      },
      {
        source: "/dotnet-jobs",
        destination: "/landing-pages/dotnet-jobs"
      },
      {
        source: "/salesforce-jobs",
        destination: "/landing-pages/salesforce-jobs"
      },
      {
        source: "/shopify-jobs",
        destination: "/landing-pages/shopify-jobs"
      },
      {
        source: "/tech-jobs",
        destination: "/landing-pages/tech-jobs"
      },
      {
        source: "/healthcare-jobs",
        destination: "/landing-pages/healthcare-jobs"
      },
      {
        source: "/fintech-jobs",
        destination: "/landing-pages/fintech-jobs"
      },
      {
        source: "/gaming-jobs",
        destination: "/landing-pages/gaming-jobs"
      },
      {
        source: "/aerospace-and-automotive-jobs",
        destination: "/landing-pages/aerospace-jobs"
      },
      {
        source: "/environmental-jobs",
        destination: "/landing-pages/environmental-jobs"
      },
      {
        source: "/government-jobs",
        destination: "/landing-pages/government-jobs"
      },
      {
        source: "/non-profit-jobs",
        destination: "/landing-pages/non-profit-jobs"
      },
      {
        source: "/web-development-jobs",
        destination: "/landing-pages/web-dev-jobs"
      },
      {
        source: "/mobile-development-jobs",
        destination: "/landing-pages/mobile-dev-jobs"
      },
      {
        source: "/ai-jobs",
        destination: "/landing-pages/ai-jobs"
      },
      {
        source: "/data-science-jobs",
        destination: "/landing-pages/data-science-jobs"
      },
      {
        source: "/game-development-jobs",
        destination: "/landing-pages/game-jobs"
      },
      {
        source: "/robotics-development-jobs",
        destination: "/landing-pages/robotics-jobs"
      }
    ];
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  }
};

module.exports = nextConfig;
