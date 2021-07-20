const Submission = ({ submission }) => {
  return (
    <div id={submission.id}>
      <h2>Name: {submission.name}</h2>
      <p>Email: {submission.email}</p>
      <p>
        Message: <br />
        {submission.message}
      </p>
    </div>
  )
}

export default Submission
