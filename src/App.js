import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Pages/Shared/Header/Header';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Services from './Components/Pages/Services/Services/Services';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Register from './Components/Register/Register';
import Checkout from './Components/Pages/Checkout/Checkout';
import Confirmation from './Components/Pages/Confirmation/Confirmation';
import NotFound from './Components/Pages/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='relative' >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>


        <Route path='/confirmation' element={<Confirmation></Confirmation>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
