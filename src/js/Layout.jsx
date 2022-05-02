import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteApp } from "./Pages/NoteApp";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteApp />}></Route>
        <Route path="/editor" element={<NoteApp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;