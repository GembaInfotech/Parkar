import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import {
  getUserAction,
  updateUserAction,
} from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import { FiUser, FiMapPin, FiEdit } from "react-icons/fi";



const ProfileUpdateModal = ({ user }) => {
  const dispatch = useDispatch();

  const [isUpdating, setIsUpdating] = useState(false);
  const [name, setName] = useState(user.name ? user.name : "");
  const [contact, setcontact] = useState(user.contact ? user.contact : "");
  const [email, setEmail] = useState(user.email ? user.email : "");

  const [address, setaddress] = useState(user.address ? user.address : "");

  const [pincode, setpincode] = useState(user.pincode ? user.pincode : "");

  const [city, setcity] = useState(user.city ? user.city : "");
  const [state, setstate] = useState(user.state ? user.state : "");
  const [country, setcountry] = useState(user.country ? user.country : "");
  const [licence_no, setlicence_no] = useState(user.licence_no ? user.licence_no : "");
  const handleUpdateProfile = async () => {
    setIsUpdating(true);

    const formData = {
      name,
      contact,
      pincode,
      address,
      city,
      state, country,
      licence_no

    };

    await dispatch(updateUserAction(user._id, formData));
    await dispatch(getUserAction(user._id));
    setName("");
    setcontact("");
    setpincode("");
    setaddress("");
    setcity("");
    setstate("");
    setcountry("");
    setlicence_no("");

    setIsUpdating(false);

  };

  return (

    <div className="inline-block w-[60vw] transform overflow-hidden rounded-md   pb-4 pt-0 text-left align-bottom  transition-all sm:my-2 sm:px-1 sm:align-middle ">
      <div className="w-full">
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
        

          <div>
            <div className=" flex  flex-col sm:flex-row  justify-start">
              <div className="w-full sm:w-[50%] p-2">
              <div className="flex items-center ">
                <FiUser className="text-gray-600" />
                <label className=" text-sm font-medium text-gray-700">
                  Name
                </label>
              </div>
              <input
                type="text"
                className="mt-1 w-full  rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              </div>
              <div className="w-full sm:w-[50%] p-2">
              <div className="flex items-center space-x-0">
              <FiUser className="text-gray-600" />
              <label className="block text-sm font-medium text-gray-700">
                Licence
              </label>
            </div>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
              value={licence_no}
              onChange={(e) => setlicence_no(e.target.value)}
            />
              </div>
            </div>
                      <div className=" flex  flex-col sm:flex-row  justify-start">

            <div className="w-full sm:w-[50%] p-2">
            <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div className="w-full sm:w-[50%] p-2">
              <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
              />
              </div>
            
            </div>
                      <div className=" flex  flex-col sm:flex-row  justify-start">

              <div className="w-full sm:w-[50%] p-2 ">
              <div className="flex items-center space-x-0">
                  <FiUser className="text-gray-600" />
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                </div>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-[50%] p-2 ">
              <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={pincode}
                onChange={(e) => setpincode(e.target.value)}
              />

              </div>
            </div>
                      <div className=" flex  flex-col sm:flex-row  justify-start">

              <div className="w-full sm:w-[50%] p-2">
              <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
              </div>
              <div className="w-full sm:w-[50%] p-2 ">
              <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
              </div>
            </div>
                      <div className=" flex  flex-col sm:flex-row  justify-start">

              <div className="w-full sm:w-[50%] p-2">
              <div className="flex items-center space-x-0">
                <FiUser className="text-gray-600" />
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-blue-400 text-xs p-2 outline-none"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
              </div>
             
            </div>

          </div>





       




        </div>
      </div>

      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          disabled={isUpdating}
          type="button"
          className={`inline-flex w-full justify-start rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${isUpdating
            ? "cursor-not-allowed bg-gray-400"
            : "bg-blue-900 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            }`}
          onClick={handleUpdateProfile}
        >
          {isUpdating ? (
            <ButtonLoadingSpinner loadingText={"Updating..."} />
          ) : (
            <span>Save Changes</span>
          )}
        </button>
      
      </div>
    </div>

  );
};

export default ProfileUpdateModal;
