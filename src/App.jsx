import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
// import Footer from "./components/Footer";

import Home from "./pages/index";
import Detail from "./pages/detail";
// import Category from "./pages/category";
// import Search from "./pages/Search";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/detail/:index" element={<Detail />} />
          {/* <Route path="/category/:name" element={<Category />} />
          <Route path="/search" element={<Search />} /> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;