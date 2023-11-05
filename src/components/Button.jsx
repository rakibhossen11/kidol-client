import React from 'react';

const Button = ({title}) => {
    return (
        <button className={`bg-[#f2f6fa] font-Ubuntuu px-3 py-2 rounded-lg text-[#003580] hover:bg-[#b4d1fa]`}>
            {title}
        </button>
    );
};

export default Button;