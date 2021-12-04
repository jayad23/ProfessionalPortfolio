import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './App.css';

//Importations
import Home from "./Views/Home";
import About from "./Views/About";
import WorkHistory from "./Views/WorkHistory";

//Layout

//Provider
import { ProfesionalProvider } from "./Context/ProfesionalInfoContext";
import Academic from "./Views/Academic";

function App() {
    
  return (
    <BrowserRouter>
      <ProfesionalProvider>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/academic" exact element={<Academic/>}/>
            <Route path="/workhistory" exact element={<WorkHistory/>}/>
          </Routes>
      </ProfesionalProvider>
    </BrowserRouter>
  );

}

export default App;
