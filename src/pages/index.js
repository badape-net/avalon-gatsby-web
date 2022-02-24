import * as React from "react"
import { graphql } from "gatsby"
import Pagelayout from "../components/layout"
import { Container, Card, Text } from 'theme-ui'
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const page = data.directus.Page_by_id
  const characters = data.directus.character
  const classes = data.directus.character_class

  return (
    <Pagelayout pageTitle={page.title}>
      <div>
        <Container p={4} bg="muted" p={4} sx={{ flex: '1 1 auto' }}>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          <GatsbyImage image={page.banner.imageFile.childImageSharp.gatsbyImageData} alt={page.banner.id} />
        </Container>
        {
          characters.map((character, i) => (
            <Container p={4} bg="muted" key={character.name} sx={{ flex: '1 1 auto' }}>
              <Card sx={{ maxWidth: 256, }}>
                <Text sx={{ fontSize: 4, fontWeight: 'bold', }}>
                  {character.name}
                </Text >
              </Card>
            </Container>
          ))
        }

        {
          classes.map((character, i) => (
            <Container bg="muted" key={character.name} p={4} sx={{ flex: '1 1 auto' }}>
              <h2>
                {character.name}
              </h2>
            </Container>
          ))
        }
      </div>
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
