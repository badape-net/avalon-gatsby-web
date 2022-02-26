import * as React from "react"
import { graphql } from "gatsby"
import Pagelayout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Grommet, Main, Heading, Header, Paragraph, Footer, Button, Text, Icons, Menu, Anchor } from 'grommet';
import BackgroundImage from 'gatsby-background-image' 
import { convertToBgImage } from "gbimage-bridge"



const IndexPage = ({ data }) => {
  const page = data.directus.Page_by_id
  const characters = data.directus.character
  const classes = data.directus.character_class

  const bgImage = convertToBgImage(page.banner.imageFile.childImageSharp.fluid)

  return (
    <div>
      <Header background="brand">
        <Button hoverIndicator />
      </Header>
      <Main pad="large">
        <BackgroundImage
          Tag="section"
          fluid={page.banner.imageFile.childImageSharp.fluid}
          {...bgImage}
          preserveStackingContext
        >

          <Heading>Something</Heading>
          <Paragraph>Something about something</Paragraph>
          <GatsbyImage image={page.banner.imageFile.childImageSharp.gatsbyImageData} alt={page.banner.id} />
        </BackgroundImage>
      </Main>
      <Footer background="brand" pad="medium">
        <Text>Copyright</Text>
      </Footer>
    </div>

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
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
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
