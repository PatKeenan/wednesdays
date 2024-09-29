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
import { BarChart, Clock, Globe, Trophy, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LeaderboardsScreen = () => {
  return (
    <>
      <Section className="bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Real-Time Leaderboards
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Experience the thrill of live competition with our dynamic,
                real-time leaderboards.
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
                Elevate Your Golf Experience
              </h2>
              <p className="text-gray-500 md:text-xl">
                Our Real-Time Leaderboards feature transforms every round into
                an exciting competition. Whether you&apos;re playing with
                friends or participating in a tournament, stay updated on your
                standing as it happens.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Real-time leaderboard in action"
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
            Leaderboard Features
          </h2>
          <Tabs
            defaultValue="live-scoring"
            className="w-full space-y-10 lg:space-y-0"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 gap-y-2">
              <TabsTrigger value="live-scoring">Live Scoring</TabsTrigger>
              <TabsTrigger value="multi-course">
                Multi-Course Support
              </TabsTrigger>
              <TabsTrigger value="custom-tournaments">
                Custom Tournaments
              </TabsTrigger>
              <TabsTrigger value="stats-insights">Stats & Insights</TabsTrigger>
            </TabsList>
            <TabsContent value="live-scoring">
              <Card>
                <CardHeader>
                  <CardTitle>Live Scoring</CardTitle>
                  <CardDescription>
                    Real-time updates for every player
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Experience the excitement of live scoring as it happens. Our
                    leaderboards update in real-time, ensuring you&apos;re
                    always up to date with the latest standings.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Instant score updates</li>
                    <li>Live position changes</li>
                    <li>Hole-by-hole breakdown</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="multi-course">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Course Support</CardTitle>
                  <CardDescription>
                    Compare scores across different courses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Our leaderboards support multi-course tournaments, allowing
                    you to compare scores fairly across different layouts and
                    difficulties.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Course-specific leaderboards</li>
                    <li>Handicap-adjusted scoring</li>
                    <li>Cross-course comparisons</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="custom-tournaments">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Tournaments</CardTitle>
                  <CardDescription>
                    Create and manage your own competitions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Easily set up and manage custom tournaments for your
                    friends, club, or organization. Our flexible system adapts
                    to various formats and scoring methods.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Multiple tournament formats</li>
                    <li>Customizable scoring rules</li>
                    <li>Private and public tournament options</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats-insights">
              <Card>
                <CardHeader>
                  <CardTitle>Stats & Insights</CardTitle>
                  <CardDescription>
                    Dive deep into performance analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Go beyond just scores. Our leaderboards provide rich
                    statistics and insights to help you understand your
                    performance and improve your game.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Detailed performance metrics</li>
                    <li>Historical trend analysis</li>
                    <li>Comparative player statistics</li>
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
            Why Players Love Our Leaderboards
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Trophy className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive Spirit</h3>
              <p className="text-gray-500">
                Foster friendly competition and push yourself to improve with
                real-time rankings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Engagement</h3>
              <p className="text-gray-500">
                Connect with friends and fellow golfers through shared
                leaderboards and tournaments.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Gratification</h3>
              <p className="text-gray-500">
                See your efforts reflected immediately with live score updates
                and position changes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
              <p className="text-gray-500">
                Monitor your progress over time with detailed statistics and
                historical data.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-gray-500">
                Participate in worldwide tournaments and see how you stack up
                against golfers from around the globe.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
              <p className="text-gray-500">
                Eliminate manual scorekeeping and enjoy more time focusing on
                your game.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className=" bg-green-100">
        <Subscribe
          heading="Ready to Top the Leaderboards?"
          description="Join the waiting list and be among the first to compete on our Real-Time Leaderboards!"
          buttonText="Join Waiting List"
        />
      </Section>
    </>
  );
};
