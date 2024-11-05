import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const VerifyEmail = () => {
  const [opt, setOpt] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const loading = false;
  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...opt];
      newOtp[index] = value;
      setOpt(newOtp);
    }
    //moving to next input field
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !opt[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex  justify-center items-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-bold text-2xl  ">Verify your email </h1>
          <p className="text-sm text-gray-600 ">
            {" "}
            Enter 6 digit code sent to your email
          </p>
        </div>

        <form>
          <div className="flex  justify-between">
            {opt.map((letter: string, index: number) => (
              <Input
                key={index}
                ref={(e) => (inputRef.current[index] = e)}
                type="text"
                maxLength={1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                value={letter}
                className="md:w-12 md:h-12 w-8 h-8 text-center
                 text-sm font-normal md:text-2xl md:font-bold rounded-lg 
                 focus:outline-none focus:ring-1 focus:ring-indigo-600 "
              />
            ))}
          </div>
          {loading ? (
            <Button disabled className="hover:bg-yellow-700 mt-4 w-full">
              <Loader2 className=" mr-2 w-4 h-4 animate-spin " />
              plaease wait ..
            </Button>
          ) : (
            <Button className="hover:bg-yellow-700 mt-4 w-full">Verify</Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
