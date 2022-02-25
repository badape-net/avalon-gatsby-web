import * as React from "react"
import { graphql } from "gatsby"
import Pagelayout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Main, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet';

const IndexPage = ({ data }) => {
  const page = data.directus.Page_by_id
  const characters = data.directus.character
  const classes = data.directus.character_class

  return (
    <Pagelayout pageTitle={page.title}>
      <Main>
        <Box p={4} bg="muted" sx={{ flex: '1 1 auto' }}>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          <GatsbyImage image={page.banner.imageFile.childImageSharp.gatsbyImageData} alt={page.banner.id} />
        </Box>
        {
          characters.map((character, i) => (
            <Box p={4} bg="muted" key={character.id} sx={{ flex: '1 1 auto' }}>
              <Card sx={{ maxWidth: 256, }}>
                <Text sx={{ fontSize: 4, fontWeight: 'bold', }}>
                  {character.name}
                </Text >
              </Card>
            </Box>
          ))
        }

        {
          classes.map((character, i) => (
            <Box bg="muted" key={character.id} p={4}>
              <h2>
                {character.name}
              </h2>
            </Box>
          ))
        }
      </Main>
    </Pagelayout >
  )
}

export const query = graphql`
  query {
    directus {
      Page_by_id(id: 1 ) {
        title
        content
        slug
        banner {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(width: 500, layout: FIXED, formats: [AUTO, WEBP])
						}
					}
        }
      }
    }
    directus {
      character {
        id
        name        
      }
      character_class {
        id
        name        
      }
    }
  }
`

export default IndexPage
