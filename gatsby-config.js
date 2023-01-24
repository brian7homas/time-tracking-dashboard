/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `projects/time-tracker-dashboard/`,
  siteMetadata: {
    title: `time-tracking-dashboard`,
    description: `Project built from Frontend Mentor designs`,
    image: ``,
    siteUrl: `https://www.brianthomas-develops.com/projects/time-tracker-dashboard`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-transformer-json","gatsby-plugin-netlify" {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": `${__dirname}/src/data`
    },
    __key: "data"
  
  }]
};