import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"





/* write an <About> component here */
// function About() {
//   return (
//     <div id='about'>About</div>
//   )
// }

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
