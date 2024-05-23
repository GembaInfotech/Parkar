// SearchPage.js
import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import ParkingList from '../components/parking/ParkingList';
import ParkingRender from '../components/parking/ParkingRender';
import Search from '../components/shared/Search';
import { searchParkings } from "../redux/actions/parkingAction";
import CommonLoading from "../components/loader/CommonLoading";
import Map from "../components/map/Map";

function SearchPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selected, setSelected] = useState();


  const parkings = useSelector(
    (state) => state.parkings?.parkings
  );
  const locationQuery = searchParams?.get('place');
  const type = searchParams?.get('type');

  const longitude = searchParams?.get('ln');
  const latitude = searchParams?.get('lt');
  const inTime = searchParams?.get('in');
  
  const outTime = searchParams?.get('out');
  const [data, setData] = useState();
  const [error, setError] = useState();
  console.log(inTime, outTime)


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(searchParkings(locationQuery, latitude, longitude, type));
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);
  const callApi = ()=>{
    const fetchData = async () => {
      await dispatch(searchParkings(locationQuery, latitude, longitude, type));
      setLoading(false);
    };
    fetchData();

  }


  // Extract parameters from the URL


    const parkingCards = useMemo(() => {
      if (parkings.length==0) {
        return (
          <div>
          <h1>There are no Car Parks Available</h1>
          </div>
        )
      }
      return parkings.map((parking) => (
        <div key={parking._id} className="main-section ">
          
          <div onMouseEnter={() => { setSelected(parking) }}>   <ParkingList   data={parking} inT={inTime} outT={outTime} /></div>
       
        </div>
      ));
    }, [parkings]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }
 


  return (
    <div>

      
      <Search  inT={inTime}  ouT={outTime}/>
<div className="flex max-h-[75vh]  min-h-[70vh] w-[90vw] mx-auto">
<div className="main-section overflow-y-auto  w-1/3">{parkingCards}</div>
{
parkings.length!=0 && <div className=" bg-blue-400 sticky w-2/3 mt-2">    <Map data={parkings} selected={selected} /></div>}

</div>


    </div>
  );
}

export default SearchPage;
