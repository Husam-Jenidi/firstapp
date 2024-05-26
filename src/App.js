import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Nav from './components/Nav';
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Apples from './components/Apples';
import Oranges from './components/Oranges';
import Bag from './components/Bag';
function App() {
  return (
  <div>

    <Header name="Anna" color="Red"/>
    <Nav first="Home"/>
    <Main greeting="Hola"/>
    <Main greeting="Bye Bye"/>
    <Sidebar greeting="Ciao"/>
    <Bag children ={<Apples color="Blue" number="30"/>}/>
    <Bag children ={<Oranges friend="Sham"/>}/>

    </div>

    )
}

export default App;
 