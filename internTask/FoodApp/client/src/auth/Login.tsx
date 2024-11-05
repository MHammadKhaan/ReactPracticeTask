import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
// type LoginInputState = {
//   email: string;
//   password: string;
// };
const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const LoginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const failedErrors = result.error.formErrors.fieldErrors;
      setErrors(failedErrors as Partial<LoginInputState>);
    }

    console.log(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={LoginSubmitHandler}
        className="md:p-8 w-full max-w-md  md:border border-gray-200 rounded-lg mx-4"
      >
        <div className=" mb-4">
          <h1 className="font-bold text-center  text-2xl">Login Page</h1>
        </div>
        <div className="mb-4">
          <div className=" relative">
            <Input
              type="text"
              name="email"
              value={input.email}
              placeholder="email"
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
              placeholder="password"
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
        <div className="mb-8 flex flex-col gap-1 justify-center">
          <Button type="submit" className="hover:bg-yellow-700 w-full ">
            Login
          </Button>
          <p><Link className="text-blue-500 hover:underline hover:text-yellow-700 text-sm font-semibold " to={"/forgotPassword"}>Forgot Password</Link></p>
        </div>
        <hr />
        <p className="mt-2 font-semibold text-center">
          Don't have account?{" "}
          <Link className="text-blue-500 hover:text-yellow-700 hover:underline " to={"/signup"}>
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
