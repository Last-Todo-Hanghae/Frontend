import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import MyTodo from "../Pages/MyTodo";
import YourTodo from "../Pages/YourTodo";
import Header from "../Components/Header";
import * as style from "../Styles/styles";

function Router() {
  return (
    <BrowserRouter>
      <style.FlexCenterColumn>
        <style.Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mytodo" element={<MyTodo />} />
            <Route path="/yourtodo" element={<YourTodo />} />

            {/* <Route element={PrivateRouter}>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mytodo" element={<MyTodo />} />
              <Route path="/yourtodo" element={<YourTodo />} />
            </Route>

            <Route element={PublicRouter}>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mytodo" element={<MyTodo />} />
              <Route path="/yourtodo" element={<YourTodo />} />
            </Route> */}
          </Routes>
        </style.Layout>
      </style.FlexCenterColumn>
    </BrowserRouter>
  );
}

export default Router;
