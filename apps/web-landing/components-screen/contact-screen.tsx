"use client";
import React from "react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Subscribe } from "@/components/subscribe";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: z.string(),
  message: z.string(),
});

export const ContactScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const isValid = emailSchema.safeParse(data);
    const validData = isValid.success ? isValid.data : null;

    if (!isValid.success) {
      setError(isValid.error.errors[0].message);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...validData }),
      });
      if (!response.ok) {
        setError("Failed to send message");
        setIsLoading(false);
        setSuccess(false);
        return;
      }
      const data = await response.json();

      if (data && "error" in data) {
        alert(data.error);
        setIsLoading(false);
        setSuccess(false);
      } else {
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to send message");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
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
                We&apos;re here to help. Reach out to us with any questions or
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
                  App? Fill out the form and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
              {/* <div className="space-y-4">
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
              </div> */}
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
              {success ? (
                <div>
                  <h2>Message sent successfully!</h2>
                  <p>We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
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
                      name="email"
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
                      name="subject"
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
                      name="message"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Subscribe />
      </Section>
    </>
  );
};
