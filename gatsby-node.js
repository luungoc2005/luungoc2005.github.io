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