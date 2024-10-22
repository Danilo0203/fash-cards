"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../../auth";
export async function authenticate(formData: any) {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
      redirectTo: "/explorar",
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "error 500" };
  }
}
