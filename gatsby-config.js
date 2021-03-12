// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef

module.exports = {
  siteMetadata: {
    title: 'Anudeep Chandra Paul\'s resume'
    , siteUrl: 'https://portfolio.anudeep.dev'
  }
  , plugins: [
    'gatsby-plugin-react-helmet'
    , 'gatsby-plugin-gatsby-cloud'
    , 'gatsby-plugin-offline'
    , {
      resolve: 'gatsby-plugin-sass'
      , options: {
        cssLoaderOptions: {
        }
      }
    }
    , 'gatsby-plugin-sitemap'
    , {
      resolve: 'gatsby-plugin-manifest'
      , options: {
        icon: 'src/images/icon.png'
      }
    }
    , {
      resolve: 'gatsby-plugin-mdx'
      , options: {
        extensions: [ '.md', '.mdx' ]
      }
    }
    , {
      resolve: 'gatsby-source-filesystem'
      , options: {
        name: 'data'
        , path: './src/data/'
      }
      , __key: 'data'
    }
    , {
      resolve: 'gatsby-source-filesystem'
      , options: {
        name: 'pages'
        , path: './src/pages/'
      }
      , __key: 'pages'
    }
  ]
}
