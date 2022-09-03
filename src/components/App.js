import React from "react";
//import "./App.css";

import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <section className="page">
        <Header />
        <Main />
        <div className="box"></div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
