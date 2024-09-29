import { Section } from "@/components/section";
import { Subscribe } from "@/components/subscribe";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Search, Smartphone, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TeeTimeBookingScreen = () => {
  return (
    <>
      <Section className="bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Effortless Tee Time Booking
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Secure your perfect tee time with ease using our advanced
                booking system.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Round in Seconds
              </h2>
              <p className="text-gray-500 md:text-xl">
                Our Tee Time Booking feature revolutionizes how you schedule
                your golf games. With an intuitive interface and powerful search
                capabilities, you can find and book the perfect tee time at your
                favorite courses with just a few taps.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Tee Time Booking interface"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="features" className="bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Booking Features
          </h2>
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 gap-y-2">
              <TabsTrigger value="search">Smart Search</TabsTrigger>
              <TabsTrigger value="instant">Instant Booking</TabsTrigger>
              <TabsTrigger value="group">Group Booking</TabsTrigger>
            </TabsList>
            <TabsContent value="search">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Search</CardTitle>
                  <CardDescription>
                    Find the perfect tee time effortlessly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Our advanced search algorithm helps you find the ideal tee
                    time based on your preferences, course ratings, and
                    availability.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Filter by date, time, course, and player count</li>
                    <li>View real-time availability across multiple courses</li>
                    <li>Sort results by price, rating, or distance</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="instant">
              <Card>
                <CardHeader>
                  <CardTitle>Instant Booking</CardTitle>
                  <CardDescription>
                    Secure your tee time in seconds
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    With our instant booking feature, you can reserve your tee
                    time immediately without waiting for confirmation from the
                    course.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>One-click booking for registered users</li>
                    <li>Secure payment processing</li>
                    <li>Instant confirmation and digital receipt</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="group">
              <Card>
                <CardHeader>
                  <CardTitle>Group Booking</CardTitle>
                  <CardDescription>
                    Organize games with friends easily
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Coordinate tee times for your entire group with our
                    streamlined group booking process.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Invite friends to join your tee time</li>
                    <li>Split payments among group members</li>
                    <li>Manage RSVPs and last-minute changes</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Why Golfers Love Our Booking System
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
              <p className="text-gray-500">
                Book your tee times quickly and efficiently, saving you valuable
                time for what matters most - your golf game.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Search className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Course Discovery</h3>
              <p className="text-gray-500">
                Explore new courses and find hidden gems with our comprehensive
                course database and search features.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Simplified Group Play</h3>
              <p className="text-gray-500">
                Coordinate games with friends effortlessly using our group
                booking and invitation system.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Smartphone className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Convenience</h3>
              <p className="text-gray-500">
                Book tee times on-the-go with our mobile-friendly interface,
                perfect for last-minute plans.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Planning</h3>
              <p className="text-gray-500">
                Secure prime tee times in advance with our early booking options
                and notifications for new availability.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Confirmation</h3>
              <p className="text-gray-500">
                Receive immediate booking confirmations, giving you peace of
                mind and allowing you to plan your day with confidence.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-green-100">
        <Subscribe
          heading="Ready to Simplify Your Tee Time Bookings?"
          description="Join Wednesdays Golf App today and experience the easiest way to book your next round of golf."
          buttonText="Join Waiting List"
        />
      </Section>
    </>
  );
};
