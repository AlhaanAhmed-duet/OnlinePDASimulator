import './App.css'
import PDASimulation from './components/PDASimulation';
import CreatePDA from './components/CreatePDA';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFoundPage';
function App() {
  
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PDASimulation/>} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/createPDA' element={<CreatePDA/>} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
