import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./Theme/DarkTheme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./components/State/Authentication/Action";
import { findCart } from "./components/State/Cart/Action";
import Routers from "./Routers/Routers";
import { getRestaurantById } from "./components/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);
  useEffect(()=>{
    dispatch(getRestaurantById(auth.jwt||jwt))
  },[auth.user])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
