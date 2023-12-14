"use client";

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { NavItem } from "~/components/NavItem";

import Person from "../icons/person.svg";
import Work from "../icons/work.svg";
import ArrowUp from "../icons/arrowUp.svg";

import Github from "../icons/github.svg";
import Linkedin from "../icons/linkedin.svg";
import Email from "../icons/email.svg";
import Resume from "../icons/resume.svg";
import { LinkItem } from "~/components/LinkItem";

const listItemClass =
  "cursor-pointer transition-all hover:pl-1 hover:text-accent";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    topRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative font-dm-sans">
      <div className="fixed bottom-0 ml-20 flex flex-col items-center gap-y-5">
        <LinkItem
          label="Github"
          icon={<Github className="h-[20px] w-[20px]" />}
          linkHref="https://github.com/mjBerhe"
        />
        <LinkItem
          label="Linkedin"
          icon={<Linkedin className="h-[20px] w-[20px]" />}
          linkHref="https://www.linkedin.com/in/matthew-berhe-a632b017a/"
        />
        <LinkItem
          label="Email"
          icon={<Email className="h-[20px] w-[18px]" />}
          linkHref="mailto:matthew.berhe1@gmail.com"
        />
        <LinkItem
          label="Resume"
          icon={<Resume className="h-[18px] w-[20px]" />}
          linkHref="/Resume 2023.pdf"
        />
        <div className="h-[80px] w-[2px] bg-accent "></div>
      </div>

      <div className="fixed right-0 top-0 mr-20 flex flex-col items-center gap-y-5">
        <div className="h-[80px] w-[2px] bg-accent "></div>
        <NavItem
          label="About"
          handleClick={scrollToAbout}
          icon={<Person className="h-[24px] w-[24px]" />}
        />
        <NavItem
          label="Works"
          handleClick={scrollToWorks}
          icon={<Work className="h-[24px] w-[18px]" />}
        />
        <NavItem
          label="To Top"
          handleClick={scrollToTop}
          icon={<ArrowUp className="h-[20px] w-[18px]" />}
        />
      </div>

      <div className="mx-auto flex h-full max-w-5xl flex-col" ref={topRef}>
        <div className="flex min-h-screen items-center justify-start">
          <div className="flex w-full flex-col gap-y-3">
            <span className="text-lg text-accent">Appreciate the visit</span>
            <span className="text-6xl font-bold tracking-tighter">
              Matthew Berhe
            </span>
            <span className="text-6xl font-bold tracking-tighter text-slate-300">
              Building tools for the web.
            </span>
            <div className="ml-1 max-w-[550px] border-l-2 border-accent pl-4">
              <span className=" text-slate-300">
                I&apos;m a software engineer based in Toronto who enjoys
                creating tools to make our lives just a little bit simpler.
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col" ref={aboutRef}>
          <div className="mx-[96px] mt-24 flex max-w-2xl flex-col">
            <span className="text-4xl font-bold tracking-tighter text-slate-300">
              Who am I?
            </span>
            <div className="mt-4 w-full">
              It all started when I was trying to visualize some tedious
              calculations for my favourite video game. I decided to teach
              myself how to program so I could build this tool. Ever since then,
              I&apos;ve been creating web apps to simplify the hard things in
              life, while making an enjoyable experience for the user.
            </div>
            <span className="mt-2 text-lg text-accent">
              Technologies I&apos;m currently enjoying
            </span>
            <div className="ml-1 mr-auto mt-2 grid grid-cols-2 gap-x-4 border-l-2 border-accent pl-4">
              <div className="col-span-1 flex w-full min-w-[100px] flex-col gap-y-1">
                <span className={classNames(listItemClass, "")}>
                  Typescript
                </span>
                <span className={listItemClass}>React</span>
                <span className={listItemClass}>Tailwind</span>
                <span className={listItemClass}>Next.js</span>
              </div>
              <div className="col-span-1 flex flex-col gap-y-1">
                <span className={classNames(listItemClass, "")}>TRPC</span>
                <span className={listItemClass}>Postgres</span>
                <span className={listItemClass}>Sass</span>
                <span className={listItemClass}>Vercel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-72 flex w-full flex-col items-end" ref={worksRef}>
          <div className="mx-[86px] flex max-w-3xl flex-col items-end">
            <span className="w-[500px] text-4xl font-bold tracking-tighter text-slate-300">
              Where I&apos;ve Worked
            </span>

            <div className="mt-4 flex w-full">
              <div className="flex w-[130px] justify-center pt-[14px]">
                <span className="text-sm font-bold text-slate-400">
                  2022 - 2023
                </span>
              </div>
              <a
                className={classNames(
                  "flex w-[500px] flex-col border-l-2 py-2 pl-4 transition-all",
                  "hover:cursor-pointer hover:rounded-r-lg hover:border-accent hover:bg-accent/20",
                )}
                href="https://u.gg/"
                target="_blank"
              >
                <span className="flex h-[30px] items-center text-accent">
                  Full Stack Developer{" "}
                  <span className="text-slate-300">&nbsp;@&nbsp;</span> U.GG
                </span>
                <span className="mt-2">
                  Created and deployed several new features from start to finish
                  using elixir, graphQL and react to over 30 million monhtly
                  users on both U.GG and U.GG/val. Implemented and tested
                  hundreds of responsive, type-safe components using typescript,
                  react, and tailwind.
                </span>
              </a>
            </div>

            <div className="flex w-full gap-x-0">
              <div className="flex w-[130px] justify-center pt-[14px]">
                <span className="text-sm font-bold text-slate-400">
                  2021 - 2022
                </span>
              </div>
              <a
                className={classNames(
                  "flex w-[500px] flex-col border-l-2 py-2 pl-4 transition-all",
                  "hover:cursor-pointer hover:rounded-r-lg hover:border-accent hover:bg-accent/20",
                )}
                href="https://renotag.com/"
                target="_blank"
              >
                <span className="flex h-[30px] items-center text-accent">
                  Full Stack Developer
                  <span className="text-slate-300">&nbsp;@&nbsp;</span> Renotag
                </span>
                <span className="mt-2">
                  Created and worked on severl RESTful API&apos;s to serve
                  hundereds of daily requests. Designed and implemented several
                  intuitive sign-in flows to aid users when making an account.
                  Improved database query speeds by introducing new technologies
                  with prisma and postgres.
                </span>
              </a>
            </div>

            <div className="flex w-full gap-x-0">
              <div className="flex w-[130px] justify-center pt-[14px]">
                <span className="text-sm font-bold text-slate-400">
                  2022 - PRESENT
                </span>
              </div>
              <a
                className={classNames(
                  "flex w-[500px] flex-col border-l-2 py-2 pl-4 transition-all",
                  "hover:cursor-pointer hover:rounded-r-lg hover:border-accent hover:bg-accent/20",
                )}
                href="https://iterate.gg/"
                target="_blank"
              >
                <span className="flex h-[30px] items-center text-accent">
                  Software Engineer{" "}
                  <span className="text-slate-300">&nbsp;@&nbsp;</span> Iterate
                </span>
                <span className="mt-2">
                  Created a web application platform for students to learn and
                  practice math with a unique rating system. Fully functional
                  backend to store user&apos;s account information, along with a
                  detailed assessment history made with TRPC, Planetscale, and
                  Prisma.
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pb-24"></div>
      </div>
    </main>
  );
}
