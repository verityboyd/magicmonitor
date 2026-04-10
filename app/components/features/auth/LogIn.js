"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function LogIn() {
  const { login } = useUserAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const LogInSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email cannot be blank"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LogInSchema,
    onSubmit: async (values) => {
      const { user, error } = await login(values.email, values.password);
      if (error) {
        setError(error);
        return;
      }
      console.log("user logged in:", user);
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
          <div className="pt-5">
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
          <div className="flex flex-row justify-end pt-1 font-bold cursor-pointer hover:underline">
            Forgot Password?
          </div>
          <div className="flex flex-row justify-center pt-10">
            <button
              type="submit"
              className="border-2 rounded-lg px-2 py-1 bg-[#A7D8FF] text-black cursor-pointer hover:scale-110"
            >
              Log In
            </button>
          </div>
        </form>
        {error && <div className="text-red-500 italic pt-10">{error}</div>}
      </div>
    </section>
  );
}
