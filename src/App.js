import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Parallax from './components/Parallax/Parallax';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Parallax />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
