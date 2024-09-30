import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Globe, Smile, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import alexFoxHeadshot from "@/public/alex-fox-headshot.jpeg";
import patKeenanHeadshot from "@/public/pat-keenan-headshot.jpeg";

export const AboutUsScreen = () => {
  return (
    <>
      <Section className=" bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Wednesdays Golf
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Revolutionizing the golfing experience through technology and
                social connectivity.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="text-gray-500 md:text-xl">
                Founded in 2024, Wednesdays Golf App was born from a passion for
                golf and a vision to make the sport more accessible and
                enjoyable for players of all levels. Our founders, avid golfers
                themselves, recognized the need for a modern, tech-driven
                approach to enhance the golfing experience.
              </p>
              <p className="text-gray-500 md:text-xl">
                What started as a simple idea to connect golfers has grown into
                a comprehensive platform that&apos;s changing the way people
                approach the game. From organizing games to improving skills and
                fostering a vibrant community, Wednesdays Golf App is at the
                forefront of golf&apos;s digital revolution.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/journey.jpg"
                alt="Wednesdays Golf App journey"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Our Mission and Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Flag className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To make golf more accessible, enjoyable, and connected for
                  players around the world through innovative technology and
                  community-building.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We believe in the power of connection and strive to create a
                  welcoming, inclusive community for golfers of all backgrounds
                  and skill levels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We&apos;re committed to pushing the boundaries of golf
                  technology, constantly seeking new ways to enhance the golfing
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We aim to empower golfers with tools and insights that help
                  them improve their game and enjoy the sport to its fullest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Smile className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  At our core, we believe golf should be fun. We&apos;re
                  dedicated to bringing more joy and excitement to every round.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We&apos;re committed to promoting sustainable practices in
                  golf, working towards a greener future for the sport we love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Our Team
          </h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center text-center md:col-start-2 md:col-end-3">
              <Image
                src={alexFoxHeadshot}
                alt="Alex Fox"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Alex Fox</h3>
              <p className="text-gray-500">Co-Founder</p>
            </div>
            <div className="flex flex-col items-center text-center md:col-start-3 md:col-end-4">
              <Image
                src={patKeenanHeadshot}
                alt="Pat Keenan"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Pat Keenan</h3>
              <p className="text-gray-500">Co-Founder</p>
            </div>
            {/* <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Emily Brown"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Emily Brown</h3>
              <p className="text-gray-500">Head of Product</p>
            </div> */}
          </div>
        </div>
      </Section>

      <Section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Join Our Journey
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mb-8">
            We&apos;re always looking for passionate individuals to join our
            team and help shape the future of golf.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
