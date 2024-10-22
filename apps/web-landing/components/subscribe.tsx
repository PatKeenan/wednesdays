"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

interface SubscribeProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export const Subscribe = ({
  heading = "Get notified when we launch",
  description = "Be the first to know when we launch the Wednesdays Golf App",
  buttonText = "Join Waiting List",
}: SubscribeProps) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (success) {
    console.log("success");
  }
  if (error) {
    console.log("error", error);
  }
  if (isLoading) {
    console.log("isLoading");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse({ email });

    if (!result.success) {
      setError(result.error.message);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, version: "3" }),
      });

      if (!response.ok) {
        setError("Failed to sign up");
        setIsLoading(false);
        setSuccess(false);
        return;
      }

      const data = await response.json();

      if (data && "error" in data) {
        alert(data.error);
        setIsLoading(false);
        setSuccess(false);
        setEmail("");
      } else {
        setEmail("");
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError("Failed to sign up");
      setSuccess(false);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container px-4 md:px-6" id="subscribe">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            {description}
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          {success ? (
            <p className="text-green-500">
              Thank you for joining the waiting list! We&apos;ll notify you when
              the app is ready.
            </p>
          ) : (
            <>
              <form className="flex space-x-2" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : buttonText}
                </Button>
              </form>
              {error && <p className="text-red-500">{error}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
