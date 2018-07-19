import React, { Component } from 'react';
import classes from '../css/styles.css'

class Header extends Component {
    state ={
        keywords:''   
    }
    inputChangeHandle=(event)=>{
        const value=event.target.value ===''? 'active':'non-active';
        this.setState({
            active:value, 
            keywords: event.target.value
        })

    }
    render() { 
        return (
          <header className ={this.state.active}>
              <div className='logo'></div>
              <input type="text" onChange={this.inputChangeHandle}/>
           
          </header>
        
        );
    }
}

export default Header;