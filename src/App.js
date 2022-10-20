import './App.css';
import Admin from "./component/admin/admin";
import Navbar from "./component/navbar/navbar";
import About from "./component/pages/about/about";
import Contact from "./component/pages/contact/contact";
import Home from "./component/pages/home/home";
import Signin from "./component/pages/login/signin";
import Signup from "./component/pages/login/signup";
import Post from "./component/photo/Post"
import {PostForm} from "./component/photo/PostForm"
import EditUser from './component/navbar/EditUser';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/picture' element={<PostForm/>}/>
          <Route path="/admin/edit/:id" element={<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
