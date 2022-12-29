
import '../App.css';
const Navbar =({children}) =>{
  return (
        <nav className="bg-gray-200 drop-shadow-md" style={{borderBottom: '4px solid #D3D3D3'}}>
          <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8">
            <div className="relative flex items-center justify-end h-20">

              <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                <div className="flex-shrink-0 flex items-center">

                </div>
                <div className="sm:block sm:ml-6 justify-end">
                  <div className="flex space-x-4">
                      {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;
