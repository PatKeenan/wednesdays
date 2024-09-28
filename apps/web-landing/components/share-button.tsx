"use client";
import React from "react";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

export const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out GolfBuddy!",
        text: "I'm excited for this new golf app coming in 2025. Join the waiting list!",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Share this page: " + window.location.href);
    }
  };
  return (
    <Button variant="outline" onClick={handleShare}>
      <Share2 className="mr-2 h-4 w-4" />
      Share with Friends
    </Button>
  );
};
