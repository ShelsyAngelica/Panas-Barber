import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardTeam from './CardTeam';
import Layout from './Layout';
import Section from './Section';
import FormWork from './FormWork';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Section/>}/>
          <Route exact path="/team" element={<CardTeam/>}/>
          <Route exact path="/trabaja-con-nosotros" element={<FormWork/>}/>
        </Routes>
      </Layout>
      
      
    </BrowserRouter>
  )
}

export default App
