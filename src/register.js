
import lock from './lock.png'
import userImg from './user.png'
import mail from './mail.png'
import './login.css';
import React from 'react';
import {BrowserRouter as Link}from 'react-router-dom';

class Register extends React.Component { 
 
    render(){


      return (


        <section>
        <div className="box">
        <div className="form">
         <h2>Register</h2>
         <form>
         
         <div className="inputBx">
         <input type="text" placeholder="username" required/>
         <img src={userImg} alt="user"></img>
         </div>
    
         <div className="inputBx">
         <input type="email" placeholder="email"  required/>
         <img src={mail} alt="user"></img>
         </div>
    
         <div className="inputBx">
         <input type="password" placeholder="password"  required/>
         <img src={lock} alt="lock"></img>
         </div>
    
         <div className="inputBx">
         <input type="password" placeholder="confirm password"  ref={this.input}/>
         <img src={lock} alt="lock"></img>
         </div>
    
         <div className="inputBx">
         <input type="submit" value="submit" placeholder="Sign-up"/>   
         </div>
         
         </form>
         
         <Link to={'/login-page'}>login account?</Link>
        </div>
        </div>
        </section>
       
      );
    }
    }

    export default Register;
