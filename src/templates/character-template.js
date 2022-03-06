import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Flex, Spacer, VStack, Box, Container, Heading, Text, Button, Icon, Arrow, useColorModeValue } from '@chakra-ui/react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import CharacterCard from "../components/charactercard"
import NavBar from "../components/navbar"

export default function BlogPost({ data }) {
  const character = data.directus.character[0]
  const page = data.directus.page
  const fgImage = getImage(page.logo.imageFile)


  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  }

  return (
    <Layout>
      <Seo title={character.name} />
      <VStack align='stretch'>
        <Section bannerImage={page.banner} >
          <NavBar links={[]} />
          <Container>

            <VStack>
              <Box>
                <GatsbyImage image={fgImage} alt={page.banner.id} />
              </Box>
              <Box w="100vh">
                <Flex w="100%">
                  <Box border="1px">
                    <CharacterCard character={character} />
                  </Box>
                  
                  <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%'>
                    <Text>
                      <Heading>
                        {character.name}
                      </Heading>
                      <Container>
                        <ReactMarkdown>
                          {character.description}
                        </ReactMarkdown>
                      </Container>
                      <Container>
                        <Flex>
                          <Box w='70px' h='10'>
                            Cost
                          </Box>
                          <Spacer />
                          <Box w='170px' h='10' >
                            {character.cost}
                          </Box>
                        </Flex>
                      </Container>
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Container>
        </Section >
      </VStack >
    </Layout >
  )
}

export const query = graphql`
  query($slug: String!) {
    directus {
      page: Page_by_id(id: 2 ) {
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

      character(filter: {slug: {_eq: $slug}}) {
        profile {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: TRACED_SVG, width: 1000, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
						}
					}
        }
        species {
          name
          description
        }
        gender
        mana_regen_rate
        max_health
        max_mana
        max_stamina
        move_speed
        name
        slug
        faction {
          name
          description
        }
        element {
          name
          description
        }
        description
        cost
      }
    }
  }
`