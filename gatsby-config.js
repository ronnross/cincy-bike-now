module.exports = {
  siteMetadata: {
    title: "Cincy Bike Now!",
    description: "Home of Cincy Bike Now!",
    twitter: "@cincybikenow!",
    siteUrl: "https://cincybikenow.org",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/post`, name: "post" },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
