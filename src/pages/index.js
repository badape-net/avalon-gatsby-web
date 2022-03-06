import * as React from "react"
import ReactMarkdown from 'react-markdown'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, VStack, Box } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import NavBar from "../components/navbar"

const IndexPage = ({ data }) => {
  const page = data.directus.home
  const characters = data.directus.home.sections[0].related_Page_id
  const map = data.directus.home.sections[1].related_Page_id
  const news = data.directus.home.sections[2].related_Page_id

  const fgImage = getImage(page.logo.imageFile)

  return (
    <Layout w="100%">
      <Seo title="Home" />

      <VStack align='stretch'>
        <Section bannerImage={page.banner} >
          <NavBar links={[]} />
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

        <Section h="full" w="full" bannerImage={characters.banner} >
          <Container>
            <ReactMarkdown>
              {characters.brief}
            </ReactMarkdown>
          </Container>
        </Section>

        <Section h="full" w="full" bannerImage={news.banner} >
          <Container>
            <ReactMarkdown>
              {news.brief}
            </ReactMarkdown>
          </Container>
        </Section>

        <Section h="full" w="full" bannerImage={map.banner} >
          <Container>
            <ReactMarkdown>
              {map.brief}
            </ReactMarkdown>
          </Container>
        </Section>

      </VStack>

    </Layout>
  )
}

export const query = graphql`
  query {
    directus {
      home: Page_by_id(id: 1 ) {
        title
        content
        slug
        brief
        sections {
          related_Page_id {
            slug
            brief
            title
            banner {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG, width: 1000, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
        banner {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: TRACED_SVG, width: 1000, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
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
    }
  }
`

export default IndexPage
