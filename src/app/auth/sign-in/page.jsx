// pages/auth/sign-in.jsx

"use client";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  console.log("SignInPage загружен");

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <div>
      <h1>Sign-in page</h1>
      <SignIn routing="hash" /> {/* <-- Добавлен routing="hash" */}
    </div>
  );
}