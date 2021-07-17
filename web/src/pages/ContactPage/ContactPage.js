import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
      <Label name="name" errorClassName="error">
        Name
      </Label>
      <TextField
        name="name"
        validation={{ required: true }}
        errorClassName="error"
      />
      <FieldError name="name" className="error" />

      <Label name="email" errorClassName="error">
        Email
      </Label>
      <TextField
        name="email"
        validation={{
          required: true,
          pattern: {
            value: /[^@]+@[^.]+\..+/,
            message: 'Please enter a valid email address',
          },
        }}
        errorClassName="error"
      />
      <FieldError name="email" className="error" />

      <Label name="message" errorClassName="error">
        Message
      </Label>
      <TextAreaField
        name="message"
        validation={{ required: true }}
        errorClassName="error"
      />
      <FieldError name="message" className="error" />

      <Submit>Save</Submit>
    </Form>
  )
}

export default ContactPage
