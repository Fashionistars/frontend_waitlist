import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="disabled:bg-[#fda600]/70 outline-none h-[70px] w-full rounded-[70px] flex place-content-center items-center bg-[#fda600] text-white text-[22px] font-medium font-satoshi"
    >
      {pending ? (
        <div className="animate-spin">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="uil-ring"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#fff"
              fill="none"
              stroke-width="10"
              stroke-linecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                repeatCount="indefinite"
                from="0"
                to="502"
              />
              <animate
                attributeName="stroke-dasharray"
                dur="2s"
                repeatCount="indefinite"
                values="150.6 100.4;1 250;150.6 100.4"
              />
            </circle>
          </svg>
        </div>
      ) : (
        "Join Waitlist"
      )}
    </button>
  );
};

export default Button;
