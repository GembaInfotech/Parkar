import React, { useEffect, useState } from 'react';
import Comp from '../components/checkout/Checkout';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { PiCurrencyInrLight } from "react-icons/pi";
import { saveBookingData } from '../redux/actions/bookingAction';
import VehicleComponent from '../components/checkout/VehicleComponent';
import appConfig from '../Config/app.config';

function Checkout() {
  const token = useSelector((state) => state.auth.accessToken);
  const [activeSection, setActiveSection] = useState('section1');
  const [amt, setamt] = useState();
  const location = useLocation();
  const userData = useSelector((state) => state.auth?.userData);
  const [clicked, setClicked] = useState(true);
  const [couponCode, setCouponCode] = useState(""); 
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const amtF = searchParams?.get('amt');
  const amtT = searchParams?.get('amtT');
  const name = searchParams?.get('name');
  const id = searchParams?.get('id');
  const code = searchParams?.get('c');
  const inT = searchParams?.get('in');
  const out = searchParams?.get('out');
  const dif = searchParams?.get('diff');
  const [vehicle, setVehicle] = useState();
  const vehicles = useSelector((state) => state.vehicle?.selectedVehicle);
  const [amount, setAmount] = useState();
  const [isCouponApplied, setIsCouponApplied] = useState(false);  // Track if coupon is applied

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const func = async () => {
      const amount_cal = (vehicles?.vehicle_type === "two wheeler") ? amtT : amtF;
      setamt(amount_cal);
      const tax = Math.ceil(amount_cal * 0.09); // CGST and SGST (both 9%)
      const totalPrice = Number(amount_cal) + Number(tax) * 2; // Adding both CGST and SGST
      setAmount(totalPrice);
      setData({
        ...data, 
        vehicle_id: vehicles?._id, 
        vehicle_type: vehicles?.vehicle_type,
        price: amount_cal, 
        sgst: tax, 
        cgst: tax, 
        totalPrice: totalPrice,
        couponCode: couponCode,
      });
    };
    func();
  }, [vehicles, couponCode]);

  const [data, setData] = useState({
    parking: id,
    parkingName: name,
    inTime: inT,
    outTime: out,
    price: 0,
    sgst: Math.ceil(amt * 0.09),
    cgst: Math.ceil(amt * 0.09),
    totalPrice: 0,
    vehicle: vehicle,
    transaction_id: '',
    parkingCode: code,
    vehicle_id: '',
    vehicle_type: '',
    couponCode:'',
  });

  const handleBooking = async () => {
    await dispatch(saveBookingData(data));
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) {
      alert("Please enter a coupon code.");
      return;
    }

    try {
      const response = await fetch(`${appConfig.apiBaseUrl}coupon/applyCoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          couponCode,  
          parkingId: id,  
          price: amt 
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Coupon applied:", data);
        const discountedPrice = amount - data.discount;
        setAmount(data?.finalPrice); 
        setData((prevData) => ({
          ...prevData,
          price: data?.finalPrice, 
          sgst: Math.ceil(discountedPrice * 0.09), 
          cgst: Math.ceil(discountedPrice * 0.09), 
          totalPrice: data.finalPrice + 2* (Math.ceil(discountedPrice * 0.09))
        }));
        setIsCouponApplied(true);  // Set coupon as applied
        alert("Coupon applied successfully!");
      } else {
        alert(data.message || "Failed to apply coupon.");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      alert("An error occurred while applying the coupon.");
    }
  };

  const handleRemoveCoupon = async () => {
    try {
      const response = await fetch(`http://localhost:4005/coupon/removeCoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          couponCode,
          parkingId: id,
          price: amt,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Coupon removed:", data);
        setAmount(amount + data.discount); // Revert the amount
        setData((prevData) => ({
          ...prevData,
          price: amount + data.discount,
          sgst: Math.ceil((amount + data.discount) * 0.09),
          cgst: Math.ceil((amount + data.discount) * 0.09),
          totalPrice: amount + data.discount + 2 * Math.ceil((amount + data.discount) * 0.09),
        }));
        setIsCouponApplied(false);  // Set coupon as not applied
        alert("Coupon removed successfully!");
      } else {
        alert(data.message || "Failed to remove coupon.");
      }
    } catch (error) {
      console.error("Error removing coupon:", error);
      alert("An error occurred while removing the coupon.");
    }
  };

  return (
    <div className='w-[90vw] mx-auto'>
      <div className='flex justify-between mx-auto mt-4'>
        <button
          className={activeSection === 'section1' ? 'section active p-2 py-1 text-2xl rounded-2xl font-nunito-sans mx-0' : 'p-2 py-1 text-xl rounded-2xl font-nunito-sans mx-2'}
          onClick={() => toggleSection('section1')}
        >
          My Details
        </button>
      </div>
      
      <div className='flex max-sm:flex-col justify-between items-center w-[100%]'>
        <div className='sm:w-1/2 mx-2 bg-gray-100 p-2 rounded-md'>
          <h1 className='h3-phone sm:text-xl'>Vehicle Information</h1>
          <VehicleComponent />
        </div>

        <div className='max-sm:w-[100%] max-sm:my-2 sticky sm:ml-4 shadow-2xl dark:bg-white rounded-2xl border border-1 border-gray-300'>
          <div className='p-4 sm:p-6 pb-2'>
            <p className='text-sm text-gray-600'>Summary</p>
          </div>

          <div className='px-2' hidden={vehicles == null}>
            <div className='border border-1 border-gray-100 p-2 sm:px-4 rounded-3xl'>
              <h1 className='text-gray-700 font-bold-600 sm:text-xl'>{name}</h1>
              <div className='flex justify-between text-sm py-1'>
                <h1 className='text-gray-700 font-bold-600'>{Math.round(dif / 60)} hour</h1>
                <div className='flex'>
                  <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm' />
                  <p className='text-orange-400 text-sm'>{data.price}</p>
                </div>
              </div>
              <div className='flex justify-between text-sm py-1'>
                <h1 className='text-gray-700 font-bold-600'>CGST</h1>
                <div className='flex'>
                  <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm' />
                  <p className='text-orange-400 text-sm'>{data.sgst}</p>
                </div>
              </div>

              <div className='flex justify-between text-sm py-1'>
                <h1 className='text-gray-700 font-bold-600'>SGST</h1>
                <div className='flex'>
                  <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm' />
                  <p className='text-orange-400 text-sm'>{data.sgst}</p>
                </div>
              </div>

              <div className='py-1'>
                <hr />
              </div>

              <div className='flex justify-between'>
                <div>
                  <p className='sm:text-xl text-gray-500'>Total</p>
                </div>
                <div className='flex'>
                  <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-xl' />
                  <p className='text-orange-400 text-xl'>{data.totalPrice}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                />
                <button
                  onClick={isCouponApplied ? handleRemoveCoupon : handleApplyCoupon}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                >
                  {isCouponApplied ? 'Remove' : 'Apply'}
                </button>
              </div>

              <div className='flex justify-between bg-[#F2F2FD] rounded-xl p-2 mt-2'>
                <div>
                  <p className='text-[12px]'>Arrival</p>
                  <p className='text-sm'>{format(inT, "EE dd MMMM hh:mm")}</p>
                </div>
                <div>
                  <p className='text-[12px]'>Departure</p>
                  <p className='text-sm'>{format(out, "EE dd MMMM hh:mm")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-6'>
            {vehicles == null && (
              <p className="text-red-500 mb-4 text-xs">Please add vehicle to proceed</p>
            )}
            {clicked ? (
              <button
                className={`sm:w-96 transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 ${vehicles == null ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"} focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
                onClick={() => {
                  if (vehicles != null) {
                    handleBooking();
                    setClicked(!clicked);
                  }
                }}
                disabled={vehicles == null}
              >
                Confirm
              </button>
            ) : (
              <Comp handleBooking={handleBooking} amt={data.totalPrice} parkingId= {data.parking} couponCode={data.couponCode} open={activeSection} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
