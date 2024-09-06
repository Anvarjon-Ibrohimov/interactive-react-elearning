import React from "react";

import GlobalStyle from "./components/GlobalStyles";
// import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <h1>eLearning</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
