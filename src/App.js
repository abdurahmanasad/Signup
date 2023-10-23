import CustomInput from './inputs/CustomInput';
import './App.css';

/// This uses iconify icons
import { Icon } from '@iconify/react';

function App() {
  const inputs=[{type:"email",placeholder:"Email"},{type:"password",placeholder:"Password"},{type:"password",placeholder:"Confirm Password"}]

 const login=(event)=>{
  event.preventDefault();
    console.log("form submitted");
  }
  return (
    <div className="App">
      <div className="content">
        <div className="upper">
          <div className="titles">
            <h3>Create Account</h3>
            
            <p>Create an account so you can explore all the existing jobs</p>
          </div>
        <form onSubmit={login}>
        <div className="input-button">
            <div className="inputs">
              {inputs.map((inp,i)=><CustomInput key={i} type={inp.type} placeholder={inp.placeholder}/>
)}
              
            </div>
            <div className="button-signin">
              <button type='submit'>Sign Up</button>
              <p>Already have an account</p>
            </div>
          </div>
        </form>
        </div>
        <div className="lower">
          <p>Or continue with</p>
          <div className="socials">
            <div className="social-link">
              <Icon icon="mdi:google" />
            </div>
            <div className="social-link">
              <Icon icon="mdi:facebook" />
            </div>
            <div className="social-link">
              <Icon icon="mdi:apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
