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
       <div  className="">
          <Carousel>
                <div >
                    <img className="" src={food1} />
                
                </div>
                <div>
                    <img src={food2} />
                    
                </div>
                <div>
                    <img src={food3} />
                    
                </div>
                <div>
                    <img src={food4} />
                    
                </div>
                <div>
                    <img src={food5} />
                    
                </div>
            </Carousel>
       </div>
    );
};

export default Banner;