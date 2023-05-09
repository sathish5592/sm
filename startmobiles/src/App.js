
import './App.css';
import { ShopContextProvider } from './context/ShopContext';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductsPage from './pages/ProductsPage';
import {Form, Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Forms from './pages/Forms';
import Animation from './pages/Animation';








function App() {
  return (
    <div>
      <ShopContextProvider>
        
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/productpage' element={<ProductsPage/>} />
         <Route path='/ProductPage/:id' element={<Products/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/forms' element={ <Forms/> } />
         <Route path='/T' element={ <Animation/> } />
        
       </Routes>
       
       </ShopContextProvider>
          
     </div>
    
  );
}

export default App;
