import { Route, Routes } from "react-router-dom";
import { SamePageLayout } from "./pages/SamePageLayout";
import "./styles/App.scss";

function App() {
  return (
    <>
      {/* <div className="app-wrapper">
        <div className="app-container">
          <BackgroundBoxes />
        </div>
      </div> */}
      <Routes>
        <Route path="*" element={<SamePageLayout />} />
      </Routes>
    </>
  );
}

export default App;

