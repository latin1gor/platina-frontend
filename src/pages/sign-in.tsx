import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "@/types/validation.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { routes } from "@/router/routes.ts";
import { clearError, login } from "@/store/userSlice.ts";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.tsx";
import { FormError } from "@/components/auth/form-error.tsx";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(clearError());
  }, []);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const res = await dispatch(login(values));
    if (res.payload.token) {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className={"flex justify-between h-screen w-full max-w-screen-2xl m-auto"}
    >
      <div className={"w-0 md:w-1/2 m-4  mb-4"}>
        <img
          className={"w-0 md:w-[100%] md:h-[100%] rounded-2xl bg-cover"}
          src={"./sign-in-bg.webp"}
          alt={"Purple linear modern image"}
        />
      </div>
      <div
        className={
          "flex flex-1 flex-col w-full md:w-1/2 h-full items-center p-6 md:p-14 xl:p-32 rounded-2xl drop-shadow-2xl"
        }
      >
        <div className={"w-full flex flex-col justify-around h-full"}>
          <div className={"flex justify-center items-center pr-6"}>
            <h1 className={"text-5xl font-black text-center"}>Sign in</h1>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={"space-y-4"}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete={"off"}
                        placeholder={"Enter your email"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete={"off"}
                        placeholder={"Enter your password"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <FormError message={error} />}
              <div>
                <Button type={"submit"} className={"w-full mt-10"}>
                  Sign in
                </Button>
                <div className={"flex justify-center items-center"}>
                  <span className={"text-gray-400 font-normal text-sm"}>
                    Don't have an account ?
                  </span>
                  <Button
                    className={"text-gray-400 h-5 p-2 m-2"}
                    variant={"link"}
                    type={"button"}
                  >
                    <Link to={routes.REGISTER}>Register</Link>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
