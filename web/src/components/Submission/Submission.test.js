import { render } from '@redwoodjs/testing'

import Submission from './Submission'

describe('Submission', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Submission />)
    }).not.toThrow()
  })
})
