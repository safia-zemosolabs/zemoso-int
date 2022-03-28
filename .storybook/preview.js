import { ThemeProvider } from 'emotion-theming'
import theme from '../src/themes/'
import { MemoryRouter } from 'react-router'
import './storybook.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (

    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
          {Story()}
      </ThemeProvider>
    </MemoryRouter>

  )
];