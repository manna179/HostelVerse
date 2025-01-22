import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import food1 from '../../../assets/food (1).jpg'
import food2 from '../../../assets/food (2).jpg'
import food3 from '../../../assets/food (3).jpg'
import food4 from '../../../assets/food (4).jpg'
import food5 from '../../../assets/food (5).jpg'
import food6 from '../../../assets/food (6).jpg'

const Banner = () => {
    return (
       <div  className="h-[60vh]  ">
          <Carousel>
                <div className="h-[60vh] w-full">
                    <img className="h-full object-cover w-full" src={food1} />
                
                </div>
                <div className="h-[60vh] w-full">
                    <img className="h-full object-cover w-full" src={food2} />
                    
                </div>
                <div className="h-[60vh] w-full">
                    <img className="h-full object-cover w-full" src={food3} />
                    
                </div>
                <div className="h-[60vh] w-full">
                    <img className="h-full object-cover w-full" src={food4} />
                    
                </div>
                <div className="h-[60vh] w-full">
                    <img className="h-full object-cover w-full" src={food5} />
                    
                </div>
            </Carousel>
       </div>
    );
};

export default Banner;