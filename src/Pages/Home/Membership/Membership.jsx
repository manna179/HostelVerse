import silver from '../../../assets/package/silver (2).png'
import gold from '../../../assets/package/gold.png'
import platinum from '../../../assets/package/platinum.png'
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';



const Membership = () => {
const {user}=useAuth()


  return (
    <div className="my-10">
      <div>
        <h2 className="text-3xl text-center font-bold  ">
          Membership Packages
        </h2>
        <p className="text-lg font-semibold text-center  ">
          Get amazing discount by upgrading yourself!
        </p>
      </div>
      {/* card silver*/}
     <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4 mx-auto">
     
        <Link >
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={silver}
            alt="Silver"
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get Silver Badge</h2>
          <p>Discount 10%</p>
          <div className="card-actions">
            <button className="btn bg-[#FFD709]">Silver Badge</button>
          </div>
        </div>
      </div></Link>
   
      {/* card gold*/}
      <div className="card bg-base-100 w-96 h-[400px] shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={gold}
            alt="Gold"
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get Gold Badge</h2>
          <p>Discount 15%</p>
          <div className="card-actions">
            <button className="btn bg-[#FFD709]">Gold Badge</button>
          </div>
        </div>
      </div>
      {/* card platinum*/}
      <div className="card bg-base-100 w-96 h-[400px]  shadow-xl">
        <figure className="px-10 pt-10">
          <img
          
            src={platinum}
            alt="Platinum"
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get Platinum Badge</h2>
          <p>Discount 20%</p>
          <div className="card-actions">
            <button className="btn bg-[#FFD709]">Platinum</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Membership;
