import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicRouter() {
  const isLogged = useSelector((state) => state.todo.isLogged);

  return (
     isLogged ? <Outlet /> : <Navigate to="/" />
  );
}

export default PublicRouter;
