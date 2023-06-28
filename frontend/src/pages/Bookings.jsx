// import React, {useEffect, useRef, useState, useContext} from "react";
// import CommonSection from "../shared/CommonSection";
// import Newsletter from "../shared/Newsletter";
// import {BASE_URL} from "../utils/config";
// import { AuthContext } from "../context/AuthContext";
// import useFetch from "../hooks/useFetch";

// const Bookings = () => {
//   const {user} = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const { data: bookingData, loading, error } = useFetch(`${BASE_URL}/bookings/${user}`);
//   const {tourName, fullName, city, distance, bookAt} = bookingData;

//   useEffect(() => {
//     if (bookingData) {
//       setBookings(bookingData.bookings);
//     }
//   }, [bookingData]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error occurred: {error.message}</p>;
//   }

//   return (
//     <>
//       <CommonSection title={"Your Tours"} />
      
//       <Newsletter />
//     </>
//   );
// };

// export default Bookings;

import React, { useEffect, useState, useContext } from "react";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
//   const { data: bookingData, loading, error } = useFetch(`${BASE_URL}/booking/${user}`);
  const { data: bookingData, loading, error } = useFetch(`${BASE_URL}/booking/`);

  useEffect(() => {
    if (bookingData) {
      setBookings(bookingData.data);
    }
  }, [bookingData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {error.message}</p>;
  }

  return (
    <>
      <CommonSection title={"Your Tours"} />
      {bookingData.map((booking) => (
        // {bookings.map((booking) => (
        <div key={booking._id}>
          <p>Tour Name: {booking.tourName}</p>
          <p>Full Name: {booking.fullName}</p>
          <p>Booked At: {booking.bookAt}</p>
          <hr />
        </div>
      ))}

      <Newsletter />
    </>
  );
};

export default Bookings;

