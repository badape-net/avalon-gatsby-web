import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, Text, Link as ChakraLink } from '@chakra-ui/react'

import { } from 'grommet';

const Header = ({ siteTitle }) => (
  <Flex px={2} color='white' bg='black' alignItems='center'>
    <Text p={2} fontWeight='bold'>Rebass</Text>
    <Box mx='auto' />
    <ChakraLink variant='nav' href='#!'>
      Profile
    </ChakraLink>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header