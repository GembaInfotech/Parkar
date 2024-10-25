import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAction } from "../redux/actions/userActions";
import CommonLoading from "../components/loader/CommonLoading";
import ProfileUpdateModal from "../components/modals/ProfileUpdateModal";
import Img from "../assets/profileT.jpg";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa"; 
import { MdCancel } from "react-icons/md"; 

const Profile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const userData = useSelector((state) => state.auth?.userData);
  const token = useSelector((state) => state.auth.accessToken);


  
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      await dispatch(getUserAction(userData?._id));
    };
    fetchUser().then(() => setLoading(false));
  }, [dispatch, userData?._id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image file first.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file); 
    formData.append("profileType", "user"); 

    try {
      const response = await axios.post(`http://localhost:4005/users/UploadUserProfile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}` // Use Bearer format
        },
      });

      if (response.data) {
        alert("Profile image updated successfully!");
        dispatch(getUserAction(userData?._id)); 
        setFile(null); 
        setPreview(null);
      }
    } catch (error) {
      console.error("Error uploading the profile image:", error);
      alert("Failed to upload the profile image.");
    }
  };

  return (
    <>
      {loading || !user ? (
        <div className="flex justify-center items-center h-screen">
          <CommonLoading />
        </div>
      ) : (
        <>
          <div className="main-section my-1">
            <div className="">
              <h1 className="h3-phone sm:text-2xl text-blue-800">Profile</h1>

              <div className="relative w-48 h-48">
                <img
                  src={preview || (user?.profileImage ? `http://localhost:4005/users/send-profile/${user.profileImage}` : Img)}
                  alt="Profile Image"
                  className="h-48 w-48 rounded-full object-cover"
                />
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                
                
                <FaPlusCircle
                  className="absolute bottom-0 right-0 text-blue-600 cursor-pointer "
                  size={30}
                  onClick={() => document.getElementById("fileInput").click()}
                />
                
                
              </div>

              {file && (
                <div className="mt-2 flex items-center">
                  <button
                    onClick={handleUpload}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Upload Image
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    <MdCancel size={20} className="mr-1" /> Cancel
                  </button>
                </div>
              )}
              <ProfileUpdateModal user={userData} />
              <hr />
              <h1 className="h3-phone sm:text-2xl text-blue-800 my-1">Delete Account</h1>
              <p className="text-xs sm:text-sm">To delete your Account, Contact us on help@smartparking.com</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
