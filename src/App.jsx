import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardTeam from './CardTeam';
import Layout from './Layout';
import FormWork from './FormWork';
import Home from './Home';
import SectionService from './SectionService';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/team" element={<CardTeam/>}/>
          <Route exact path="/trabaja-con-nosotros" element={<FormWork/>}/>
          <Route exact path="/servicios" element={<SectionService/>}/>
        </Routes>
      </Layout>
      
      
    </BrowserRouter>
  )
}

export default App
