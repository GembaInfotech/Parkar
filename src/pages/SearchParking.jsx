// SearchPage.js
import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import ParkingList from '../components/parking/ParkingList';
import ParkingRender from '../components/parking/ParkingRender';
import Search from '../components/shared/Search';
import { searchParkings } from "../redux/actions/parkingAction";
import CommonLoading from "../components/loader/CommonLoading";

function SearchPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const parkings = useSelector(
    (state) => state.parkings?.parkings
  );
  const locationQuery = searchParams.get('place');
  const type = searchParams.get('type');

  const longitude = searchParams.get('ln');
  const latitude = searchParams.get('lt');
  const [data, setData] = useState();
  const [error, setError] = useState();


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
      if (!parkings) {
        return null;
      }
      return parkings.map((parking) => (
        <div key={parking._id} className="main-section flex items-center">
          <ParkingList className="mb-5" data={parking} />
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

      
      <Search/>
{/* <ParkingRender data={data.data} /> */}
<div className="main-section">{parkingCards}</div>


    </div>
  );
}

export default SearchPage;
