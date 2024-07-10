import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Recipe from './pages/Recipe';
import Recipes from './pages/Recipes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;