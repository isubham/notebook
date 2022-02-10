import { BlogCell } from '..'
import { render } from '@testing-library/react'

describe('BlogCell', () => {
  test('should render the component without error', () => {
    render(<BlogCell />)
  })
})
