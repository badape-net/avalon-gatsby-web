import React from "react"
import { Box, Badge } from '@chakra-ui/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CharacterCard = ({ character }) => {
  console.log(character)
  const profileImage = getImage(character.profile.imageFile.childImageSharp.gatsbyImageData)


  return (
    <Box w="100%" overflow='hidden'>
      <GatsbyImage image={profileImage} alt={character.profile.id} />
    </Box>
  )
}

export default CharacterCard