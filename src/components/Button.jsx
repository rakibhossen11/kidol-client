import React from 'react';

const Button = ({title}) => {
    return (
        <button className={`bg-[#FDFEFE] font-Ubuntuu text-[18px] px-[15px] py-[9px] rounded-lg hover:text-[#FDFEFE] hover:bg-[#4569D1]`}>
            {title}
        </button>
    );
};

export default Button;