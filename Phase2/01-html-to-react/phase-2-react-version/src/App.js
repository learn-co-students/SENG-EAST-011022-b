import logo from './logo.svg';
import './reset.css';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MainDisplay from './components/MainDisplay';
import Form from './components/Form';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <div className='top-content-container'>
        <MainDisplay />
        <Form />
      </div>
      <CardContainer />
    </div>
  );
}

export default App;
