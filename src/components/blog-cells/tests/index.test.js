import { BlogCells } from "..";
import { render, screen } from '@testing-library/react'

describe('BlogCells', () => {
  test('should render the component without error', () => {
    render(<BlogCells />)
  })
})