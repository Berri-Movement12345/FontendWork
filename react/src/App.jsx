import './css/App.css'
import './css/Home.css'
import './css/Navbar.css'
import './css/ThemeButton.css'

// import Welcome from "./component/welcome.jsx";
// import Count from "./component/Count.jsx";
// import Greeting from "./component/Greeting.jsx";
// import Login from "./component/Login.jsx";
// import LoginMessage from "./component/LoginMessage.jsx";
// import {Routes,Route} from "react-router-dom";
import Home from  "./component/Home.jsx";
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
// import Navbar from './component/Navbar';
import Timer from  './component/Timer.jsx';
import UserProfile from './component/UserProfile.jsx';
import ThemeButton from './component/ThemeButton.jsx';
import TheNavbar from './component/Navbar';
import FetchUser from './component/FetchUser.jsx';
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
import GetUsers from './component/GetUsers.jsx';
import SingleUser from './component/SingleUser.jsx';
import ProductList from './component/ProductList.jsx';
import { Routes, Route } from "react-router-dom";
import Pagination from "./component/Pagination.jsx";

function App() {
//  const name="Aman";
//  const user="React";
//  const isLoggedIn=false;

  return (
    <>
      {/* <Welcome name={name} user={user}/>
      <Count />
      <Greeting name="Godswill" />
      <Login />
      <LoginMessage isLoggedIn={isLoggedIn}/>
       */}
           <TheNavbar />
     <Routes>

     <Route path="/" element ={<Home />} />
     <Route path="/About" element ={<About />} />
       <Route path="/Contact" element ={<Contact />} />
       <Route  path="/timer" element={ <Timer />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
        <Route  path="/user/:id" element={ <UserProfile />} />
         <Route path='/users/:id' element={<SingleUser />} />
         <Route path='/users' element={<GetUsers />} />
         <Route path="/ProductList" element={<ProductList />} />
         {/* <Route path="/pagination" element={<Pagination />} /> */}
        
     </Routes>
     
     <ThemeButton/>
     <Pagination />
     <FetchUser/>
     
    </>
  )
}

export default App