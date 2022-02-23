import * as React from "react"
import { graphql } from "gatsby"
import Pagelayout from "../components/layout"

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Card, Text } from 'theme-ui'

import { getAssetURL } from "../utils/get-asset-url";

const IndexPage = ({ data }) => {
  console.log(data)

  const page = data.directus.Page[0]
  const characters = data.directus.character
  const classes = data.directus.character_class
  const image = getImage(getAssetURL(page.banner.id))
  console.log(image)
  
  return (
    <Pagelayout pageTitle={page.title}>
      <div>
        <Container p={4} bg="muted" p={4} sx={{ flex: '1 1 auto' }}>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg" alt="A kitten" />
          <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
          <StaticImage src="https://directus.badape.online/assets/21652de5-6e1b-4226-8a07-b38267256e69" alt="A kitten" layout="fixed" />
          <img src={getAssetURL(page.banner.id)} alt="" loading="lazy" />
          <GatsbyImage image={image} alt={page.banner.id} />
        </Container>
        {
          characters.map((character, i) => (
            <Container p={4} bg="muted" key={character.name} p={4} sx={{ flex: '1 1 auto' }}>
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
            <Container key={character.name} p={4} sx={{ flex: '1 1 auto' }}>
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
      Page(filter: { id: { _eq: 1 } }) {
        title
        content
        slug
        banner {
          id
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
