module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "luciocanepa",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
