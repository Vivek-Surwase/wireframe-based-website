import NavBar from "./components/navigation-bar";
import ProductCard from "./components/product-card";
import React from 'react';
// import TiredAnimation from "./components/tiredAnimation"
// import { ReactComponent as ReactLogo } from './animations/logo.svg';

const App = () => {

  function cardClicked(e){
    let element = e.target.currentStyle || getComputedStyle(e.target);
    console.log(e.target.getBoundingClientRect());
    let pointer = document.getElementById("bot");
    pointer.style.marginTop = e.target.getBoundingClientRect().height - 100 + window.scrollY + "px";
    pointer.style.backgroundColor = "red";
    pointer.style.transition = "all 2s"
  }


  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="contentArea row">
        <div className="two col-lg-12">
          <ProductCard cardClicked = {cardClicked}></ProductCard>
          <div id="bot" onClick = {cardClicked}>
            {/* <TiredAnimation/> */}

          </div>
          {/* <div className="assistant">
            <ReactLogo></ReactLogo>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;