import { Route, Routes } from "react-router-dom";
import { SamePageLayout } from "./pages/SamePageLayout";
import "./styles/App.scss";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import { BackgroundBoxes } from "./components/BackgroundBoxes/BackgroundBoxes";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <BackgroundBoxes />
      </div>
      {/* <Routes>
        <Route path="*" element={<SamePageLayout />} />
      </Routes> */}
    </div>
  );
}

export default App;

