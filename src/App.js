import './App.css';
import { Container, Form, FormInput } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [fields,setFields] = useState(fieldsList);
  return (
    <Container>
      <MainHeader title='Registration Form' />
      <Form unstackable>
        <Form.Group>
          <FormInput 
          icon='tags'
          width={16}
          label="Username"
          placeholder="Please Enter Your Username"
          ></FormInput>
        </Form.Group>

      </Form>
    </Container>
  );
}

export default App;

var fieldsList = [
  {
    label:"Username",
    placeholder:"Please enter your username",
    width:30,
  }
]
