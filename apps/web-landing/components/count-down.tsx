"use client";
import React from "react";
import { Button } from "./ui/button";

export const CountDown = () => {
  const launchDate = new Date("2025-04-20T00:00:00");
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const difference = +launchDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return (
    <div className="container px-4 md:px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
        Launching Spring 2025
      </h2>
      <div className="flex justify-center space-x-4 text-2xl font-bold mb-8">
        <div>{timeLeft.days}d</div>
        <div>{timeLeft.hours}h</div>
        <div>{timeLeft.minutes}m</div>
        <div>{timeLeft.seconds}s</div>
      </div>
      <p className="text-xl mb-8">
        Be among the first to experience the future of social golfing.
      </p>
      <Button size="lg">Join the Exclusive Waiting List</Button>
    </div>
  );
};
