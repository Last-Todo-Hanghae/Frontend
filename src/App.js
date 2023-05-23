import { useEffect } from "react";
import "./App.css";
import Router from "./Shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLog } from "./Redux/modules/todoSlice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeIsLog());
  // }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
