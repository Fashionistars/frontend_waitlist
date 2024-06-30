"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import z from "zod";

const schema = z.object({
  business_name: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This is not valid",
    })
    .min(3, { message: "Your business name should be at least 3 characters" }),
  email: z
    .string({
      invalid_type_error: "Invalid email entered",
      required_error: "Your email is required",
    })
    .email(),
  phone_number: z
    .string({
      required_error: "Please enter your Phone number",
      invalid_type_error: "This is invalid",
    })
    .min(10, { message: "Phone number should be at least 10 characters" }),
  product_name: z
    .string({
      required_error: "Please enter a name for this product",
      invalid_type_error: "this is invalid",
    })
    .min(3)
    .max(20),
  product_description: z
    .string({
      required_error: "Please enter a brief description of your product",
      invalid_type_error: "this is invalid",
    })
    .min(10, { message: "A little more detail please" })
    .max(100),
  image_1: z
    .instanceof(File, {
      message: "Image is required and should be a file",
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "Image must be less than 5MB",
    }) // 5MB limit
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
          file.type
        ),
      { message: "Image must be a JPEG, PNG, or GIF" }
    ),
  image_2: z
    .instanceof(File, {
      message: "Image is required and should be a file",
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "Image must be less than 5MB",
    }) // 5MB limit
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
          file.type
        ),
      { message: "Image must be a JPEG, PNG, or GIF" }
    ),
  image_3: z
    .instanceof(File, {
      message: "Image is required and should be a file",
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "Image must be less than 5MB",
    }) // 5MB limit
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
          file.type
        ),
      { message: "Image must be a JPEG, PNG, or GIF" }
    ),
});
export const createWaitlist = async (prev: any, formdata: FormData) => {
  const data = Object.fromEntries(formdata.entries());
  console.log(data);
  const validatedData = schema.safeParse(data);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }
  // //fashionistar-waitlist.onrender.com/waitlist/waitlist/create/
  try {
    const res = await axios.post(
      "https://fashionistar-waitlist.onrender.com/waitlist/create/",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      }
    );

    console.log(res);
  } catch (error: any) {
    console.log(error);
    return {
      errors: error?.response?.data,
    };
  }

  redirect("/");
};
