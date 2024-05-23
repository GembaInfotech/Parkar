import React, { useEffect, useState } from 'react';
import Comp from '../components/checkout/Checkout';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { PiCurrencyInrLight } from "react-icons/pi";
import { getVehicleAction } from '../redux/actions/vehicleActions';
import { saveBookingData } from '../redux/actions/bookingAction';
import VehicleComponent from '../components/checkout/VehicleComponent';

function Checkout() {
  const [activeSection, setActiveSection] = useState('section1');
  const location = useLocation();
  const userData = useSelector((state) => state.auth?.userData);
  const [clicked , setClicked ] = useState(true)
  const dispatch = useDispatch()
  const searchParams = new URLSearchParams(location.search);
  const amt = searchParams?.get('amt');
  const name = searchParams?.get('name');
  const id = searchParams?.get('id');
  const inT = searchParams?.get('in');
  const out = searchParams?.get('out');
  const dif = searchParams?.get('diff');
  const [vehicle, setVehicle] = useState();



  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  const vehicles = useSelector((state) => state.vehicle?.selectedVehicle)
  console.log(vehicles)
  useEffect(() => {
    const func = async () => {
      const amounts = await data.price + Math.ceil(data.price * 0.09) + Math.ceil(data.price * 0.09)
      await setAmount(amounts)
      await setData({...data, vehicle_name:vehicles?.vehicle_name, vehicle_number:vehicles?.vehicle_number})
    }
    func();
  }, [vehicles])

  const val = Number(amt) + Number(Math.ceil(amt * 0.09)) + Number(Math.ceil(amt * 0.09))
  const [amount, setAmount] = useState(val)
  const [data, setData] = useState({
    parking: id,
    parkingName: name,
    inTime: inT,
    outTime: out,
    price: amt,
    sgst: Math.ceil(amt * 0.09),
    cgst: Math.ceil(amt * 0.09),
    totalPrice: Number(amount),
    vehicle: vehicle,
    vehicle_number: '',
    vehicle_name: ''
  });

  const handleBooking = async () => {
    await dispatch(saveBookingData(data))
   // console.log(data)
  }


  const handleVehicle = async () => {
    //console.log(vehicles)
    //await setData({...data, vehicle_name:vehicles?.vehicle_name, vehicle_number:vehicles?.vehicle_number})
  }

  return (
    <div className='w-[90vw] mx-auto'>

      <div className='flex justify-between mx-auto mt-4'>
        <button className={activeSection === 'section1' ? 'section active p-2 py-1 text-2xl rounded-2xl font-nunito-sans mx-8' : 'p-2 py-1 text-xl rounded-2xl font-nunito-sans mx-8 '}
          onClick={() => toggleSection('section1')}>My Details</button>
      </div>
      <div className='flex justify-between items-center mx-auto  w-full '>

        <div className='w-1/2 '>
          <h1 className='text-xl'>Vehicle Information</h1>

          <VehicleComponent handler={handleVehicle} />

        </div>

        <div className=''>

          <div className=' sticky ml-4 shadow-2xl dark:bg-white rounded-2xl   border border-1 border-gray-300  '>
            <div className='p-6 pb-2'><p className='text-sm text-gray-600'>Summary</p></div>


            <div className='px-6 '>

              <div className=' border border-1 border-gray-100  rounded-3xl   '>
                <h1 className='text-gray-700 font-bold-600'>{name}</h1>
                <div className='flex justify-between text-sm py-1'>
                  <h1 className='text-gray-700 font-bold-600'>{Math.round(dif / 60)} hour</h1>
                  <div className='flex'>
                    <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm ' />
                    <p className='text-orange-400  text-sm '>{amt} </p>
                  </div>

                </div>
                <div className='flex justify-between text-sm py-1'>
                  <h1 className='text-gray-700 font-bold-600'>cgst</h1>
                  <div className='flex'>
                    <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm ' />
                    <p className='text-orange-400  text-sm '>{Math.ceil(amt * 0.09)} </p>
                  </div>

                </div>
                <div className='flex justify-between text-sm py-1'>
                  <h1 className='text-gray-700 font-bold-600'>sgst</h1>
                  <div className='flex'>
                    <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-sm ' />
                    <p className='text-orange-400  text-sm '>{Math.ceil(amt * 0.09)} </p>
                  </div>

                </div>
                <div className='flex  justify-between '>



                </div>
                <div className='py-1'>
                  <hr />
                </div>
                <div className='flex justify-between '>
                  <div>
                    <div><p className='text-xl text-gray-500'>Total </p>
                    </div>
                  </div>
                  <div>

                    <div>  <div className='flex '>
                      <PiCurrencyInrLight className='pt-1 text-orange-400 font-bold text-xl ' />
                      <p className='text-orange-400  text-xl '>{data.totalPrice} </p>
                    </div>

                    </div>
                  </div>
                </div>

                <div className='flex justify-between bg-[#F2F2FD] rounded-xl p-2 mt-2 '>
                  <div>
                    <div><p className='text-[12px]'>Arrival </p>
                      <p className='text-sm'> {format(inT, "EE dd MMMM hh:mm")}</p></div>
                  </div>
                  <div>

                    <div><p className='text-[12px]'>Departure</p>
                      <p className='text-sm'>{format(out, "EE dd MMMM  hh:mm")}</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className='p-6 '>
              <div>

              </div>
              <div>
                {
                  clicked  ? <button
                  className={`w-96 transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
                    !clicked ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  onClick={()=>{handleBooking() ;
                                       setClicked(!clicked)
                                       

                  }}>Confirm</button> :  <Comp handleBooking={handleBooking} amt={data.totalPrice} open={activeSection} />


                }
              </div>
            </div>

          </div>
        </div>
      </div>




    </div>
  );
}

export default Checkout;