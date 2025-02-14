// pages/auth/sign-up.jsx
"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  console.log("SignUpPage загружен");

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <div>
      <h1>Страница регистрации</h1>
      <SignUp />
    </div>
  );
}