import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Styles from '../component/Style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/userSlice';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [layout, setLayout] = useState(false);
  const path = location.pathname.split('/')[1];
  const pathName = location.pathname;
  const token = localStorage.getItem("token");
  const { isLoggedIn } = useSelector(state => state.user)

  // Get the callback URL from the query parameters
  const callbackUrl = new URLSearchParams(location.search).get('callbackUrl');

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token])

  console.log("callback url", callbackUrl)

  useEffect(() => {
    if (isLoggedIn) {
      setLayout(true)
      if (path === "" || path === "login") {
        if (callbackUrl) {
          return navigate(callbackUrl)
        }
        navigate('/dashboard')
      }
    } else {
      if(path === "" || path === "login"){
        return () => {}
      }
      // if callback url present
      if (callbackUrl) {
        return navigate(`/?callbackUrl=${callbackUrl}`)
      }

      // if user is on another route then give the callback url
      if (pathName !== "/") {
        return navigate(`/?callbackUrl=${location.pathname}`)
      }
      
      navigate(`/`)
    }
  }, [path, isLoggedIn])

  // { layout ? <><Header /> <Sidebar children={children} /></> : children }

  return (
    <div className={Styles.mainContainer}>
      {
        path === "" || path === "login" ? children
          : <>
            <Header children={children} />
            <Sidebar />
          </>
      }

    </div>
  )
}

export default Layout;