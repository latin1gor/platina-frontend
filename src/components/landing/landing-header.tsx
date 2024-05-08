import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";
import { useEmail } from "@/hooks/useEmail.tsx";
import { Email } from "@/providers/email-provider.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";

const LandingHeader = () => {
  const navigate = useNavigate();
  const { setEmail } = useEmail();
  const [emailValue, setEmailValue] = useState<Email>("");

  const onEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailValue?.trim()) {
      setEmail(emailValue);
      navigate(routes.REGISTER);
    }
  };

  return (
    <div
      className={
        "flex flex-col w-full h-screen text-center items-center justify-start bg-black p-5 lg:p-14 md:p-16 pt-14"
      }
    >
      <div className={"flex flex-col space-y-10"}>
        <div className={"flex flex-col "}>
          <h1
            className={
              "text-gradient text-4xl pt-5 sm:pt-10 md:text-4xl lg:text-5xl  xl:text-6xl text-center font-bold animated-block opacity-animation pb-2 mb-2"
            }
          >
            Unveil a World of Choice, Quality, and Convenience - Your Premier
            Online Shopping Haven Awaits!
          </h1>
          <h2
            className={
              "text-stone-400 opacity-block text-sm  sm:text-lg md:text-xl"
            }
          >
            Simple products to make your life happy starting from 1$
          </h2>
          <img
            src={
              "https://i.pinimg.com/originals/a9/4a/ee/a94aee835e16cff4f14c83dac8ffbe10.gif"
            }
            alt={"purple cool landing animation"}
            className={"h-64 opacity-block"}
          />
          <form
            onSubmit={(e) => onEmailSubmit(e)}
            className={
              "flex flex-col lg:flex-row items-center justify-evenly w-[45%] m-auto opacity-block gap-4"
            }
          >
            <Input
              placeholder={"Enter your email"}
              className={"w-full lg:w-[60%] "}
              value={emailValue || ""}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button
              className={
                " bg-gradient w-full lg:w-[50%] hover:shadow-lg hover:shadow-indigo-500/40 transition duration-300 ease-in-out text-sm xs:text-md"
              }
            >
              Start shipping
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
