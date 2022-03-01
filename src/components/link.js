import React from "react"
import { Link as ChakraLink } from '@chakra-ui/react'
import { navigate } from "gatsby"

const Link = ({ to, ...rest }) => {
  return (
    <ChakraLink href={to}
      onClick={ev => {
        navigate(to)
        ev.preventDefault()
      }}
      {...rest}
    />
  )
}


export default Link