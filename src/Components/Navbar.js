
import '../App.css';
const Navbar =({children}) =>{ 
  return (
   
       <nav className="bg-gray-800 drop-shadow-md" >
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-end h-16">
            
              <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                <div className="flex-shrink-0 flex items-center">
              
                </div>
                <div className="hidden sm:block sm:ml-6 justify-end">
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
