import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getUserAction } from "../redux/actions/userActions";
import CommonLoading from "../components/loader/CommonLoading";
import ProfileUpdateModal from "../components/modals/ProfileUpdateModal";
import Img from "../assets/profileT.jpg"

const Profile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth?.userData);
  const user = useSelector((state) => state.user?.user);
  console.log(user);
  console.log("userData", userData);
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      await dispatch(getUserAction(userData?._id));
    };
    fetchUser().then(() => setLoading(false));
  }, [dispatch, userData?._id]);

  return (
    <>
      {loading || !user ? (
        <div className="flex justify-center items-center h-screen">
          <CommonLoading />
        </div>
      ) : (
        <>
          <div className="main-section my-1 ">
            <div className="">
              <h1 className="h3-phone sm:text-2xl text-blue-800"> Profile</h1>
              <img
                src={user?.profileImage ? `http://localhost:4005/users/send-profile/${user.profileImage}` : Img}
                alt="Profile Image"
                className="h-48 w-48 rounded-full object-cover "
              />
              <ProfileUpdateModal user={userData} />
              <hr />
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
