module.exports = {
  siteMetadata: {
    menu: [
      { name: "elementUI", to: "/" },
    ],
    links: {
      facebook: "https://www.facebook.com/goelementUI/",
      twitter: "https://twitter.com/goelementUI/",
    },
    locale: "en",
    title: " tailwindcss",
    titleTemplate: "elementUI",
    description:
      "Gatsby",
    siteUrl: "https://www.elementUI.com", // No trailing slash allowed!
    twitterUsername: "@goelementUI",
    publicURL: "", // This will be the default 'social' image for social media shares (in the static folder)
    organization: "elementUI",
    author: "@goelementUI",
  },
  flags: {
    THE_FLAG: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      options: {
        name: `elementUI`,
        short_name: `@elementui`,
        start_url: `/`,
        background_color: `#3B82F6`, // The background_color property is used on the splash screen when the application is first launched on mobile.
        theme_color: `#F97316`, // The theme_color sets the color of the tool bar, and may be reflected in the app's preview in task switchers.
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        // The property ID; the tracking code won't be generated without it
        id: 'GTM-TCK3QP',
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ],
}
