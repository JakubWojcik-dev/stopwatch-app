import React from 'react'
import { DivHeader,Title, Image, LinkHeader } from './header.styles'
import logo from '../../clock-watch.svg'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom' 
import Stopwatch from '../Stopwatch'
import Nav from '../Nav'
import  Timer  from '../Timer'
const Header = () => {

    return (
        <Router>
        <DivHeader>
        <Image src={logo} alt="logo"/>    
       <Title>Stopwatch App</Title>     
       <Nav/>
       </DivHeader>
         
      <Switch>
      <Route path='/' exact component="none"/>
       <Route path='/alarm' component={Nav}/>
       <Route path='/timer' component={Timer}/> 
       <Route path='/Stopwatch' component={Stopwatch}/>
       </Switch>
       
       </Router>  
    )
}

export default Header