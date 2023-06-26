import './App.css';
import Home from './components/HomePage/Home';
import Create from './components/AddUser/Create';
import Edit from './components/UpdateUser/Edit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landingpage from './components/LandingPage/Landingpage';
function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
