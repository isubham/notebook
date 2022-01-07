import { BlogCell } from "../blog-cell";
import { render, screen } from '@testing-library/react'

describe('BlogCell', () => {
  test('should render the input', () => {
    render(<BlogCell />)
    const linkElement = screen.getByText(/Current Format/i);
    expect(linkElement).toBeInTheDocument();
  })
})