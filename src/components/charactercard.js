
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Text} from '@chakra-ui/react'

const CharacterCard = ({ siteTitle }) => (
<Box  height="small" width="small" background="light-1">
  <Heading pad="medium">Header</Heading>
  <CardBody pad="medium">Body</CardBody>
  <Text pad={{horizontal: "small"}} background="light-2">
    <Button
    icon={<Icons.Favorite color="red" />}
    hoverIndicator
    />
    <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  </Text>
</Box>
)

CharacterCard.propTypes = {
  siteTitle: PropTypes.string,
}

CharacterCard.defaultProps = {
  siteTitle: ``,
}

export default CharacterCard