import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../../assets/images/car1.jpg';
import banner2 from '../../assets/images/car2.jpg';
import banner3 from '../../assets/images/car3.jpg';

const Banner = () => {
  return (
     <Carousel autoPlay={true}>
        <img src={banner} />
        <img src={banner2} />
        <img src={banner3} />
    </Carousel>
  );
};

export default Banner;
