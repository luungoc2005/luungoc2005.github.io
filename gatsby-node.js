const { createFilePath } = require('gatsby-source-filesystem');
const path = require(`path`);

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-decorators',
    options: {
      legacy: true,
    },
  });
};

exports.onCreateWebpackConfig = (
  { actions },
) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['src', 'node_modules'],
    },
  });
};

exports.onCreateNode = (({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ 
      node, 
      getNode, 
      basePath: `src/posts`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query AllSlugsQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/posts/"}
        frontmatter: {published: { ne: false }}
      },
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/blog-post/BlogPost.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// TODO: shouldn't need this here, but somehow `snippet` is failing type inference on MarkdownRemark.
// So we need this workaround for now
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node @childOf(mimeTypes: ["text/markdown", "text/x-markdown"], types: ["File"]) @derivedTypes @dontInfer {
      frontmatter: MarkdownRemarkFrontmatter
      excerpt: String
      snippet: String
      rawMarkdownBody: String
      fileAbsolutePath: String
      fields: MarkdownRemarkFields
    }

    type MarkdownRemarkFrontmatter {
      title: String
      date: Date @dateformat
      tags: [String]
      published: Boolean
    }

    type MarkdownRemarkFields @derivedTypes {
      readingTime: MarkdownRemarkFieldsReadingTime
      slug: String
    }

    type MarkdownRemarkFieldsReadingTime {
      text: String
      minutes: Float
      time: Float
      words: Int
    }
  `
  createTypes(typeDefs)
}