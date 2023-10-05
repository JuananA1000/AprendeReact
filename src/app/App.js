import Sidebar from '../components/SideBar';
import DataRouter from './DataRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <BrowserRouter>
          <Sidebar>
            <DataRouter />
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
