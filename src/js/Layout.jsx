import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteApp } from "./Pages/NoteApp";
import NoteEditor from "./Pages/NoteEditor";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteApp />}></Route>
        <Route path="/editor" element={<NoteEditor />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;