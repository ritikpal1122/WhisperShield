import Link from "next/link";

import {
  ArrowRight,
  Lock,
  Zap,
  MessageCircle,
  Shield,
  Users,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-sky-500/20">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <AnimatedSection className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Key Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Military-Grade Encryption",
                description:
                  "Your identity is protected with state-of-the-art encryption protocols",
                icon: <Lock className="h-6 w-6 text-sky-400" />,
              },
              {
                title: "Real-time Processing",
                description:
                  "Instant verification and secure routing of all reports",
                icon: <Zap className="h-6 w-6 text-sky-400" />,
              },
              {
                title: "Secure Communication",
                description: "Two-way anonymous channel with law enforcement",
                icon: <MessageCircle className="h-6 w-6 text-sky-400" />,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-8 transition-all hover:bg-zinc-700/80"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
     
      {/* Stats Section */}
      <AnimatedSection className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-zinc-900 p-8">
            <div className="grid gap-y-8 sm:grid-cols-3">
              {[
                { value: "100K+", label: "Reports Filed" },
                { value: "100%", label: "Anonymity Rate" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="px-6 py-20 ">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Submit Report",
                description:
                  "Anonymously file your incident report through our secure platform.",
              },
              {
                step: "2",
                title: "Verification",
                description:
                  "Our system verifies and processes your report in real-time.",
              },
              {
                step: "3",
                title: "Action Taken",
                description:
                  "Law enforcement receives the report and takes appropriate action.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="px-6 py-20 bg-[#060c16]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Complete Anonymity",
                description:
                  "Your identity is fully protected, allowing you to report without fear.",
                icon: <Shield className="h-8 w-8 text-sky-400" />,
              },
              {
                title: "Community Impact",
                description:
                  "Your reports contribute to a safer environment for everyone.",
                icon: <Users className="h-8 w-8 text-sky-400" />,
              },
              {
                title: "Data-Driven Action",
                description:
                  "Your reports help authorities identify patterns and take proactive measures.",
                icon: <BarChart className="h-8 w-8 text-sky-400" />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="px-6 py-20 bg-black ">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <TestimonialCard
              quote="This platform gave me the courage to report a serious issue without fear of retaliation. Thank you for providing this service!"
              author="Anonymous User"
            />
            <TestimonialCard
              quote="The ease of use and the knowledge that my identity is protected made all the difference. I feel like I've made a real impact."
              author="Community Member"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Trust Badge */}
      <AnimatedSection className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-5xl flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Trusted by Law Enforcement Nationwide
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
