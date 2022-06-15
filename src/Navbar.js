
import './App.css';

function Navbar() {
  return (
        <nav class="bg-gray-800 drop-shadow-md" >
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-end h-16">
            
              <div class="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                <div class="flex-shrink-0 flex items-center">
                  {/* <img class="block lg:hidden h-8 w-auto" src="favicon.ico" alt="Workflow"></img>
                  <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"></img> */}
                </div>
                <div class="hidden sm:block sm:ml-6 justify-end">
                  <div class="flex space-x-4">
                  
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;
