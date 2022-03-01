import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, VStack, Box } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"

const IndexPage = ({ data }) => {

  const page = data.directus.page
  const news = data.directus.news

  const fgImage = getImage(page.logo.imageFile)

  return (
    <Layout>
      <Seo title="News" />
      <VStack align='stretch'>
        <Section h="full" w="full" bannerImage={page.banner} >
          <Container>
            <VStack>
              <Box>
                <GatsbyImage image={fgImage} alt={page.banner.id} />
              </Box>
              <Box>
                <ReactMarkdown>
                  {page.brief}
                </ReactMarkdown>
              </Box>
            </VStack>
          </Container>
        </Section>
      </VStack>
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
