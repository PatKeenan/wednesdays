import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/section";
import { Clock, Users, Trophy, Zap } from "lucide-react";

import placeholderSvg from "@/public/placeholder.svg";
import { CountDown } from "@/components/count-down";
import { Subscribe } from "@/components/subscribe";

export function LandingScreen() {
  return (
    <>
      <Section className="bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Revolutionize Your Golf Game with Wednesdays
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                The Social Golf App That Turns Every Round into an Adventure
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">Join the Waiting List</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Zap className="h-10 w-10 text-green-500" />
              <h3 className="text-xl font-bold">
                Play Exciting Mini-Games on Every Hole
              </h3>
              <p className="text-gray-500">
                Transform your golf experience with fun challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Trophy className="h-10 w-10 text-green-500" />
              <h3 className="text-xl font-bold">
                Compete with Friends in Real-Time
              </h3>
              <p className="text-gray-500">
                Engage in friendly competition, no matter where you play.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Users className="h-10 w-10 text-green-500" />
              <h3 className="text-xl font-bold">
                Discover New Ways to Enjoy Golf
              </h3>
              <p className="text-gray-500">
                Explore innovative game modes and social features.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                App Preview
              </h2>
              <p className="text-gray-500 md:text-xl">
                Get a sneak peek at the Wednesdays Golf App interface.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={placeholderSvg}
                alt="Wednesdays Golf App Preview"
                width={300}
                height={600}
                className="rounded-xl shadow-lg"
                style={{
                  aspectRatio: 300 / 600,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="features">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Core Features
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-start space-x-4">
              <Zap className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Dynamic Mini-Games</h3>
                <p className="text-gray-500">
                  Enjoy unique challenges on every hole, keeping your rounds
                  fresh and exciting.
                </p>
                <Link
                  href="/features/mini-games"
                  className="text-green-500 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Trophy className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Real-Time Leaderboards</h3>
                <p className="text-gray-500">
                  Compete with friends and track your progress with live,
                  updating leaderboards.
                </p>
                <Link
                  href="/features/leaderboards"
                  className="text-green-500 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Social Networking</h3>
                <p className="text-gray-500">
                  Connect with other golfers, join groups, and organize events
                  easily.
                </p>
                <Link
                  href="/features/social"
                  className="text-green-500 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Tee Time Booking</h3>
                <p className="text-gray-500">
                  Seamlessly book tee times at participating courses directly
                  through the app.
                </p>
                <Link
                  href="/features/club-houses"
                  className="text-green-500 hover:underline mt-2 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-green-100">
        å <CountDown />
      </Section>
      <Section id="faq">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When will the Wednesdays Golf App be available?
              </AccordionTrigger>
              <AccordionContent>
                The Wednesdays Golf App is scheduled to launch in Spring 2025.
                Join our waiting list to be notified as soon as it&apos;s
                available!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is the app free to use?</AccordionTrigger>
              <AccordionContent>
                The basic version of the app will be free to download and use.
                We&apos;ll also offer a premium subscription with additional
                features and benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I use the app at any golf course?
              </AccordionTrigger>
              <AccordionContent>
                Yes! The Wednesdays Golf App is designed to work at any golf
                course. Some features, like tee time booking, may be limited to
                participating courses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What devices will the app be available on?
              </AccordionTrigger>
              <AccordionContent>
                We&apos;re developing the app for both iOS and Android devices.
                It will be available on smartphones and tablets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      <Section id="blog" className="bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Latest from Our Blog
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1595789927828-b56b8a608bc0?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fun Golf Games"
                width={400}
                height={225}
                className="rounded-lg aspect-video"
              />
              <h3 className="text-xl font-bold">
                5 Fun Mini-Games to Spice Up Your Golf Round
              </h3>
              <p className="text-gray-500">
                Discover exciting new ways to enjoy your time on the course.
              </p>
              <Link
                href="/blog/fun-golf-games"
                className="text-green-500 hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1561251224-e393160cd769?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social Golfing"
                width={400}
                height={225}
                className="rounded-lg aspect-video object-cover"
              />
              <h3 className="text-xl font-bold">
                The Rise of Social Golfing: Connecting Through the Game
              </h3>
              <p className="text-gray-500">
                How technology is bringing golfers together like never before.
              </p>
              <Link
                href="/blog/social-golfing"
                className="text-green-500 hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1640907537101-36b3dec4db41?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Golf Technology"
                width={400}
                height={225}
                className="rounded-lg aspect-video object-cover"
              />
              <h3 className="text-xl font-bold">
                Golf Tech Trends: What to Expect in 2025
              </h3>
              <p className="text-gray-500">
                A look at the innovative technologies shaping the future of
                golf.
              </p>
              <Link
                href="/blog/golf-tech-trends"
                className="text-green-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Subscribe />
      </Section>
    </>
  );
}
