// import React from 'react'; // the React library itself
import logo from './logo.svg';
import './App.css'; // no variable name and no from directive

function App(props) {
  const subject = `${props.test}${props.subject}`;
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {subject}
        </p>
        
      </header>
    </div>
  );
}

export default App;
