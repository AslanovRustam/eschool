import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import StudentDetails from "./page/StudentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<StudentDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
