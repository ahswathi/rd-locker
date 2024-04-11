import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Styles from '../component/Style.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [layout, setLayout] = useState(false);
  const path = location.pathname.split('/')[1];

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     setLayout(true)
  //     if (!path) {
  //       navigate('/dashboard')
  //     }
  //   } else {
  //     navigate('/')
  //   }
  // }, [token, path])

  return (
    <div className={Styles.mainContainer}>
      <Header children={children} />
      <Sidebar />
    </div>
  )
}

export default Layout;