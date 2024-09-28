"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import grass from "@/public/grass.jpg";
import { Section } from "./Section";

export const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
    // Show a success message (you might want to use a toast notification here)
    setSuccess("Thanks for signing up! We'll keep you updated on our launch.");
    setError("");
    setLoading(false);
  };
  return (
    <Section
      id="signup"
      className=" text-white relative"
      style={{
        backgroundImage: `url(${grass.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200% 200%",
      }}
    >
      <div className="absolute inset-0 bg-green-950 opacity-50" />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Be the First to Experience Wednesdays
          </h2>
          <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join our waiting list now and be among the first to revolutionize
            your golf game when we launch in Spring 2025. Earn badges, compete
            with friends, and elevate your golfing experience!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-2 w-full max-w-md"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white text-green-600"
            />
            <Button
              type="submit"
              className="w-full bg-white text-green-600 hover:bg-green-100"
            >
              Join Waiting List
            </Button>
          </form>
          <p className="text-sm text-green-100">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </Section>
  );
};
