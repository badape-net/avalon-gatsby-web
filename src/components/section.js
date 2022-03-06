import React from "react"
import { AspectRatio, Box } from '@chakra-ui/react'
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"

const Section = ({ bannerImage, children }) => {
  const banner = getImage(bannerImage.imageFile.childImageSharp.gatsbyImageData)
  const bgImage = convertToBgImage(banner)
  
  return (
    <BackgroundImage Tag="section"
      {...bgImage}
      preserveStackingContext
    >
      <Box height="100vh" w="100%">
        {children}
      </Box>
    </BackgroundImage>
  )
}

export default Section