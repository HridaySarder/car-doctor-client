/* eslint-disable react/prop-types */
import {  MdOutlineArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

const {_id,title,img,price} = service;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-56" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
   
    <div className="text-[#FF3811] flex justify-around items-center">
    <p>Price:${price}</p>
<Link to={`/checkout/${_id}`}>
<MdOutlineArrowRightAlt className='ml-20 text-3xl'></MdOutlineArrowRightAlt>
</Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default ServiceCard;