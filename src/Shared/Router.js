import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import MyTodo from "../Pages/MyTodo";
import YourTodo from "../Pages/YourTodo";
import Header from "../Components/Header";
import * as style from "../Styles/styles";
// import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import PrivateRouter from "./PublicRouter";
import PublicRouter from "./PublicRouter";

function Router() {
  const isLogged = useSelector((state) => state.todo.isLogged);

  return (
    <BrowserRouter>
      <style.FlexCenterColumn>
        <style.Layout>
          <Header isLogged={isLogged} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mytodo" element={<MyTodo />} />
            <Route path="/yourtodo" element={<YourTodo />} />

            <Route element={PrivateRouter}>
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
            </Route>
          </Routes>
        </style.Layout>
      </style.FlexCenterColumn>
    </BrowserRouter>
  );
}

export default Router;
