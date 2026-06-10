const slugs = require("./src/lib/slugs");

module.exports = {
    siteUrl: "https://voguefixmymotor.co.uk",
    generateRobotsTxt: true,

    additionalPaths: async () => {
        const paths = [];

        // SERVICES
        slugs.services.forEach((slug) => {
            paths.push({
                loc: `/services/${slug}`,
                lastmod: new Date().toISOString(),
                changefreq: "weekly",
                priority: 0.8,
            });
        });

        // BLOGS
        slugs.blogs.forEach((slug) => {
           paths.push({
            loc: `/areas/${slug}`,
            lastmod: new Date().toISOString(),
            changefreq: "weekly",
            priority: 0.6,
            });
        });

        // AREAS
        slugs.areas.forEach((slug) => {
           paths.push({
            loc: `/areas/${slug}`,
            lastmod: new Date().toISOString(),
            changefreq: "weekly",
            priority: 0.6,
            });
        });

        return paths;
    },
};