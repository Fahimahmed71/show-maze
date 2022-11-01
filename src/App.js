import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Info from "./components/Home/info/Info";
import Nav from "./components/Home/Nav/Nav";
import People from "./components/Home/People/People";
import Schedule from "./components/Home/Schedule/Schedule";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/info/:infoId"
          element={
            <RequireAuth>
              <Info />
            </RequireAuth>
          }
        ></Route>
        <Route path="people" element={<People />}></Route>
        <Route
          path="schedule"
          element={
            <RequireAuth>
              <Schedule />
            </RequireAuth>
          }
        ></Route>
        <Route path="registration" element={<SignUp />}></Route>
        <Route path="login" element={<SignIn />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
