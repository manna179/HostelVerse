import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import food1 from '../../../assets/food (1).jpg'
import food2 from '../../../assets/food (2).jpg'
import food3 from '../../../assets/food (3).jpg'
import food4 from '../../../assets/food (4).jpg'
import food5 from '../../../assets/food (5).jpg'


const Banner = () => {
    return (
       <div  className="h-[60vh]  ">
          <Carousel>
                <div className="h-[60vh] relative flex justify-center w-full">
                    <img className="h-full  object-cover w-full" src={food1} />

                    <h2 className="text-2xl font-bold top-10 absolute text-white ">Delicious Dishes, Anytime, Anywhere</h2>
                    <p className="text-lg absolute top-20 font-semibold text-white ">Explore a world of mouthwatering flavors, fresh ingredients, and chef-inspired recipes delivered right to your doorstep.</p>
                    <div className="flex absolute gap-2 top-32  bg-white rounded-lg border-2">
                        <input className="rounded-lg text-center" type="text" placeholder="Search here" />
                        <button className="btn bg-[#FFD709]">Search</button>
                    </div>
                
                </div>
                <div className="h-[60vh] relative flex justify-center w-full">
                    <img className="h-full object-cover w-full" src={food2} />
                    <h2 className="text-2xl font-bold top-10 absolute text-white ">Share the Love of Food</h2>
                    <p className="text-lg absolute top-20 font-semibold text-white ">Explore a world of mouthwatering flavors, fresh ingredients, and chef-inspired recipes delivered right to your doorstep.</p>
                    <div className="flex absolute gap-2 top-32  bg-white rounded-lg border-2">
                        <input className="rounded-lg text-center" type="text" placeholder="Search here" />
                        <button className="btn bg-[#FFD709]">Search</button>
                    </div>
                    
                </div>
                <div className="h-[60vh] relative flex justify-center w-full">
                    <img className="h-full object-cover w-full" src={food3} />
                    <h2 className="text-2xl font-bold top-10 absolute text-white ">Good Food, Great Moments</h2>
                    <p className="text-lg absolute top-20 font-semibold text-white ">Explore a world of mouthwatering flavors, fresh ingredients, and chef-inspired recipes delivered right to your doorstep.</p>
                    <div className="flex absolute gap-2 top-32  bg-white rounded-lg border-2">
                        <input className="rounded-lg text-center" type="text" placeholder="Search here" />
                        <button className="btn bg-[#FFD709]">Search</button>
                    </div>
                    
                </div>
                <div className="h-[60vh] relative flex justify-center w-full">
                    <img className="h-full object-cover w-full" src={food4} />
                    <h2 className="text-2xl font-bold top-10 absolute text-white ">Your Next Meal, Just a Click Away</h2>
                    <p className="text-lg absolute top-20 font-semibold text-white ">Explore a world of mouthwatering flavors, fresh ingredients, and chef-inspired recipes delivered right to your doorstep.</p>
                    <div className="flex absolute gap-2 top-32  bg-white rounded-lg border-2">
                        <input className="rounded-lg text-center" type="text" placeholder="Search here" />
                        <button className="btn bg-[#FFD709]">Search</button>
                    </div>
                    
                </div>
                <div className="h-[60vh] relative flex justify-center w-full">
                    <img className="h-full object-cover w-full" src={food5} />
                    <h2 className="text-2xl font-bold top-10 absolute text-white ">Celebrate Flavors That Matter</h2>
                    <p className="text-lg absolute top-20 font-semibold text-white ">Explore a world of mouthwatering flavors, fresh ingredients, and chef-inspired recipes delivered right to your doorstep.</p>
                    <div className="flex absolute gap-2 top-32  bg-white rounded-lg border-2">
                        <input className="rounded-lg text-center" type="text" placeholder="Search here" />
                        <button className="btn bg-[#FFD709]">Search</button>
                    </div>
                    
                </div>
            </Carousel>
       </div>
    );
};

export default Banner;