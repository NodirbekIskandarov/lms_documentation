import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./layouts/Index";
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
