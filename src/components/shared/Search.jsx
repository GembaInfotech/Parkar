import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../../components/loader/ButtonLoadingSpinner";
import { searchParkings } from '../../redux/actions/parkingAction';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [searchfor, setSearchfor] = useState({
    type: '',
    coordinates: []
});

  

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
   const gotosearch =  async(searchQuery) =>{
    console.log(searchQuery)
    let place = inputText;
    let type=searchQuery.type
    let ln= searchQuery.coordinates[0]
    let lt = searchQuery.coordinates[1]
    await dispatch(searchParkings(place, ln, lt, type));

        navigate(`/search?place=${place}&lt=${ln}&ln=${lt}&type=${type}`);
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

  const handleSelectSuggestion = async (suggestion) => {
    setInputText(suggestion.properties.formatted);
   await   setSearchfor(suggestion.geometry);
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (
    <div className="relative flex " ref={dropdownRef}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className='w-96 border border-gray-300 rounded px-3 py-2'
        placeholder="Type a location..."
      />
      <button onClick={()=>{gotosearch(searchfor)}}>Search</button>
      {showDropdown && (
        <ul className="absolute z-10 top-full bg-white border border-gray-300 rounded mt-1 w-96 max-h-48 overflow-y-auto shadow-lg">
          {suggestions?.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(suggestion)} className="cursor-pointer px-3 py-2 hover:bg-gray-100">
              {suggestion.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
