import Sidebar from '../components/SideBar';
import './App.css';

import DataRouter from './DataRouter';
import { BrowserRouter } from 'react-router-dom';

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
