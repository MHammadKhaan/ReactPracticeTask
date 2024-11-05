import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignUpInputState, userSignUpSchema } from "@/schema/userSchema";
import { LockKeyhole, Mail, PhoneIcon, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
// type SignUpInputState = {
//   fullName: string;
//   contact: string;
//   email: string;
//   password: string;
// };
const Signup = () => {
  const [input, setInput] = useState<SignUpInputState>({
    fullName: "",
    contact: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const SignUpSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userSignUpSchema.safeParse(input);
    if (!result.success) {
      const failedErrors = result.error.formErrors.fieldErrors;
      setErrors(failedErrors as Partial<SignUpInputState>);
      return;
    }

    console.log(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={SignUpSubmitHandler}
        className="md:p-8 w-full max-w-md  md:border border-gray-200 rounded-lg mx-4"
      >
        <div className=" mb-4">
          <h1 className="font-bold text-center  text-2xl">Sign Up Page</h1>
        </div>
        <div className="mb-4">
          <div className=" relative">
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              placeholder="Full Name"
              onChange={changeEventHandler}
              className="pl-9 focus-visible:ring-1 "
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-600 font-semibold">
                {errors.fullName}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className=" relative">
            <Input
              type="text"
              name="contact"
              value={input.contact}
              placeholder="Contact Number"
              onChange={changeEventHandler}
              className="pl-9 focus-visible:ring-1 "
            />
            <PhoneIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-600 font-semibold">
                {errors.contact}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className=" relative">
            <Input
              type="text"
              name="email"
              value={input.email}
              placeholder="Email"
              onChange={changeEventHandler}
              className="pl-9 focus-visible:ring-1 "
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-600 font-semibold">
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className=" relative">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-9 focus-visible:ring-1 "
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-600 font-semibold">
                {errors.password}
              </span>
            )}
          </div>
        </div>
        <div className="mb-8 flex justify-center">
          <Button type="submit" className="hover:bg-yellow-700 w-full ">
            SignUp
          </Button>
        </div>
        <hr />
        <p className="mt-2 font-semibold text-center">
          Already have account?{" "}
          <Link className="text-blue-500 hover:text-yellow-700 " to={"/"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
