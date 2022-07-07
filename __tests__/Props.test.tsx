import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Post from '../components/Post'
import { POST } from '../types/Types'
describe('Post component with given props', () => {
  let dummpyProps: POST
  beforeEach(() => {
    dummpyProps = {
      userId: 1,
      id: 1,
      title: 'dummy title 1',
      body: 'dummy body 1',
    }
  })
  it('Should render correctly with given props value', () => {
    render(<Post {...dummpyProps} />)
    expect(screen.getByText(dummpyProps.id)).toBeInTheDocument()
    expect(screen.getByText(dummpyProps.title)).toBeInTheDocument()
    // screen.debug()
  })
})
