require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Pretannia`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.GATSBY_DIRECTUS_URL,
      },
    }
  ]
};