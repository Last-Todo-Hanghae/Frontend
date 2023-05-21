import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const isLogged = useSelector((state) => state.todo.isLogged);
  console.log(isLogged)

  return (
     isLogged ? <Outlet /> : <Navigate to="/mytodo" />
  );
}

export default PrivateRouter;
