import React from "react"
import { Box, AspectRatio } from '@chakra-ui/react'
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
      <AspectRatio ratio={16 / 9}>
        {children}
      </AspectRatio>
    </BackgroundImage>
  )
}

export default Section