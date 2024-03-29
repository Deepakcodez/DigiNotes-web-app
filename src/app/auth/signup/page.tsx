"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import * as yup from "yup";
import { ThreeDots } from 'react-loader-spinner'

interface UserDataType {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    email: "",
    password: "",
  });

  let userSchema = yup.object({
    name: yup
      .string()
      .min(2, "Name should be atleast 2 character")
      .required("Email is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "password must be 6 characters")
      .required("Password is required"),
  });

  const SubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setError(null);
      const isValidate = await userSchema.validate(userData, {
        abortEarly: false,
      });
      if (isValidate) {
        setIsLoading(true);
        const response = await axios.post("/api/auth/signup", userData);
        console.log(">>>>>>>>>>>res", response);
        setIsLoading(false);
        router.push("/auth/login");
      }
    }catch (error: any) {
      console.log(">>>>>>>>>>>", error);
      const newError: { [key: string]: string } = {}; // Create a new object to store errors
      if (error.inner) {
        error.inner.forEach((err: any) => {
          newError[err.path] = err.message; // Assign error message to the corresponding field
        });
      }
      setError(newError); // Update the error state with new errors
    }
  };

  return (
    <>
      <div className=" relative overflow-hidden h-screen w-full bg-gradient-to-r from-slate-900 to-blue-500 flex justify-center items-end">
        <h1 className="text-[4rem] md:text-[10rem]  font-semibold text-white/75 self-start mt-[5rem]">
          Digi-Notes
        </h1>
        {/* laptop */}
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: 150 }}
          transition={{
            type: "spring",
            delay: 0.5,
          }}
          className="absolute z-30 h-[85%] w-[97%] md:w-[70%]   bg-gradient-to-r from-slate-700 to-gray-800  rounded-t-lg px-[1rem] md:px-[2rem] pt-[2rem]"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          {/* screen  */}
          <div className="h-full  w-full p-6 bg-white rounded-sm">
            <h1 className=" font-bold text-5xl text-center">Register</h1>

            <form className="max-w-md mx-auto py-[2rem] md:py-[5rem]">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                {error?.name && (
                  <div className="text-red-500">{error?.name}</div>
                )}

                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  inputMode="email"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                {error?.email && (
                  <div className="text-red-500">{error?.email}</div>
                )}

                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  id="Password"
                  name="password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                {error?.password && (
                  <div className="text-red-500">{error?.password}</div>
                )}
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>
               {
                isLoading ? 
                <ThreeDots
                    visible={true}
                    height="14"
                    width="100%"
                    color="blue"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass="text-center "
                 />:
                 <button
                 type="submit"
                 onClick={SubmitHandler}
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Submit
               </button>
               }
              
              <h1 className="mt-4">
                Have an account
                <span
                  onClick={() => router.push("/auth/login")}
                  className="text-blue-700 cursor-pointer"
                >
                  {" "}
                  Sign-In
                </span>
              </h1>
            </form>
          </div>
        </motion.div>
        {/* light  */}
        <div className="absolute  w-[30rem] h-[30rem] rounded-full bg-violet-500 blur-[100px]"></div>
        <div className="absolute  left-[10rem] bottom-[-20rem]  w-[40rem] h-[40rem] rounded-full bg-green-300 blur-[200px]"></div>
      </div>
    </>
  );
};

export default Login;
