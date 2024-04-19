import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Layout from './components/Layout';
import Info from './components/Info';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/> }>
    <Route index element={<Home />} /> 
    <Route path='/info' element={<Info />} />
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
