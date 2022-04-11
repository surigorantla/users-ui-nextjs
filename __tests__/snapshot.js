import { render } from '@testing-library/react'
import Index from '@/pages/index'

it('renders UserList home page unchanged', () => {
  const { container } = render(<Index />)
  expect(container).toMatchSnapshot()
})