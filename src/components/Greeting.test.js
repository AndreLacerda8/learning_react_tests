import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Greeting } from './Greeting'

describe('Greeting component', () => {
  test('renders Hello world as a text', () => {
    render(<Greeting />)
    const helloWorldElement = screen.getByText('Hello world')
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders Good morning if the button was NOT clicked', () => {
    render(<Greeting />)
    const outputElement = screen.getByText('Good morning')
    expect(outputElement).toBeInTheDocument()
  })

  test('renders Changed if the button was clicked', () => {
    render(<Greeting />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const outputElement = screen.getByText('Changed')
    expect(outputElement).toBeInTheDocument()
  })

  test('does not render "Good morning" if the button was clicked', () => {
    render(<Greeting />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const outputElement = screen.queryByText('Good morning')
    expect(outputElement).toBeNull()
  })
})