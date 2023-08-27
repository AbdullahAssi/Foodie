import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
import Shop from "./components/Shop";
import Pages from "./Layout/Pages";
import { RecoilRoot } from "recoil";
import Test from "./components/test";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./config/Context";

function PrivateRoute({ element, ...rest }) {
  const { user } = useAuth();

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
              <AuthProvider>
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
              </AuthProvider>
            </RecoilRoot>
        </>
    );
}

export default App;