import { BlogCells } from '..'
import { render } from '@testing-library/react'

describe('BlogCells', () => {
  test('should render the component without error', () => {
    render(<BlogCells />)
  })
})
