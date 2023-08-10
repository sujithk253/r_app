import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [fields,setFields] = useState(fieldsList);
  return (
    <Container>
      <MainHeader title='Register' />
      <RegistrationForm fieldsList={fields}/>
    </Container>
  );
}

export default App;

var fieldsList = [
  {
    label:"Name",
    placeholder:"Please enter your name",
    width:30,
  },
  {
    label:"Email",
    placeholder:"Please enter your email",
    width:30,
  },
]
