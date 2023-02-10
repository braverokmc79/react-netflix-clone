import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, Routes ,Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import ScrollTop from './components/ScrollTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessBlocked from './pages/AccessBlocked';
import TermsofService from './pages/TermsofService';
import NavMenu from './components/NavMenu';

const Layout =()=>{
  return(
    <div>
       <Nav />
    
     <NavMenu />
      

       <Outlet />

       <Footer />
       <ScrollTop />
    </div>
  )
}


function App() {

  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Layout />}>
           <Route index element={<MainPage />} />
           <Route path="search" element={<SearchPage />} />
           <Route path="accessBlocked" element={<AccessBlocked />} />
           <Route path="privacyPolicy" element={<PrivacyPolicy />} />
           <Route path="termsofService" element={<TermsofService />} />
           <Route path="/movie/:movieId" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>  
  );
}



export default App;
