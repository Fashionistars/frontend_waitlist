import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  /* HTML: <div class="loader"></div> */

  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="disabled:bg-[#fda600]/70 outline-none h-[70px] w-full rounded-[70px] flex place-content-center items-center bg-[#fda600] text-white text-[22px] font-medium font-satoshi"
    >
      {pending ? <div className="loader" /> : "Join Waitlist"}
    </button>
  );
};

export default Button;
