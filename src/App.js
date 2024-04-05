import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Dashboard from './container/Dashboard';
import Layout from '../src/layout/Layout';
import { ToastContainer } from 'react-toastify'
import Notifications from './container/Notifications';
import Categories from './categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
          >
        </ToastContainer>
          <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/categories/Categories' element={<Categories/>}/>
          </Routes>
       </Layout>
       {/* <Routes>
              <Route path='/' element={<Notifications/>} />
          </Routes> */}
    </BrowserRouter>
  );
}

export default App;