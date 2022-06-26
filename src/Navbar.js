
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
        <nav className="bg-gray-800 drop-shadow-md" >
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-end h-16">
            
              <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                <div className="flex-shrink-0 flex items-center">
              
                </div>
                <div className="hidden sm:block sm:ml-6 justify-end">
                  <div className="flex space-x-4">
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                        <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;
