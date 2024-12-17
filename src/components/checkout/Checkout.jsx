import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { confirmBookingAction, createBookingAction } from '../../redux/actions/bookingAction'
import { useNavigate } from 'react-router-dom'
import { PiCurrencyInrLight } from "react-icons/pi";
import ButtonLoadingSpinner from '../loader/ButtonLoadingSpinner'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Comp({ amt,parkingId,couponCode, open, handleBooking }) {
	const [name, setName] = useState('Ayush')
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.accessToken);
	
	const userData = useSelector((state) => state.auth?.userData);

	const [launched, setLaunched] = useState(false);
	const booking = useSelector(
		(state) => state.bookings?.bookingPayload
	);

	if (!booking) {

		alert("seomting wrong happened")
		return
	}

	const createBookinginDatabase = async (transaction_id) => {
		booking.transaction_id = transaction_id
		const bookingId = await dispatch(createBookingAction(booking, navigate))
		return bookingId
	}

	async function displayRazorpay() {
		setLaunched(true)
		console.log(booking)

		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		let response = await axios.post(
			'http://localhost:4005/razorpay',
			{
			  amt: amt,
			  parkingId: parkingId,
			  couponCode: couponCode
			},
			{
			  headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			  }
			}
		  );

		  console.log("response response", response)
		const data = response.data

		const options = {
			key: 'rzp_test_yaqYZsLqLJCryh',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'know2parking',
			description: 'Thank you for booking with us. Please pay your booking amount',
			image: 'http://localhost:1337/logo.svg',
			handler: async function (response) {
				axios.post('/verification', { response: response })
					.then(res => {
						if (res.data.status == "ok") {
							try {
								console.log(res);

								const data = createBookinginDatabase(response.razorpay_payment_id)

								navigate(`/payment-success?id=${response.razorpay_payment_id}&order=${response.razorpay_order_id}`)

							}
							catch (err) {
								alert("something wrong happened")
							}
						}
					}).catch(err => {
						console.log("end")
					})
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
			},
			prefill: {
				name: userData?.name,
				email: userData?.email,
				phone_number: userData?.contact
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
		setLaunched(false)
	}

	// { open=== "section2" && displayRazorpay()}

	return (
		<div className="App">
			<header className="App-header">
				<button

					className={`sm:w-96 transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${launched ? "cursor-not-allowed opacity-50" : ""
						}`}
					onClick={() => {
						handleBooking();
						displayRazorpay()

					}}
					target="_blank"
					rel="noopener noreferrer"
					disabled={launched}
				>
					{launched ? (
						<ButtonLoadingSpinner loadingText="Redirecting to Payment Gateway" />
					) : (
						<span className='text-center'> <div className="flex justify-center"><p>Pay </p>  <PiCurrencyInrLight className='text-xl sm:font-bold' /> <p>{amt}</p></div></span>
					)}

				</button>

			</header>
		</div>
	)
}

export default Comp