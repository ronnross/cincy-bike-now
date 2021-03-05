module.exports = {
  siteMetadata: {
    title: "Cincy Bike Now!",
    description: "Home of Cincy Bike Now!",
    twitter: "@cincybikenow!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/post`, name: "post" },
    },
    "gatsby-plugin-mdx",
  ],
};
