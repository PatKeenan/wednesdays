"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Trophy, Cpu, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
    // Show a success message (you might want to use a toast notification here)
    alert("Thanks for signing up! We'll keep you updated on our launch.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-green-600">⛳</span>
          <span className="ml-2 text-2xl font-bold text-gray-900">
            Wednesdays
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Tee Up Your Social Golfing Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Wednesdays transforms your casual golf outings into
                  unforgettable social experiences. Coming Spring 2024!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Get Notified</Button>
                </form>
                <p className="text-xs text-gray-500">
                  Be the first to know when we launch. No spam, we promise!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              A Glimpse of Wednesdays
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/svgs/placeholder.svg"
                  alt="Wednesdays App Dashboard"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Personalized Dashboard
                  </h3>
                  <p className="text-gray-700">
                    Track your progress and upcoming games at a glance.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/svgs/placeholder.svg"
                  alt="Wednesdays Leaderboard"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Dynamic Leaderboards
                  </h3>
                  <p className="text-gray-700">
                    Compete with friends and track your rankings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features That Set Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Exclusive Golf Clubs</h3>
                <p className="text-gray-600">
                  Create or join exclusive golf clubs and connect with fellow
                  enthusiasts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Trophy className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Dynamic Leaderboards</h3>
                <p className="text-gray-600">
                  Compete on leaderboards and track your progress over time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Caddy</h3>
                <p className="text-gray-600">
                  Receive expert advice from our AI caddy to improve your game.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">
                  Organize golf outings effortlessly with our intuitive
                  interface.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Score Tracking</h3>
                <p className="text-gray-600">
                  Track rounds and scores with ease, monitoring your
                  improvement.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Trophy className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Game Modes</h3>
                <p className="text-gray-600">
                  Spice up your games with customizable and fun game modes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="signup"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Wednesdays Community
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be among the first to experience the future of social golfing.
                  Sign up now for exclusive updates and early access!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-2"
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Sign Up for Updates</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 Wednesdays Golf App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
