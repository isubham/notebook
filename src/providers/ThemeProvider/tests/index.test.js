import { render, screen } from '@testing-library/react'
import { useContext } from 'react'
import { ThemeContext } from '..'

const ThemeConsumer = () => {
  const theme = useContext(ThemeContext)
  return (
      <div>{theme}</div>
  )
}

describe('ThemeProvider', () => {
  test('it should display the default value', () => {
    render(<ThemeConsumer />)

    const text = screen.getByText(/light/i)
    expect(text).toBeInTheDocument()
  })
})
