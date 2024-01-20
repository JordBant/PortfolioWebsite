// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'=
import { Route, Routes } from "react-router-dom";
import { SamePageLayout } from "./pages/SamePageLayout";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<SamePageLayout />} />
      </Routes>
    </>
  );
}

export default App;

