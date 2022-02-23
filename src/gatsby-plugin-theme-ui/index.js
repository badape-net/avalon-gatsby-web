import { tosh } from '@theme-ui/presets'

const theme = {
  ...tosh,
  styles: {
    ...tosh.styles,
  },
  colors: {
    text: '#000',
    background: '#fff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
}

export default theme