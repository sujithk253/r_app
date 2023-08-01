import React from 'react'
import { Form, FormInput } from 'semantic-ui-react'

function RegistrationForm({fieldsList}) {
  return (
    <Form unstackable>
    
    {fieldsList.map((field) => (
        <Form.Group key={field.label}>
          <FormInput
            icon='tags'
            width={16}
            label={field.label}
            placeholder={`Please Enter Your ${field.label}`}
          />
        </Form.Group>
      ))}
    

  </Form>
  )
}

export default RegistrationForm