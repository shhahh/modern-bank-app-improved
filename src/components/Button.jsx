import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-3 px-5 hover:scale-100 transition-transform font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
