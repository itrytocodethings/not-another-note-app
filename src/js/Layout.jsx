import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteApp } from "./Pages/NoteApp";
import NoteEditor from "./Pages/NoteEditor";
import RegisterLogin from "./Pages/RegisterLogin";
import PrivateRoute from "./Components/PrivateRoute";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><NoteApp /></PrivateRoute>}></Route>
        <Route path="/editor" element={<NoteEditor />}></Route>
        <Route path="/account" element={<RegisterLogin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;