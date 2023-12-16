import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import Gellery from "./Gellery";
import NewProducts from "./NewProducts/NewProducts";
import OurShop from "./OurShop/OurShop";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            {/* <Banner></Banner> */}
            {/* <Gellery></Gellery> */}
            {/* <OurShop></OurShop> */}
            {/* <NewProducts></NewProducts> */}
            {/* <CustomerReview></CustomerReview> */}
        </div>
    );
};

export default Home;