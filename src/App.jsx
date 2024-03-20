import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./page/Home"));
const StudentDetails = lazy(() => import("./page/StudentDetails"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolboy/:id" element={<StudentDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
