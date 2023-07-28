import './App.css';
import { Container, Form, FormInput } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <Container>
      <MainHeader title='Simple Form' />
      <Form unstackable>
        <Form.Group>
          <FormInput 
          icon='tags'
          width={12}
          label="Username"
          placeholder="Please Enter Your Username"
          ></FormInput>
        </Form.Group>

      </Form>
    </Container>
  );
}

export default App;
