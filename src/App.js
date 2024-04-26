import 'react-toastify/dist/ReactToastify.css';
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
import ETravellerProfile from './eTravelerManagement/ETravellerProfile';
import ProfileInfo from './eTravelerManagement/ProfileInfo';
import AgentProfile from './deliveryAgent/AgentProfile';
import KYCApprovals from './deliveryAgent/KYCApprovals';
import AgentRegistraionDetail from './deliveryAgent/AgentRegistrationDetail';
import DeliveryAgentProfile from './deliveryAgent/DeliveryAgentProfile';
import AddAgent from './deliveryAgent/AddAgent';
import AdminUser from './adminUsers/AdminUser';
import AddNewUser from './adminUsers/AddNewUser';
import SubscriptionPlans from './subscription/SubscriptionPlans';
import CreateSubcscriptionPlan from './subscription/CreateSubcscriptionPlan';
import Voucher from './voucher/Voucher';
import AddVoucher from './voucher/AddVoucher';
import Messages from './techSupport/Messages';
import Enquiries from './techSupport/Enquiries';
import BrandPartner from './brandPartner/BrandPartner';
import AddNewVoucher from './brandPartner/AddNewVoucher';
import DownloadPdf from './transactions/DownloadPdf';

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
          <Route path='/categories/Categories' element={<Categories />} />
          <Route path='/categories/AddNewCategory' element={<AddNewCategory />} />
          <Route path='/healthcare/HealthCare' element={<HealthCare />} />
          <Route path='/vendorManagement/KYCApproval' element={<KYCApproval />} />
          <Route path='/vendorManagement/VendorsProfile' element={<VendorsProfile />} />
          <Route path='/vendorManagement/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/vendorManagement/KYCApproval/RegistrationDetails' element={<RegistrationDetails />} />
          <Route path='/vendorManagement/VendorsProfile/ProfileDetails' element={<ProfileDetails />} />
          <Route path='/vendorManagement/VendorsProfile/AddNewVendor' element={<AddNewVendor />} />
          <Route path='/eTravelerManagement/ETravellerProfile' element={<ETravellerProfile />} />
          <Route path='/eTravelerManagement/ETravellerProfile/ProfileInfo' element={<ProfileInfo />} />
          <Route path='/deliveryAgent/DeliveryAgentProfile' element={<AgentProfile />} />
          <Route path='/deliveryAgent/KYCApprovals' element={<KYCApprovals />} />
          <Route path='/deliveryAgent/KYCApprovals/AgentRegistraionDetail' element={<AgentRegistraionDetail />} />
          <Route path='/deliveryAgent/DeliveryAgentProfile/DeliveryAgentProfile' element={<DeliveryAgentProfile />} />
          <Route path='/deliveryAgent/DeliveryAgentProfile/AddAgent' element={<AddAgent />} />
          <Route path='/adminUsers/AdminUser' element={<AdminUser />} />
          <Route path='/adminUsers/AdminUser/AddNewUser' element={<AddNewUser />} />
          <Route path='/voucher/Voucher' element={<Voucher />} />
          <Route path='/voucher/Voucher/AddVoucher' element={<AddVoucher />} />
          <Route path='/techSupport/Messages' element={<Messages />} />
          <Route path='/techSupport/Enquiries' element={<Enquiries />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/receipt' element={<Receipt />} />
          <Route path='/reports/accounts' element={<Accounts />} />
          <Route path='/reports/transactions' element={<Transactions />} />
          <Route path='/reports/transactions/DownloadPdf' element={<DownloadPdf />} />
          <Route path='/subscription/SubscriptionPlans' element={<SubscriptionPlans />} />
          <Route path='/subscription/CreateSubcscriptionPlan' element={<CreateSubcscriptionPlan />} />
          <Route path='/brandPartner/BrandPartner' element={<BrandPartner />} />
          <Route path='/brandPartner/AddNewVoucher' element={<AddNewVoucher />} />
          {/* <Route path='/receipt' element={<Receipt />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;