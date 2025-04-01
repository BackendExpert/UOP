import React, { useState } from 'react';
import UopLogo from '../../assets/uoplogo.png';
import { MainNavData } from './DataNav';
import { FaSearch } from 'react-icons/fa';

const MainNav = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isTextFound, setIsTextFound] = useState(null);

  // Function to check if text exists in the document
  const checkTextInWebsite = () => {
    const pageText = document.body.innerText.toLowerCase(); // Get all text from the page
    setIsTextFound(pageText.includes(searchText.toLowerCase())); // Check if the text exists
    setShowModal(true);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='xl:px-20 px-4 py-4 bg-[#560606] text-white'>
      <div className="flex justify-between">
        <div>
          <a href="/">
            <img src={UopLogo} alt="UoP Logo" className='xl:h-20 h-12 w-auto' />
          </a>
        </div>
        <div className="py-6">
          <div className="xl:block hidden">
            <div className="flex">
              {MainNavData.map((item, index) => (
                <div className="mx-2 font-semibold flex" key={index}>
                  <p className='mr-4'><a href={item.link}>{item.name}</a></p>
                  {item.id !== 6 && <div>|</div>}
                </div>
              ))}
              <div>
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    className='text-gray-500 mr-2 h-8 rounded pl-2'
                    placeholder='Search...'
                  />
                  <FaSearch className='h-6 w-auto cursor-pointer' onClick={checkTextInWebsite} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for search results */}
      {showModal && (
        <div className="fixed text-black inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Search Results</h3>
            {isTextFound !== null ? (
              isTextFound ? (
                <p>✅ The text "<strong>{searchText}</strong>" was found on the page!</p>
              ) : (
                <p>❌ The text "<strong>{searchText}</strong>" was not found on this page.</p>
              )
            ) : null}
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
