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
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";



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
                  <Route
                    path="blogs"
                    element={<Blog />}
                  />
                  <Route
                    path="blogs/1"
                    element={<Blog1 />}
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
