import './App.css';

/// This uses iconify icons
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="upper">
          <div className="titles">
            <h3>Create Account</h3>
            <p>Create an account so you can explore all the existing jobs</p>
          </div>
          <div className="input-button">
            <div className="inputs">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="button-signin">
              <button>Sign Up</button>
              <p>Already have an account</p>
            </div>
          </div>
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
