import { useState } from 'react';
import './App.css';


import Popup from './components/Popup';
import Register from './components/Register';

function App() {

  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
  }

  return (
    <div className="App">
      { toggled ? <Popup handleToggled={handleToggled}/> : <Register handleToggled={handleToggled} />}
    </div>
  );
}

export default App;


