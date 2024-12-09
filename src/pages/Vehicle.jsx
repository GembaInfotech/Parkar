import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVehicleAction } from '../redux/actions/vehicleActions';
import CommonLoading from "../components/loader/CommonLoading";
import Cards from "../components/vehi/Cards";
import VehicleForm from "../components/vehi/VehicleForm";

function Vehicle() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const vehiclesPerPage = 7; 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const vehicle = useSelector((state) => state.vehicle?.vehicleList);
  console.log("vehicle", vehicle
    
  );

  const call = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await dispatch(getVehicleAction({page:currentPage, limit:vehiclesPerPage})); 
      setLoading(false);
    };
    fetchData();
  }, [dispatch, currentPage]); 

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }
  const totalVehicles = vehicle?.data?.total || 0;
  const totalPages = Math.ceil(totalVehicles / vehiclesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="main-section relative overflow-y-auto max-h-screen">
        
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div
              className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-lg relative z-20"
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <VehicleForm />
            </div>
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => setShowModal(false)}
            ></div>
          </div>
        )}

        {!showModal && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              <Cards call={call} />
              {vehicle?.data?.vehicleList?.map((vehicled, index) => (
                <Cards key={index} vehicle={vehicled} />
              ))}
            </div>

            {totalVehicles > vehiclesPerPage && ( 
              <div className="flex justify-center gap-4 mt-4">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn">
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn">
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Vehicle;
