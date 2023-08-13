import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
import Shop from "./components/Shop";
import Pages from "./Layout/Pages";
import { RecoilRoot } from "recoil";
import Test from "./components/test";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function PrivateRoute({ element, ...rest }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          console.log("Auth State Changed:", user);
          setUser(user);
      });

      return () => unsubscribe();
  }, []);

  console.log("User:", user); 

  if (!user) {
      console.log("User not authenticated, redirecting..."); 
      return <Navigate to="/login" />;
  }

  console.log("User authenticated, rendering element..."); 

  return element;
}

function App() {
    return (
        <>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route path='test' element={<Test />} />
                        <Route path='login' element={<Login />} />

                        <Route path="/" element={<Layout />}>
                          <Route index element={<Pages />} />
                          <Route path="shop" element={<PrivateRoute element={<Shop />} />} />
                      </Route>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </>
    );
}

export default App;
