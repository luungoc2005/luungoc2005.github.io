const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Ngoc Nguyen\'s Personal Blog',
    siteUrl: `https://luungoc2005.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-87659525-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        respectDNT: true,
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static/`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 992,
              showCaptions: true,
              markdownCaptions: true,
            },
          },
          {
            resolve: "@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400
            }
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'luungoc2005',
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              theme: 'Solarized Light', // Or install your favorite theme from GitHub
              inlineCodeMarker: '•',
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              "blocks": {
                "snippet": {
                  "classes": "snippet"
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'luungoc2005.github.io',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
        "sources": {
          "snippetBlocks": {
            "type": "htmlQuery",
            "sourceField": "html",
            "excerptSelector": ".custom-block.snippet .custom-block-body",
            "stripSelector": "a",
            "elementReplacements": [
              {
                "selector": "h6",
                "replaceWith": "strong"
              },
              {
                "selector": "h5",
                "replaceWith": "h6"
              },
              {
                "selector": "h4",
                "replaceWith": "h5"
              },
              {
                "selector": "h3",
                "replaceWith": "h4"
              },
              {
                "selector": "h2",
                "replaceWith": "h3"
              },
            ],
          },
          "default": {
            "type": "htmlQuery",
            "sourceField": "html",
            "excerptSelector": "html > *",
            "ignoreSelector": "img, .gatsby-highlight",
            "stripSelector": "a",
            "elementReplacements": [
              {
                "selector": "h6",
                "replaceWith": "strong"
              },
              {
                "selector": "h5",
                "replaceWith": "h6"
              },
              {
                "selector": "h4",
                "replaceWith": "h5"
              },
              {
                "selector": "h3",
                "replaceWith": "h4"
              },
              {
                "selector": "h2",
                "replaceWith": "h3"
              },
            ],
            "truncate": {
              "length": 80,
              "byWords": true,
              "ellipsis": "…"
            },
          }
        },
        "sourceSets": {
          "markdownHtml": [
            "snippetBlocks",
            "default"
          ]
        },
        "excerpts": {
          "snippet": {
            "type": "html",
            "nodeTypeSourceSet": {
              "MarkdownRemark": "markdownHtml"
            }
          }
        }
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
};
