import React, { useState, useEffect } from 'react'
import ImageContent from './ImageContent'
import About from './About'
import MyBook from './MyBook'
import MyStory from './MyStory'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './App.css';

function App() {
  return(
    <div>
      <ImageContent />
      <About />
      <MyBook />
      <MyStory />
      <Portfolio />
      <Contact />
    </div>
  )
}
// navigation => 1. Icon 'JS' 2. fixed on top whenever (when user scroll down) @ nav color is same as image but when scroll color is changed in white
// imageslider or video below navigation bar
// content => I didn't choose yet
export default App;
