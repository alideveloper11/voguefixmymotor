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
     

        // AREAS
        slugs.areas.forEach((slug) => {
           paths.push({
            loc: `/areas/${slug}`,
            lastmod: new Date().toISOString(),
            changefreq: "weekly",
            priority: 0.6,
            });
        });
 

 const username = process.env.BLOG_USERNAME;
        const password = process.env.BLOG_PASSWORD;


        const response = await fetch(
            "https://blogs-tbsmf.ondigitalocean.app/api/vogue-fix-my-motor/blogs/",
            {
                headers: {
                    Authorization:
                        "Basic " +
                        Buffer.from(
                            `${username}:${password}`
                        ).toString("base64"),
                },
            }
        );


        if (!response.ok) {
            console.log(response.status);
            console.log(await response.text());
            throw new Error("Failed to fetch blogs");
        }


        const blogs = await response.json();


        blogs.forEach((blog) => {
            paths.push({
                loc: `/blog/${blog.slug}`,
                lastmod: blog.created_at || new Date().toISOString(),
                changefreq: "weekly",
                priority: 0.6,
            });
        });



        return paths;
    },
};