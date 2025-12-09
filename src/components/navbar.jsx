import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full p-4 bg-slate-900 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">SeputarNEWS</Link>

        <div className="flex gap-4">
          <Link to="/category/politics">Politics</Link>
          <Link to="/category/sports">Sports</Link>
          {/* <Link to="/search">Search</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
