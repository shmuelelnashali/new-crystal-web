"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const router = useRouter();
  const { user, login } = useAuth({ middleware: "guest" });
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    if (user) {
      router.push("/calender");
      console.log(user);
    } else {
      login(setErrors, { employee_number: "2222222" });
    }
  }, [user, login]);
  return (
    <div className="login_page h-full w-full flex justify-center items-center z-50 ">
      {" "}
      test
    </div>
  );
}
