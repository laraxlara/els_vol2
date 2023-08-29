// import path from "path";
// import fs from "fs/promises";

// export default function Sitemap() {
//   return null;
// }

// export const getServerSideProps = async (ctx) => {
//   ctx.res.setHeader("Content-Type", "text/xml");
//   const xml = await generateSitemap();
//   ctx.res.write(xml);
//   ctx.res.end();

//   return {
//     props: {},
//   };
// };

// async function getData() {
//   const filePath = path.join(process.cwd(), "/src/data", "data.json");
//   const fileData = await fs.readFile(filePath);
//   const data = JSON.parse(fileData.toString());

//   return data;
// }

// export const getStaticProps = async (context) => {
//   const blogID = context.params?.slugBlog;
//   const data = await getData();
//   const foundBlog = data.blogs.find((blog) => blogID === blog.slug);

//   if (!foundBlog) {
//     return {
//       props: { hasError: true },
//     };
//   }

//   return {
//     props: {
//       blogData: foundBlog,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//     const data = await getData();
//     const pathsWithParams = data.blogs.map((blog) => ({
//       params: { slugBlog: blog.slug },
//     }));

//     return {
//       paths: pathsWithParams,
//       fallback: true,
//     };
//   };

// async function generateSitemap() {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       <!-- Homepage -->
//       <url>
//         <loc>https://executivelimomiami.com/</loc>
//         <lastmod>2023-08-29</lastmod>
//         <changefreq>weekly</changefreq>
//         <priority>1.0</priority>
//       </url>

//       <!-- About Page -->
//       <url>
//         <loc>https://executivelimomiami.com/about</loc>
//         <lastmod>2023-08-29</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.8</priority>
//       </url>

//       <!-- Fleet Page -->
//       <url>
//         <loc>https://executivelimomiami.com/fleet</loc>
//         <lastmod>2023-08-29</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.8</priority>
//       </url>

//       <!-- Services Page -->
//       <url>
//         <loc>https://executivelimomiami.com/services</loc>
//         <lastmod>2023-08-29</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.8</priority>
//       </url>

//       <!-- Contact Page -->
//       <url>
//         <loc>https://executivelimomiami.com/contact</loc>
//         <lastmod>2023-08-29</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.7</priority>
//       </url>
//       ${[blogData.text].map((text) => {}}

//     </urlset>`;
// }
