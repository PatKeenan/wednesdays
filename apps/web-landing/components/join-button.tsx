"use client";

import React from "react";
import { Button } from "./ui/button";

export const JoinButton = ({
  text = "Join Waiting List",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <Button
      onClick={() =>
        document
          .getElementById("signup")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className={className}
    >
      {text}
    </Button>
  );
};
