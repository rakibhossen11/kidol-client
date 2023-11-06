import { Rating } from "@smastrom/react-rating";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const CustomerReview = () => {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody>
    </Card>
    // <div className="p-2">
    //   <h2 className="text-center font-display text-4xl">Happy Customer</h2>
    //   <p className="text-center font-myFont">
    //     The review section on this website is a treasure trove of insights! It
    //     allows users to share their honest opinions, ratings, and experiences.
    //     It's a great place to gather valuable feedback and make informed
    //     decisions. A must-visit for those seeking authentic user perspectives.
    //   </p>
    //   <div className="p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <div className="flex flex-col items-center md:flex-row bg-orange-300 shadow-xl p-10">
    //       <div className="avatar">
    //         <div className="w-24 rounded-full">
    //           <img
    //             src="https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=400"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       <div className="p-4 text-center">
    //         <h2 className="font-display text-2xl">Emma Davis</h2>
    //         <p>
    //           This toy shop is a dream come true for kids and parents alike! The
    //           collection is extensive, the staff is knowledgeable and friendly,
    //           and the prices are reasonable. It's a haven for toy enthusiasts.
    //           Highly recommended for endless fun and joyful shopping!
    //         </p>
    //         <p className="flex gap-2 mt-1">
    //           <Rating
    //             style={{ maxWidth: 150 }}
    //             value="5"
    //             readOnly
    //           />
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center md:flex-row bg-orange-300 shadow-xl p-10">
    //       <div className="avatar">
    //         <div className="w-24 rounded-full">
    //           <img
    //             src="https://teta.kitestudio.co/wp-content/uploads/2021/09/person-2.jpg"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       <div className="p-4 text-center">
    //         <h2 className="font-display text-2xl"> Sophia</h2>
    //         <p>
    //           "Amazing toy shop! Wide variety of toys, friendly staff, and
    //           affordable prices. My kids love it! Highly recommend for all your
    //           toy needs. A must-visit!"
    //         </p>
    //         <div className="flex gap-2 mt-1">
    //           <Rating
    //             style={{ maxWidth: 150 }}
    //             value="4"
    //             readOnly
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CustomerReview;
