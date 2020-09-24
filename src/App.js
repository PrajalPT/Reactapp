import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';

import './App.css';

function App() {

  const [isLogin, setIsLogin] = useState(true);
  let [formState, setFormState] = useState({});

  const handleRegisterClick = () => {
    setIsLogin(false);
  }

  const handleLoginClick = () => {
    setIsLogin(true);
  }

  const handleFormSubmit = () => {

  }

  const formTitle = isLogin ? "Login" : "Register";

  return (
    <div className="App">
      <div className="formbuttons">
        <Button 
          onClick={handleLoginClick}
          variant="contained" 
          color="primary" 
          style={{width:'150px', marginRight:'10px'}}>
            Login
        </Button>
        <Button 
          onClick={handleRegisterClick}
          variant="contained" 
          style={{width:'150px'}}>
            Register
        </Button>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className="submitbutton">
        <Button 
          onClick={handleFormSubmit}
          variant="contained" 
          color="secondary" 
          style={{width:'310px', marginTop:'20px'}}>
            {formTitle}
        </Button>
      </div>
    </div>
  );
}

export default App;
