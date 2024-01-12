// App.jsx
import * as React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp'
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
]);
function App() {
  // return (
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //   </Routes>
  //   </Router>

  // );
  return <RouterProvider router={router} />;
}

export default App;


