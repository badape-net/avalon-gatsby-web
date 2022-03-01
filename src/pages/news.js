import React, { useContext } from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"

const IndexPage = ({ data }) => {

  const page = data.directus.page
  const news = data.directus.news

  console.log(news)

  return (
    <Layout>
      <Seo title="News" />
      <Section bannerImage={page.banner} >
      </Section>


    </Layout>
  )
}

export const query = graphql`
  query {
    directus {
      page: Page_by_id(id: 5 ) {
        title
        content
        slug
        banner {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, width: 1000, layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
						}
					}
        }
        logo {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, width: 500, layout: FIXED, formats: [AUTO, WEBP, AVIF])
						}
					}
        }
      }
      news : News {
        title
        short
      }
    }
  }
`

export default IndexPage
