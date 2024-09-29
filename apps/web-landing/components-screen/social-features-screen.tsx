/**
 * This Social Screen is for the features and is different than the core pillar page
 */
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
import {
  Calendar,
  MapPin,
  MessageCircle,
  Share2,
  Trophy,
  Users,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SocialFeaturesScreen = () => {
  return (
    <>
      <Head>
        <title>
          Wednesdays Golf App: Connect and Compete with Social Golf Features
        </title>
        <meta
          name="description"
          content="Connect with fellow golfers, plan your next round, and take your golfing experience to the next level with Wednesdays Golf App."
        />
      </Head>
      <Section className="bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Connect with Fellow Golfers
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Expand your golfing circle and enhance your experience with our
                social networking features.
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
                Golf&apos;s Social Revolution
              </h2>
              <p className="text-gray-500 md:text-xl">
                Our Social Networking feature transforms your golfing experience
                by connecting you with a vibrant community of fellow
                enthusiasts. Share your achievements, organize games, and make
                lasting friendships on and off the course.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Golfers connecting through the app"
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
            Social Features
          </h2>
          <Tabs defaultValue="profile" className="w-full ">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 gap-y-2">
              <TabsTrigger value="profile">Golfer Profiles</TabsTrigger>
              <TabsTrigger value="groups">Golf Groups</TabsTrigger>
              <TabsTrigger value="events">Event Planning</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Golfer Profiles</CardTitle>
                  <CardDescription>
                    Showcase your golfing journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Create a personalized profile that highlights your golfing
                    achievements, favorite courses, and playing style. Connect
                    with other golfers and expand your network.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Customizable profile with stats and achievements</li>
                    <li>Friend connections and messaging</li>
                    <li>Activity feed to share your golfing moments</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="groups">
              <Card>
                <CardHeader>
                  <CardTitle>Golf Groups</CardTitle>
                  <CardDescription>
                    Join or create golf communities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Find your golfing tribe by joining existing groups or
                    creating your own. Whether you&apos;re looking for
                    competitive players or casual partners, there&apos;s a group
                    for everyone.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Public and private group options</li>
                    <li>Group leaderboards and challenges</li>
                    <li>Discussion forums for tips and advice</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle>Event Planning</CardTitle>
                  <CardDescription>
                    Organize and join golf outings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Easily plan and manage golf events with friends or group
                    members. From casual rounds to tournaments, our event
                    planning tools make organization a breeze.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Intuitive event creation and management</li>
                    <li>RSVP and participant tracking</li>
                    <li>Integrated scoring and results sharing</li>
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
            Why Golfers Love Our Social Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expand Your Network</h3>
              <p className="text-gray-500">
                Connect with golfers of all skill levels and make new friends
                who share your passion.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MessageCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-500">
                Get advice, share tips, and engage in discussions with a
                supportive golfing community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Event Planning</h3>
              <p className="text-gray-500">
                Organize games and tournaments effortlessly, ensuring you always
                have playing partners.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Discover New Courses</h3>
              <p className="text-gray-500">
                Explore new golf courses through recommendations and experiences
                shared by the community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Share2 className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Share Achievements</h3>
              <p className="text-gray-500">
                Celebrate your golfing milestones and progress with friends and
                fellow enthusiasts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trophy className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Friendly Competition</h3>
              <p className="text-gray-500">
                Engage in friendly rivalries and challenges to push your golfing
                skills to new heights.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-green-100">
        <Subscribe
          heading="Ready to Join the Community?"
          description="Connect with fellow golfers, plan your next round, and take your golfing experience to the next level with Wednesdays Golf App."
          buttonText="Join Waiting List"
        />
      </Section>
    </>
  );
};
