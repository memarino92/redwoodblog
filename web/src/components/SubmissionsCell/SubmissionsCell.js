import Submission from 'src/components/Submission/Submission'

export const QUERY = gql`
  query SubmissionsQuery {
    contacts {
      id
      name
      email
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }) => {
  return contacts.map((submission) => (
    <Submission key={submission.id} submission={submission} />
  ))
}
