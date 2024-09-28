import { Briefcase, Clock, Club, Users } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Subscribe } from "@/components/subscribe";

export const CareersScreen = () => {
  return (
    <>
      <Section className=" bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Join Our Team
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Be part of the revolution in social golfing. We&apos;re always
                looking for passionate individuals to join our team.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Club className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              No Current Openings
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              We&apos;re not currently hiring, but we&apos;re always on the
              lookout for talented individuals. Please check back closer to our
              launch in Spring 2025 for exciting opportunities!
            </p>
            <div className="flex justify-center space-x-4">
              {/*  <Button asChild>
                <Link href="#newsletter">Stay Updated</Link>
              </Button> */}
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Collaborative Environment
              </h3>
              <p className="text-gray-500">
                Work with a team of passionate individuals dedicated to
                revolutionizing the golfing experience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Briefcase className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovative Projects</h3>
              <p className="text-gray-500">
                Be at the forefront of golf technology, working on cutting-edge
                features and experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
              <p className="text-gray-500">
                We believe in flexible working hours and promoting a healthy
                work-life balance for our team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <Subscribe />
      </Section>
    </>
  );
};
