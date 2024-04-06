import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogoPic from './components/LogoPic';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Project from './pages/Project';
import Services from './pages/Services';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/projects' element={<Project/>}/>
    <Route exact path='/partners' element={<Partners/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/logo' element={<LogoPic/>}/>
    <Route exact path='/terms' element={<Terms/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
