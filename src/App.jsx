import {React, Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component
{
  constructor(props)
  {
   super(props);
   this.state =
   { 
      name: ""
   }
  }
  render()
  { return(
    <div>
	<form classname="in">
	  <h2>Contato</h2>
         <input type="text"id="name" name="username" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Digite o seu nome"/>
	</form>
    </div>
  )}
}
export default App
