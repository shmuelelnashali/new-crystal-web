"use client";
import { useEffect } from "react";
import { useAuthContext } from "./hooks/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen"></div>
  );
}
