import './App.css';
import NavBar from './Componets/NavBar/Navigation';
import MainPage from './Componets/HomePage/MainPage';
import DisplayContent from './Componets/DisplayContent/DisplayContent';

function App() {
  return (
    <div className="App">
        <NavBar />
        {/*<MainPage />*/}
        <DisplayContent/>
    </div>
  );
}

export default App;