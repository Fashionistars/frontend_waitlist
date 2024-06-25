"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createWaitlist } from "../action";
import { useFormState } from "react-dom";
import OnlyDigitInput from "../components/NumberInput";
import Button from "./Button";
import ImageInput from "../components/ImageInput";
import toast from "react-hot-toast";

const Form = () => {
  const router = useRouter();
  const initialState: ErrorProps = {
    errors: {
      business_name: "",
      email: "",
      phone_number: "",
      product_name: "",
      product_description: "",
      image_1: "",
    },
  };
  const [state, formAction] = useFormState(createWaitlist, initialState);
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("Error");
  // };

  return (
    <div
      style={{ boxShadow: "12px 12px 0px 0px #FDA600" }}
      className="relative rounded-[30px] border-2 m-auto  py-14 px-2 lg:p-16 border-[#fda600] w-[90%] md:w-[80%] h-full bg-white"
    >
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute top-4 right-2 outline-none"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.6383 17.1375L32.8633 15.3625L25.0008 23.2375L17.1383 15.3625L15.3633 17.1375L23.2383 25L15.3633 32.8625L17.1383 34.6375L25.0008 26.7625L32.8633 34.6375L34.6383 32.8625L26.7633 25L34.6383 17.1375Z"
            fill="#858585"
          />
          <circle cx="25" cy="25" r="24.5" stroke="#D9D9D9" />
        </svg>
      </button>

      <div className="space-y-5">
        <h2 className="font-satoshi  font-medium text-center text-2xl lg:text-5xl lg:leading-[65px] text-black">
          Join the waitlist
          <p className="font-satoshi font-normal text-center text-xs md:text-2xl  text-[#282828]">
            ...and be the first to enjoy all products and services
            <span className="text-[#fda600] font-medium px-1">
              Fashionistar
            </span>
            have for you.
          </p>
        </h2>
      </div>

      <form
        action={formAction}
        noValidate
        className="px-2 lg:px-8 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2 relative">
          <label className="font-satoshi font-medium text-[#282828] ">
            Business Name
          </label>
          <input
            type="text"
            required
            name="business_name"
            className="w-full h-[50px] rounded-[70px] border-[1.5px] border-[#d9d9d9] text-[#282828] bg-white outline-none px-3"
          />
          {state?.errors?.business_name && (
            <span className="absolute right-0 -bottom-4 tracking-tighter text-xs leading-tight text-red-600">
              {state.errors?.business_name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="font-satoshi font-medium text-[#282828]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full h-[50px] rounded-[70px] border-[1.5px] border-[#d9d9d9] text-[#282828] bg-white outline-none px-3"
          />
          {state?.errors?.email && (
            <span className="absolute right-0 -bottom-4 tracking-tighter text-xs leading-tight text-red-600">
              {state.errors?.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="font-satoshi font-medium text-[#282828]">
            Phone Number
          </label>
          <OnlyDigitInput />
          {state?.errors?.phone_number && (
            <span className="absolute right-0 -bottom-4 tracking-tighter text-xs leading-tight text-red-600">
              {state.errors?.phone_number}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-satoshi font-medium text-[#282828]">
              Upload Image
            </p>
            <span className="font-satoshi font-medium text-[13px] leading-[18px] text-[#858585]">
              We will like to see some of your designs, please add at least 2
              images of one of your previous designs
            </span>
          </div>

          <div className="border-[1.5px] border-[#d9d9d9] rounded-[20px] p-5 space-y-8">
            <div className="relative">
              <label className="font-satoshi font-medium text-sm leading-[19px] text-black">
                Product name
              </label>
              <input
                name="product_name"
                type="text"
                className="border border-[#d9d9d9] rounded-[10px] w-full h-[50px] text-[#282828] bg-white outline-none px-3"
              />
              {state?.errors?.product_name && (
                <span className="absolute right-0 -bottom-4 tracking-tighter text-xs leading-tight text-red-600">
                  {state.errors?.product_name}
                </span>
              )}
            </div>
            <div className="relative">
              <label className="font-satoshi font-medium text-sm leading-[19px] text-black">
                Product Description
              </label>
              <textarea
                name="product_description"
                className="border border-[#d9d9d9] rounded-[10px] w-full h-[75px] text-[#282828] bg-white outline-none px-3"
              />
              {state?.errors?.product_description && (
                <span className="absolute right-0 -bottom-4 tracking-tighter text-xs leading-tight text-red-600">
                  {state.errors?.product_description}
                </span>
              )}
            </div>

            <ImageInput states={state} />
          </div>
        </div>
        {!state?.errors &&
          toast.success(
            <p className="text-lg font-bon_foyage text-[#282828] w-full">
              Successfully joined the waitlist
            </p>,
            { duration: 3000 }
          )}
        <Button />
      </form>
    </div>
  );
};

export default Form;
