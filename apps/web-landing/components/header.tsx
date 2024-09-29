"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import placeHolder from "@/public/placeholder.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={placeHolder}
            alt="Wednesdays Golf App"
            width={32}
            height={32}
          />
          <span className="font-bold sm:inline-block">Wednesdays Golf</span>
        </Link>
        <nav className="ml-auto items-center space-x-4 sm:flex hidden">
          <Link
            href="/#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Blog
          </Link>
          <Button asChild>
            <Link href="#subscribe">Join Waiting List</Link>
          </Button>
        </nav>
        <div className="sm:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/#features"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Features
                </Link>
                <Link
                  href="/#faq"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  FAQ
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Blog
                </Link>
                <Button asChild>
                  <Link href="#subscribe">Join Waiting List</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
