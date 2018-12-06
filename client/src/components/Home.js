import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
<Fragment>
  <h1>5e Dungeons & Dragons Probability Calculator</h1>
  <Link className='link' to='/signup'>Sign Up</Link>
  <Link className='link' to='/login'>Login</Link>
</Fragment>

export default Home;