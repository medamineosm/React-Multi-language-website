import React from "react";
import Content from "./Components/Contenu/Content";
import ToggleLangues from "./Components/ToggleLangs/ToggleLangues";
import ContextProvider from "./context/LangContext";

function App() {
  return (
    <ContextProvider>
      <ToggleLangues/>
      <Content/>
    </ContextProvider>
  );
}

export default App;
