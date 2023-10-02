import React, { useState } from 'react'
import { Button, ButtonGroup, Form } from 'semantic-ui-react'
import axios from 'axios';

function RegistrationForm({fieldsList}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    try {
      const response = await axios.get('http://localhost/nlpApp/public/home', formData);
      console.log('Form data submitted:', response.data);
      // Optionally, reset the form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  const handleInputChange = (event, { name, value }) => {
    setFormData((prevData) => ({
      //...prevData,
      [name]: value,
    }));
  };
  return (
    <Form unstackable onSubmit={handleSubmit}>

    <Form.Input
        label="First Name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <Form.Input
        label="Last Name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <Form.Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <ButtonGroup>
      <Button type="submit">Submit</Button>
      </ButtonGroup>

  </Form>
  )
}

export default RegistrationForm