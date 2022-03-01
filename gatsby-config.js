require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Pretania`,
    siteUrl: `https://www.pertania.com`,
    description: `Pretania website`,
    author: `@gatsbyjs`,
    social: {
      twitter: `missing`,
    }
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-background-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.GATSBY_DIRECTUS_URL,
      },
    }
  ]
};