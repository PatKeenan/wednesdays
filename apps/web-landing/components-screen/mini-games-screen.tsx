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
import { Clock, Sparkles, Target, Trophy, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MiniGamesScreen = () => {
  return (
    <>
      <Section className="bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Dynamic Mini-Games
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Transform every hole into an exciting challenge with our
                innovative mini-games.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#games">Explore Games</Link>
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
                Our Dynamic Mini-Games feature turns every round of golf into an
                adventure. Whether you&apos;re a seasoned pro or a weekend
                warrior, these games add a new layer of excitement and challenge
                to your golfing experience.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Golfers enjoying mini-games"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="games" className="bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Our Mini-Games
          </h2>
          <Tabs
            defaultValue="closest-to-pin"
            className="w-full space-y-10 lg:space-y-0"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 gap-y-2">
              <TabsTrigger value="closest-to-pin">Closest to Pin</TabsTrigger>
              <TabsTrigger value="long-drive">Long Drive</TabsTrigger>
              <TabsTrigger value="putting-challenge">
                Putting Challenge
              </TabsTrigger>
              <TabsTrigger value="team-scramble">Team Scramble</TabsTrigger>
            </TabsList>
            <TabsContent value="closest-to-pin">
              <Card>
                <CardHeader>
                  <CardTitle>Closest to Pin</CardTitle>
                  <CardDescription>
                    Test your accuracy on par 3 holes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Compete with your friends to see who can get closest to the
                    pin on par 3 holes. Points are awarded based on proximity to
                    the hole, adding an extra layer of excitement to your short
                    game.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Measures distance to the pin automatically</li>
                    <li>Leaderboard updates in real-time</li>
                    <li>Bonus points for hole-in-one</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="long-drive">
              <Card>
                <CardHeader>
                  <CardTitle>Long Drive</CardTitle>
                  <CardDescription>
                    Unleash your power on designated holes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    On selected par 4 and par 5 holes, compete to see who can
                    hit the longest drive. Our app accurately measures your
                    drive distance and compares it with your playing partners.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Automatic distance calculation</li>
                    <li>Factors in elevation and wind conditions</li>
                    <li>Weekly and monthly leaderboards</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="putting-challenge">
              <Card>
                <CardHeader>
                  <CardTitle>Putting Challenge</CardTitle>
                  <CardDescription>
                    Master the greens with precision
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Put your putting skills to the test with our putting
                    challenge. Earn points based on the length and difficulty of
                    your successful putts.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tracks putt length and break</li>
                    <li>Bonus points for long putts and one-putts</li>
                    <li>Putting stats and improvement tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team-scramble">
              <Card>
                <CardHeader>
                  <CardTitle>Team Scramble</CardTitle>
                  <CardDescription>
                    Collaborate for the best score
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Play as a team in this exciting scramble format. Each player
                    tees off, then the team chooses the best shot to play from,
                    continuing this process until the ball is holed.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Easily track team scores and best shots</li>
                    <li>Automatic handicap adjustment for fair play</li>
                    <li>
                      Ideal for corporate events and friendly competitions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center mt-8">
            <Button asChild variant="link">
              <Link href="/blog/fun-golf-games">View All Games</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Why Players Love Our Mini-Games
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Improved Skills</h3>
              <p className="text-gray-500">
                Focus on specific aspects of your game with targeted mini-games,
                helping you improve your overall performance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trophy className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Friendly Competition</h3>
              <p className="text-gray-500">
                Engage in fun, low-pressure competitions with friends and other
                golfers, adding excitement to every round.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Interaction</h3>
              <p className="text-gray-500">
                Connect with other golfers through shared challenges and
                leaderboards, expanding your golfing network.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Enhanced Engagement</h3>
              <p className="text-gray-500">
                Stay focused and engaged throughout your entire round with
                exciting challenges on every hole.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Time-Efficient Practice
              </h3>
              <p className="text-gray-500">
                Make the most of your time on the course by combining practice
                with play through our targeted mini-games.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fresh Experience</h3>
              <p className="text-gray-500">
                Enjoy a new and exciting golfing experience every time you play,
                even on familiar courses.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <Subscribe
          heading="Ready to Play?"
          description="Join the waiting list and be among the first to experience our mini-games!"
          buttonText="Join Waiting List"
        />
      </Section>
    </>
  );
};
