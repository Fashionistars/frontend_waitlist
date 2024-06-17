"use client";
import { useState } from "react";

function OnlyDigitsInput() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const regex = /^[0-9]*$/;

    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="h-[50px] rounded-[70px] border-[1.5px] border-[#d9d9d9]  px-3 flex items-center ">
      <span className="px-2">+234</span>
      <input
        type="text"
        className="w-full h-full outline-none py-2 text-[#282828] bg-white "
        pattern="^[0-9]"
        onChange={handleChange}
      />
      <input type="hidden" name="phone_number" value={"+234" + value} />
    </div>
  );
}

export default OnlyDigitsInput;
