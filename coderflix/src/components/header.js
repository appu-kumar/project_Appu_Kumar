
import logo from '../utils/images/logo.jpg'
import bellLogo from '../utils/images/bell_logo.png'
import accountLogo from '../utils/images/account_logo.png'
import dropdownLogo from '../utils/images/dropdown_logo.png'
export default function(){
        const toggleDropdown = () => {
          const dropdown = document.getElementById('dropdownContent');
          dropdown.classList.toggle('hidden');
        };
    
     return(

    <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo and Navigation Links */}
            <div className="flex items-center">
              <div className="flex-shrink-0 ml-0">
                <img className='w-32 h-16' src={logo} alt="Logo" />
              </div>
              <div className="hidden md:block ml-4 text-sm">
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Home</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">TV Shows</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Movies</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">New & Popular</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">My list</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Browse By Language</a>
                {/* Other navigation links */}
              </div>
            </div>


           
 
            {/* Right Side - Account, Dropdown, Search */}
            <div className="flex items-center">


            {/* Search Bar */}
            <div className="flex items-center ml-4 px-3 py-1 bg-gray-700">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 
              0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41
              1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01
              14 9.5 11.99 14 9.5 14z" /> </svg>
        
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-70"
                />
              </div>
             
              <div className='m-2 text-white'>
                Children
              </div>


              {/* Bell Image */}
              <div className="mr-2">
                <img className="w-10 h-10 " src={bellLogo} alt="bell" />
              </div>


              {/* Account Image */}
              <div className="">
                <img className="w-8 h-8 " src={accountLogo} alt="User Avatar" />
              </div>


             
              {/* Dropdown */}
              <div className="ml-4 relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white focus:outline-none"
                >
                  <img className='w-5 mt-3' src={dropdownLogo}/>
                </button>
                {/* Dropdown Content */}
                <div
                  id="dropdownContent"
                  className="hidden absolute right-0 mt-2 bg-gray-700 text-white p-2 rounded shadow-lg"
                >
                  <a href="#" className="block hover:bg-gray-700 py-1">Settings</a>
                  <a href="#" className="block hover:bg-gray-700 py-1">Profile</a>
                  <a href="#" className="block hover:bg-gray-700 py-1">Logout</a>
                </div>
              </div>
 
              {/* Search Bar */}
             
            </div>
          </div>
        </div>
      </nav>
           
     )
}