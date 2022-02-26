import * as React from 'react'
import { Link } from 'gatsby'
import { Box } from 'grommet';

const Template = ({ pageTitle, children }) => {
  return (
    <Box>
      <title>{pageTitle}</title>
      {children}
      <footer
        sx={{
          width: '100%',
        }}>
        <Box>
          <Link to="about" activeClassName="active" sx={{
            color: 'inherit',
            '&.active': {
              color: 'primary',
            },
          }}>
            Link
          </Link>
        </Box>
      </footer>
    </Box>
  )
}

export default Template