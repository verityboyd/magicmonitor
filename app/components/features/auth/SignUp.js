"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const { signUp } = useUserAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const SignUpSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email cannot be blank"),
    firstName: Yup.string().required("First name cannot be blank"),
    lastName: Yup.string().required("Last name cannot be blank"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Re-enter password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      const { user: newUser, error } = await signUp(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
      );
      if (error) {
        setError(error);
        return;
      }
      console.log("user created:", newUser);
      router.push("/");
    },
  });

  return (
    <section>
      <div className="p-5">
        <form onSubmit={formik.handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="example@example.ca"
            className="border-2 rounded-lg px-3 py-2 w-80 border-gray-400"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 py-1">{formik.errors.email}</div>
          ) : null}
          <div className="pt-2">
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="First Name"
              className="border-2 rounded-lg px-3 py-2 w-80 border-gray-400"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 py-1">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="pt-2">
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="Last Name"
              className="border-2 rounded-lg px-3 py-2 w-80 border-gray-400"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 py-1">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="pt-2">
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              className="border-2 rounded-lg px-3 py-2 w-80 border-gray-400"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 py-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="pt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Re-enter Password"
              className="border-2 rounded-lg px-3 py-2 w-80 border-gray-400"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 py-1">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="flex flex-row justify-center pt-10">
            <button
              type="submit"
              className="border-2 rounded-lg px-2 py-1 bg-[#A7D8FF] text-black cursor-pointer hover:scale-110"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
