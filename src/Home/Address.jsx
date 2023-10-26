
import {  BsCalendarDate } from 'react-icons/bs';
import { MdWifiCalling } from 'react-icons/md';
import { PiMapPinLineBold } from 'react-icons/pi';
const Address = () => {
  return (
    <div className="bg-black text-white p-20 flex justify-between rounded-lg">
      <div className='flex items-center gap-5'>
      <BsCalendarDate className='text-3xl text-[#FF3811]'></BsCalendarDate>
        <div>
          
          <p>We are open monday-friday</p>
          <h3 className="text-3xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <MdWifiCalling className='text-3xl text-[#FF3811]'></MdWifiCalling>
      <div>
          <p>Have a question?</p>
          <h3 className="text-3xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <PiMapPinLineBold className='text-3xl text-[#FF3811]'></PiMapPinLineBold>
      <div>
          <p>Need a repair? our address</p>
          <h3 className="text-3xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Address;