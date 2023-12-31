import { useContext, useEffect, useState } from "react";
import { AuthCotext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {

  const {user} = useContext(AuthCotext)
  const [bookings,setBookings]= useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setBookings(data)
    })
  },[])

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure want to delete?')
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
      if(data.deletedCount > 0){
        alert('Deleted successfull')
        const remaining = bookings.filter(booking => booking._id !== id);
        setBookings(remaining)
      }
    }
    }

  return (
    <div>
      <h2 className="text-5xl">Your bookings:{bookings.length}</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     
     {
      bookings.map(booking => 
        <BookingRow
         key={booking._id}
         booking={booking}
        handleDelete={handleDelete}></BookingRow>
      )
     }
     
    </tbody>
   
  
  </table>
</div>
    </div>
  );
};

export default Bookings;