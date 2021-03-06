import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RedBike from "../images/red_bike.jpg";

const IndexPage = ({ data }) => {
  const post = data.allMdx.nodes;
  return (
    <Layout>
      <SEO title={"Home page"} />
      <div>image</div>
      <StaticImage src={RedBike} alt="" layout="fullWidth" aspectRatio={21 / 9} />
      {post.map((post) => {
        return (
          <Link to={post.slug} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
