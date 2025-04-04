import React, { useState, useEffect } from 'react';
import UopLogo from '../../assets/uoplogo.png';
import { MainNavData } from './DataNav';
import { FaSearch } from 'react-icons/fa';



const MainNav = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isTextFound, setIsTextFound] = useState(null);
  const [resultIndex, setResultIndex] = useState(0);
  const [results, setResults] = useState([]);

  // Function to check if text exists in the document and find the positions of all matches
  const checkTextInWebsite = () => {
    const pageText = document.body.innerText.toLowerCase(); // Get all text from the page
    const regex = new RegExp(searchText.toLowerCase(), 'g'); // Create a regex to match all instances of search text
    const matches = [...pageText.matchAll(regex)]; // Find all matches

    setResults(matches); // Set the results array with the match positions
    setIsTextFound(matches.length > 0); // Check if there are any results
    setResultIndex(0); // Reset to the first result
    setShowModal(true); // Show the modal
  };

  // Function to handle search text changes
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    removeHighlights(); // Remove any highlights when closing modal
  };

  // Function to remove the highlight from all matched elements
  const removeHighlights = () => {
    const highlightedElements = document.querySelectorAll('.highlighted');
    highlightedElements.forEach((element) => {
      element.classList.remove('highlighted');
    });
  };

  // Function to add the highlight to the matching elements
  const highlightText = (index) => {
    const elements = Array.from(document.querySelectorAll('*'));
    const result = elements.filter((el) => {
      return el.innerText && el.innerText.toLowerCase().includes(searchText.toLowerCase());
    });

    // Remove any existing highlights
    removeHighlights();

    // Add the highlight to the current result
    if (result[index]) {
      result[index].classList.add('highlighted');
    }
  };

  // Navigate to the next search result
  const goToNextResult = () => {
    if (results.length > 0) {
      const nextIndex = (resultIndex + 1) % results.length; // Loop through results
      setResultIndex(nextIndex);

      // Highlight the next matching element
      highlightText(nextIndex);

      // Scroll to the next matching element
      const targetElement = document.querySelector('.highlighted');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      highlightText(resultIndex);

      // Scroll to the highlighted element
      const targetElement = document.querySelector('.highlighted');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [resultIndex, results, searchText]);

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
                <>
                  <p>✅ The text "<strong>{searchText}</strong>" was found on the page!</p>
                  <button
                    onClick={goToNextResult}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Go to Next Result
                  </button>
                </>
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
