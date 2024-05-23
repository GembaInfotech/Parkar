import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
import { searchParkings } from '../../redux/actions/parkingAction';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { format, addHours } from 'date-fns';


function Search({inT, ouT}) {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationQuery = searchParams?.get('place');
  const type = searchParams?.get('type');
  const [redirecting, setRedirecting] = useState(false);
  const now = new Date();
  const futureDate = addHours(now, 2);
  // Format the current date and time to ISO 8601 format (YYYY-MM-DDTHH:MM)
  const isoDateTime = format(futureDate, "yyyy-MM-dd'T'HH:mm");

  const longitude = searchParams?.get('ln');
  const latitude = searchParams?.get('lt');
  const inTime = searchParams?.get('in');
  const outTime = searchParams?.get('out');
  const [inputText, setInputText] = useState(locationQuery || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [timeValues, setTimeValues] = useState({
    inTime:   format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    outTime:  isoDateTime
  });
  const [searchfor, setSearchfor] = useState({
    type: '',
    coordinates: []
  });
  const handleChange = async(e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
   await setTimeValues({
      ...timeValues,
      [name]: value
    });
    console.log(timeValues)
  };
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchSuggestions(inputText);
    }, 200);

    return () => clearTimeout(timerId);
  }, [inputText]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  const gotosearch = async (searchQuery) => {
    setRedirecting(true);
    console.log(searchQuery)
    let place = inputText;
    let type = searchQuery.type
    let ln = searchQuery.coordinates[0]
    let lt = searchQuery.coordinates[1]
    await dispatch(searchParkings(place, ln, lt, type));
   if(inputText && timeValues.inTime && timeValues.outTime && searchfor)
    navigate(`/search?place=${place}&lt=${ln}&ln=${lt}&in=${timeValues.inTime}&out=${timeValues.outTime}&type=${type}`);
   setRedirecting(false);
  }
  const fetchSuggestions = async (text) => {
    if (text.trim() !== '') {
      try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=b25046bcfafb479e8cbbd890e726aa8f`);
        const data = await response.json();
        setSuggestions(data.features);
        setShowDropdown(true);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };
  const today = new Date().toISOString().slice(0, 16);
  const inTimeVal = new Date(timeValues?.inTime|| null).toISOString().slice(0, 16);


  const handleSelectSuggestion = async (suggestion) => {
    setInputText(suggestion.properties.formatted);
    await setSearchfor(suggestion.geometry);
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (



    <div className="  p-2 py-2 m-h-screen w-full sticky  mx-auto w-[90vw] top-20 z-10 mt-2 overflow-y:hidden">
       <div
      className={`fixed inset-0 bg-black opacity-50  transition-opacity ${isInputFocused ? 'block' : 'hidden'}`}
      aria-hidden="true"
    />
      <div className="bg-gray-200 items-center justify-center  w-full flex rounded-full shadow-lg p-2  sticky" >
        <input className="font-bold uppercase rounded-full w-[60%] py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text"
        value={inputText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a location..." />
        <input aria-label="Date and time"
        
          className="font-bold uppercase rounded-full  py-4 px-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="datetime-local" 
          name='inTime'
          value=  { inT || timeValues.inTime}
          min={today}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleChange}/>
        <input aria-label="Date and time"
       
          className="font-bold uppercase rounded-full  py-4 px-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="datetime-local" 
          name='outTime'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={ouT|| timeValues.outTime
          }
          min={inTimeVal}
          onChange={handleChange}/>

        <button 
         
        onClick={() => { gotosearch(searchfor) }}
         disabled={redirecting}
        >
          <div 
          
          className={`w-full transform rounded-full bg-blue-500 px-6 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
            redirecting ? "cursor-not-allowed opacity-50" : ""
          }`}
          >
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>

      </div>

      <div className="flex flex-col    mx-2 relative " ref={dropdownRef}>

        {showDropdown && (
          <ul className="absolute z-10 top-full bg-white  rounded-2xl mt-1 w-1/2 max-h-48 overflow-y-auto shadow-lg">
            {suggestions?.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(suggestion)} >
                <div className="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer rounded-lg">
                  <div className="lg:flex md:flex items-center">
                    {/* <div className="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div> */}
                    <div className="flex flex-col">
                      <div className="text-sm h-8 text-gray-700 font-bold w-full ">   <p>{suggestion.properties.formatted}</p> </div>
                    </div>
                  </div>
                  <svg className="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>


  );
}

export default Search;
