import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVehicleAction, getVehicleAction } from '../redux/actions/vehicleActions';
import CommonLoading from "../components/loader/CommonLoading";
import Cards from "../components/vehi/Cards";
import DeleteModal from "../components/modals/DeleteModal";
import VehicleForm from "../components/vehi/VehicleForm";

function Vehicle() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (value) => {
    setShowModal(value);
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const vehicle = useSelector(
    (state) => state.vehicle?.vehicleList
  );
  console.log(vehicle);

  const call = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await dispatch(getVehicleAction());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="col-span-2 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );
  }

  return (
    <div>
      <div className="main-section relative overflow-y-auto max-h-screen">
        
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div
              className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-lg relative z-20"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            <Cards call={call} />
            {vehicle?.map((vehicled, index) => (
              <Cards key={index} vehicle={vehicled} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Vehicle;
