import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import RelatedPosts from "../components/RelatedPosts";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import SharePost from "../components/SharePost";
import AddDisqus from "../components/Disqus";

export const BlogPostTemplate = ({
    currentId,
    content,
    contentComponent,
    slug,
    date,
    description,
    tags,
    title,
    helmet,
    heroImage,
    category,
    nextId,
    nextTitle,
    nextSlug,
    nextHeroImage,
    prevId,
    prevTitle,
    prevSlug,
    prevHeroImage
  }) => {

  const path = "https://filippoferri.it/" + slug;
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Hero image={heroImage.childImageSharp.sizes} heading={title} addClass="is-post" category={category}/>

      <section className="section">

        <div className="container is-widescreen content post">
          <div className="columns">
            <div className="column is-10-tablet is-offset-1-tablet is-6-desktop is-offset-3-desktop">

              <p><i>{description}</i></p>

              <PostContent content={content}/>

              <div className="is-content-section">
                <SharePost shareUrl={path} title={title} media={heroImage.childImageSharp.sizes.src}/>
                <div className="has-text-right">{date}</div>
              </div>

              {tags && tags.length ? (
                <div>
                  <p className="menu-label">A story about:</p>
                  <div className="tags are-medium">
                    {tags.map((tag, index) => (
                      <Link key={index} className="tag has-text-black"
                            to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    ))}
                  </div>
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </section>

      <RelatedPosts
        currentId={currentId}

        nextId={nextId}
        nextTitle={nextTitle}
        nextSlug={nextSlug}
        nextHeroImage={nextHeroImage}

        prevId={prevId}
        prevTitle={prevTitle}
        prevSlug={prevSlug}
        prevHeroImage={prevHeroImage}

      />

      <section className="section is-medium" name="conversation">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop has-margin-bottom">

              <div className="content">
                <AddDisqus title={title} url={path}/>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string
  //helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { current: post } = data;
  const { next: nextPost } = data;
  const { prev: prevPost } = data;

  if (nextPost !== null) {
    var nextId = nextPost.id;
    var nextTitle = nextPost.frontmatter.title;
    var nextSlug = nextPost.fields.slug;
    var nextHeroImage = nextPost.frontmatter.heroImage;
  }

  if (prevPost !== null) {
    var prevId = prevPost.id;
    var prevTitle = prevPost.frontmatter.title;
    var prevSlug = prevPost.fields.slug;
    var prevHeroImage = prevPost.frontmatter.heroImage;
  }

  return (
    <Layout>
      <BlogPostTemplate
        currentId={post.id}
        content={post.html}
        contentComponent={HTMLContent}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`}/>}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        heroImage={post.frontmatter.heroImage}
        nextId={nextId}
        nextTitle={nextTitle}
        nextSlug={nextSlug}
        nextHeroImage={nextHeroImage}
        prevId={prevId}
        prevTitle={prevTitle}
        prevSlug={prevSlug}
        prevHeroImage={prevHeroImage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $next: String!, $prev: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        description
        category
        tags
        heroImage {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $next }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        heroImage {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    prev: markdownRemark(id: { eq: $prev }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        heroImage {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
