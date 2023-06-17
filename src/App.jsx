import { useState } from 'react';
import Main from './components/main';
import Layout from './components/layout';
import AppleIcon from './components/icons/apple';
import GoogleIcon from './components/icons/google';
import FacebookIcon from './components/icons/facebook';

import './App.css';
import Button from './components/buttonGroup/button';

function App() {
  const [title] = useState('Đây là trang APP nè');
  
  return (
    <div className="App">
      <Layout title={title}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button 
            icon={<AppleIcon />}
            title="Continue with Apple"
          />

          <Button 
            icon={<GoogleIcon />}
            title="Continue with Google"
          />

          <Button 
            icon={<FacebookIcon />}
            title="Continue with Facebook"
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
          />

          <Button />

        </div>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
