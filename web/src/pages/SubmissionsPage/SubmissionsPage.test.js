import { render } from '@redwoodjs/testing'

import SubmissionsPage from './SubmissionsPage'

describe('SubmissionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmissionsPage />)
    }).not.toThrow()
  })
})
