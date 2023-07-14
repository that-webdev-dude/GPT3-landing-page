import "./App.css";

import { Footer, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, Navbar, Brand } from "./components";

function App() {
  return (
    <div id="App" className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <div className="color__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
