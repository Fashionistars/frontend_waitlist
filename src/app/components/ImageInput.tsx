"use client";
import React, { useState } from "react";
import Image from "next/image";

interface InputProps {
  states: {
    errors?: {
      business_name?: string;
      email?: string;
      phone_number?: string;
      product_name?: string;
      product_description?: string;
      image_1?: string;
    };
    message?: string | undefined;
  };
}

const ImageInput = ({ states }: InputProps) => {
  const [previewImages, setPreviewImages] = useState<{ [key: string]: string }>(
    {
      image_1: "",
      image_2: "",
      image_3: "",
    }
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewImages((prevImages) => ({
            ...prevImages,
            [name]: e.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="relative flex flex-col gap-4">
      {["image_1", "image_2", "image_3"].map((imageName, index) => (
        <div key={index}>
          <label htmlFor={imageName}>
            <div className="relative gap-2 flex items-center border border-[#d9d9d9] text-[#282828] rounded-[10px] bg-white h-[64px] w-full outline-none px-3">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                <path
                  d="M31 28V18C31 17.2044 30.6839 16.4413 30.1213 15.8787C29.5587 15.3161 28.7956 15 28 15H18C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18V28C15 28.7956 15.3161 29.5587 15.8787 30.1213C16.4413 30.6839 17.2044 31 18 31H28C28.7956 31 29.5587 30.6839 30.1213 30.1213C30.6839 29.5587 31 28.7956 31 28ZM17 18C17 17.7348 17.1054 17.4804 17.2929 17.2929C17.4804 17.1054 17.7348 17 18 17H28C28.2652 17 28.5196 17.1054 28.7071 17.2929C28.8946 17.4804 29 17.7348 29 18V22.36L27.92 21.27C27.44 20.7899 26.7889 20.5201 26.11 20.52C25.4315 20.5223 24.7812 20.7917 24.3 21.27L23.39 22.18L22.58 21.37C22.0319 20.8307 21.2939 20.5285 20.525 20.5285C19.7561 20.5285 19.0181 20.8307 18.47 21.37L17 22.85V18ZM17.12 28.45C17.0429 28.3124 17.0016 28.1577 17 28V25.67L19.88 22.79C19.9646 22.705 20.0651 22.6376 20.1758 22.5916C20.2864 22.5456 20.4051 22.5219 20.525 22.5219C20.6449 22.5219 20.7636 22.5456 20.8742 22.5916C20.9849 22.6376 21.0854 22.705 21.17 22.79L22 23.6L17.12 28.45ZM25.72 22.69C25.7693 22.6358 25.8296 22.5926 25.8968 22.5633C25.964 22.534 26.0367 22.5192 26.11 22.52C26.1833 22.5192 26.256 22.534 26.3232 22.5633C26.3904 22.5926 26.4507 22.6358 26.5 22.69L29 25.18V28C29 28.2652 28.8946 28.5196 28.7071 28.7071C28.5196 28.8946 28.2652 29 28 29H19.4L25.72 22.69ZM34 19C33.7348 19 33.4804 19.1054 33.2929 19.2929C33.1054 19.4804 33 19.7348 33 20V30C33 30.7956 32.6839 31.5587 32.1213 32.1213C31.5587 32.6839 30.7956 33 30 33H20C19.7348 33 19.4804 33.1054 19.2929 33.2929C19.1054 33.4804 19 33.7348 19 34C19 34.2652 19.1054 34.5196 19.2929 34.7071C19.4804 34.8946 19.7348 35 20 35H30C31.3261 35 32.5979 34.4732 33.5355 33.5355C34.4732 32.5979 35 31.3261 35 30V20C35 19.7348 34.8946 19.4804 34.7071 19.2929C34.5196 19.1054 34.2652 19 34 19Z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col gap-1">
                <p className="font-satoshi font-medium text-[13px] leading-[18px] text-black">
                  Upload product
                </p>
                <span className="font-satoshi font-medium text-[11px] leading-[15px] text-[#858585]">
                  PNG or JPEG
                </span>
              </div>
              <div className="absolute right-3 top-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1529 15.1739C18.6352 15.164 18.2076 15.5757 18.1977 16.0934C18.1879 16.6111 18.5995 17.0387 19.1172 17.0486L19.1529 15.1739ZM23.157 20.3913L22.2195 20.3745V20.3913H23.157ZM23.157 20.72H22.2192L22.2196 20.7367L23.157 20.72ZM19.1351 25V25.9375C19.141 25.9375 19.147 25.9375 19.1529 25.9374L19.1351 25ZM10.1163 25L10.0985 25.9374C10.1044 25.9375 10.1104 25.9375 10.1163 25.9375V25ZM6.09445 20.72L7.03195 20.7367V20.72H6.09445ZM6.09445 20.3913H7.0321L7.0318 20.3745L6.09445 20.3913ZM10.1342 17.0486C10.6518 17.0387 11.0635 16.6111 11.0537 16.0934C11.0438 15.5757 10.6161 15.164 10.0985 15.1739L10.1342 17.0486ZM17.8934 20.1655C18.2912 19.8341 18.3452 19.243 18.014 18.8451C17.6827 18.4473 17.0916 18.3932 16.6936 18.7245L17.8934 20.1655ZM14.0259 20.9457C13.6279 21.2771 13.574 21.8682 13.9052 22.2661C14.2365 22.664 14.8276 22.718 15.2256 22.3868L14.0259 20.9457ZM14.0255 22.3865C14.4232 22.7179 15.0144 22.6643 15.3459 22.2664C15.6774 21.8686 15.6236 21.2775 15.2259 20.946L14.0255 22.3865ZM12.5605 18.7248C12.1627 18.3934 11.5716 18.447 11.2401 18.8449C10.9086 19.2426 10.9623 19.8338 11.3601 20.1653L12.5605 18.7248ZM13.6882 21.6663C13.6882 22.184 14.1079 22.6038 14.6257 22.6038C15.1435 22.6038 15.5632 22.184 15.5632 21.6663H13.6882ZM15.5632 5C15.5632 4.48224 15.1435 4.0625 14.6257 4.0625C14.1079 4.0625 13.6882 4.48224 13.6882 5H15.5632ZM19.1172 17.0486C20.8406 17.0814 22.2521 18.5485 22.2195 20.3745L24.0942 20.408C24.1446 17.5924 21.9551 15.2273 19.1529 15.1739L19.1172 17.0486ZM22.2195 20.3913L22.2192 20.72H24.0945V20.3913H22.2195ZM22.2196 20.7367C22.2522 22.5627 20.8406 24.0299 19.1172 24.0626L19.1529 25.9374C21.9551 25.884 24.1446 23.5189 24.0942 20.7032L22.2196 20.7367ZM19.1351 24.0625H10.1163V25.9375H19.1351V24.0625ZM10.1342 24.0626C8.41076 24.0299 6.99935 22.5627 7.03195 20.7367L5.1571 20.7032C5.10682 23.5189 7.29624 25.884 10.0985 25.9374L10.1342 24.0626ZM7.03195 20.72L7.0321 20.3913H5.15695V20.72H7.03195ZM7.0318 20.3745C6.9992 18.5485 8.41076 17.0814 10.1342 17.0486L10.0985 15.1739C7.29624 15.2273 5.10682 17.5924 5.1571 20.408L7.0318 20.3745ZM16.6936 18.7245L14.0259 20.9457L15.2256 22.3868L17.8934 20.1655L16.6936 18.7245ZM15.2259 20.946L12.5605 18.7248L11.3601 20.1653L14.0255 22.3865L15.2259 20.946ZM15.5632 21.6663V5H13.6882V21.6663H15.5632Z"
                    fill="#858585"
                  />
                </svg>
              </div>
            </div>
          </label>
          <input
            id={imageName}
            name={imageName}
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            required
            onChange={handleImageChange}
          />
        </div>
      ))}

      <div className="flex items-center gap-3">
        {["image_1", "image_2", "image_3"].map((img, index) => {
          return previewImages[img] ? (
            <div className="w-[100px] h-[100px]">
              <Image
                key={index}
                src={previewImages[img]}
                alt={`Preview ${img}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ImageInput;
