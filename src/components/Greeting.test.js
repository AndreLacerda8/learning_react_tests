import { render, screen } from '@testing-library/react'
import { Greeting } from './Greeting'

test('renders Hello world as a text', () => {
  render(<Greeting />)
  const helloWorldElement = screen.getByText('Hello world')
  expect(helloWorldElement).toBeInTheDocument()
})