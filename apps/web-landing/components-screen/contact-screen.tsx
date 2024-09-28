"use client";
import React from "react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Subscribe } from "@/components/subscribe";

export const ContactScreen = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    // For example, sending the data to an API
    console.log("Form submitted");
  };
  return (
    <>
      <Section className=" bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We're here to help. Reach out to us with any questions or
                feedback about Wednesdays Golf App.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-500">
                  Have a question or want to learn more about Wednesdays Golf
                  App? Fill out the form and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-green-500" />
                  <span>123 Golf Lane, Fairway City, GC 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-green-500" />
                  <span>contact@wednesdaysgolf.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Twitter</span>
                    <Twitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-green-100">
        <Subscribe />
      </Section>
    </>
  );
};
