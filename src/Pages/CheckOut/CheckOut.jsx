import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthCotext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";



const CheckOut = () => {

  const service = useLoaderData();
  const {title, _id,price,img} = service;
  const {user} = useContext(AuthCotext)

const handleServices = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const date = form.date.value;
  const email = user?.email;
  const booking = {
    customerName:name,
    email,
    img,
    date,
    service,
    service_id: _id,
    price:price
  }

console.log(booking);

fetch('http://localhost:5000/bookings',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

})

}

 
  return (
    <div>
      <h2 className="text-3xl text-center">Services:{title}</h2>
      <form onSubmit={handleServices} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" required />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Ammount</span>
          </label>
          <input type="text" name="due" defaultValue={price} className="input input-bordered" required />
          
        </div>
       </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;