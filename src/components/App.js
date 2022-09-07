import React from "react";
import Header from "./Header";
import Description from "./Description";
import Main from "./Main";
import Conclusion from "./Conclusion";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <section className="page">
        <Header />
        <Description />
        <Main />
        <Conclusion />
        <div className="box"></div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
