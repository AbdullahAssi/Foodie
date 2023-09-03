import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Shop from "./components/Shop";
import Pages from "./Layout/Pages";
import { RecoilRoot } from "recoil";
import Test from "./components/test";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./config/Context";
import { getAuth } from "firebase/auth";



function App() {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Pages />
                  </Layout>
                }
              >
                <Route index element={<Pages />} />
                  <Route
                    path="shop"
                    element={<Shop />}
                  />
                    <Route
                    path="signup"
                    element={<Test />}
                  />
                  <Route
                    path="login"
                    element={<Login />}
                  />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
