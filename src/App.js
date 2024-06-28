import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Dashboard from './container/Dashboard';
import Layout from '../src/layout/Layout';
import { ToastContainer } from 'react-toastify';
import AdminUser from './adminUsers/AdminUser';
import Allusers from './userManagement/Allusers';
import PremiumMembers from './userManagement/PremiumMembers';
import Trash from './userManagement/Trash';
import ProfileDetails from './userManagement/ProfileDetails'; 
/* import Notifications from './container/Notifications';
import Categories from './categories/Categories';
import AddNewCategory from './categories/AddNewCategory';
import VendorsProfile from './userManagement/VendorsProfile';
import PrivacyPolicy from './userManagement/PrivacyPolicy';
import RegistrationDetails from './userManagement/RegistrationDetails';
import Accounts from './accounts/accounts';
import ProfileDetails from './userManagement/ProfileDetails'; */
import Login from './login/Login';
/* import AddNewVendor from './userManagement/AddNewVendor'; */
import ForgotPassword from './login/ForgotPassword';
import ConfirmEmail from './login/ConfimEmail';
import ResendMail from './login/ResendMail';
import ResetPassword from './login/ResetPassword';
/* import Settings from './header/Settings'; */

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme='dark'
        >
        </ToastContainer>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/login/ConfirmEmail' element={<ConfirmEmail />} />
          <Route path='/login/ResendMail' element={<ResendMail />} />
          <Route path='/login/ResetPassword/:token' element={<ResetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/adminUsers/AdminUser' element={<AdminUser />} />
          <Route path='/userManagement/Allusers' element={<Allusers />} />
          <Route path='/userManagement/PremiumMembers' element={<PremiumMembers />} />
          <Route path='/userManagement/Trash' element={<Trash />} />
          <Route path='/userManagement/ProfileDetails' element={<ProfileDetails />} />
          
          {/* <Route path='/categories/Categories' element={<Categories />} />
          <Route path='/categories/AddNewCategory' element={<AddNewCategory />} />
          <Route path='/userManagement/KYCApproval' element={<KYCApproval />} />
          <Route path='/userManagement/VendorsProfile' element={<VendorsProfile />} />
          <Route path='/userManagement/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/userManagement/KYCApproval/RegistrationDetails' element={<RegistrationDetails />} />
          <Route path='/userManagement/VendorsProfile/ProfileDetails' element={<ProfileDetails />} />
          <Route path='/userManagement/VendorsProfile/AddNewVendor' element={<AddNewVendor />} />
        
          <Route path='/adminUsers/AdminUser' element={<AdminUser />} />
          <Route path='/adminUsers/AdminUser/AddNewUser' element={<AddNewUser />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/reports/accounts' element={<Accounts />} />
          
          <Route path='/header/Settings' element={<Settings />} /> */}
          {/* <Route path='/receipt' element={<Receipt />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;