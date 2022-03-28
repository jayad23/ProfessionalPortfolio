
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './App.css';

//Importations
import Home from "./Views/Home";
import About from "./Views/About";
import WorkHistory from "./Views/WorkHistory";
import Skills from "./Views/Skills";
import MainLayOut from "./Custom/MainLayOut";
import Form from "./components/Form";
import { Blog } from "./Views/Blog";

//Provider
import { ProfesionalProvider } from "./Context/ProfesionalInfoContext";
import Academic from "./Views/Academic";

function App() {
  return (
    <BrowserRouter>
      <ProfesionalProvider>
        <MainLayOut>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/academic" exact element={<Academic/>}/>
            <Route path="/workhistory" exact element={<WorkHistory/>}/>
            <Route path="/skills" exact element={<Skills/>}/>
            <Route path="/blog" exact element={<Blog/>}/>
            <Route path="/contact" exact element={<Form/>}/>
          </Routes>
        </MainLayOut>
      </ProfesionalProvider>
    </BrowserRouter>
  );
 
}

export default App;
