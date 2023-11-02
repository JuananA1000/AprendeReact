import DataRouter from './DataRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <DataRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
