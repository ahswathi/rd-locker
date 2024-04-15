import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Dashboard from './container/Dashboard';
import Layout from '../src/layout/Layout';
import { ToastContainer } from 'react-toastify'
import Notifications from './container/Notifications';
import Categories from './categories/Categories';
import AddNewCategory from './categories/AddNewCategory';
import HealthCare from './healthcare/HealthCare';
import KYCApproval from './vendorManagement/KYCApproval';
import VendorsProfile from './vendorManagement/VendorsProfile';
import PrivacyPolicy from './vendorManagement/PrivacyPolicy';
import RegistrationDetails from './vendorManagement/RegistrationDetails';
import Accounts from './accounts/accounts';
import Transactions from './transactions/transactions';
import Receipt from './receipt/receipt';
import ProfileDetails from './vendorManagement/ProfileDetails';
import Login from './login/Login';
import AddNewVendor from './vendorManagement/AddNewVendor';
import ForgotPassword from './login/ForgotPassword';
import ConfirmEmail from './login/ConfimEmail';
import ResendMail from './login/ResendMail';
import ResetPassword from './login/ResetPassword';

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
          <Route path='/' element={<Dashboard />} />
          <Route path='/categories/Categories' element={<Categories />} />
          <Route path='/categories/AddNewCategory' element={<AddNewCategory />} />
          <Route path='/healthcare/HealthCare' element={<HealthCare />} />
          <Route path='/vendorManagement/KYCApproval' element={<KYCApproval />} />
          <Route path='/vendorManagement/VendorsProfile' element={<VendorsProfile />} />
          <Route path='/vendorManagement/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/vendorManagement/KYCApproval/RegistrationDetails' element={<RegistrationDetails />} />
          <Route path='/vendorManagement/VendorsProfile/ProfileDetails' element={<ProfileDetails />} />
          <Route path='/vendorManagement/VendorsProfile/AddNewVendor' element={<AddNewVendor />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/receipt' element={<Receipt />} />
        </Routes>
      </Layout>
      {/* <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/login/ConfirmEmail' element={<ConfirmEmail />} />
          <Route path='/login/ResendMail' element={<ResendMail />} />
          <Route path='/login/ResetPassword' element={<ResetPassword />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;