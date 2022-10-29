import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/Main";
import Success from "../src/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
