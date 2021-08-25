import Header from './Components/Header';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom' 
import Timer from './Components/Timer';
import Nav from './Components/Nav';
import { Title } from './Components/Header/header.styles';
import react,{useState} from 'react'
function App() {

  Timer.defaultProps = {
        
    mili: 0,
    sec: 0,
    min: 0,
    hours: 0,
} 
  return (
    <main>
      
   
      <Header/>
      
        
        </main>         
  );
}

export default App;
