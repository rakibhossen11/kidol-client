import image1 from '../../../src/assets/images/car1.jpg';

const Banner = () => {
  return (
     <section >
       <img className='h-[350px] w-full bg-cover px-[100px]' src={image1} alt="" />
     </section>
  );
};

export default Banner;
