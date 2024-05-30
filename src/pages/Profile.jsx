
import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getStateAction, getUserAction   , updateUserAction
} from "../redux/actions/userActions";

import CommonLoading from "../components/loader/CommonLoading";
import ProfileUpdateModal from "../components/modals/ProfileUpdateModal";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth?.userData);
  const stateList = useSelector((state) =>state?.user?.state)

  const user = useSelector((state) => state.user?.user);
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
       await dispatch(getStateAction());
      await dispatch(getUserAction(userData?._id));
    };
    fetchUser().then(() => setLoading(false));
  }, [dispatch, userData?._id]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [name, setName] = useState(user.name ? user.name : "");
  const [contact, setcontact] = useState(user.contact ? user.contact : "");

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
    

    setIsUpdating(false);
   
  };
  console.log(stateList)


  return (
    <>
    {loading || !user  ? (
      <div className="flex justify-center items-center h-screen">
        <CommonLoading />
      </div>
    ) : (
      <>
       <div className="main-section my-1 ">
      <div>
        <h1 className="h3-phone sm:text-2xl text-blue-800"> Profile</h1>
       
        <ProfileUpdateModal stateList={stateList} user ={user}/>
        <hr/>
        <h1 className="h3-phone sm:text-2xl text-blue-800 my-1"> Delete Account</h1>

      <p className="text-xs sm:text-sm">To delete your Account, Contact us on help@smartparking.com</p>
      </div>
      
    </div>
    
   </>
    )}
   </>

   
  );
};

export default Profile;
