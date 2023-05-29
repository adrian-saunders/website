import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => (
  <div className="mx-auto flex min-h-screen max-w-screen-2xl items-center justify-center">
    <main className="m-1 flex flex-row items-center">
      <h1 className="text-6xl md:text-8xl xl:text-9xl">🤘</h1>
      <div>
        <h1 className="font-serif text-4xl md:text-7xl xl:text-9xl">
          Hey, I&apos;m Adrian
        </h1>
        <div className="m-4mt-6">
          <h2 className="text-xl md:text-3xl xl:text-5xl">
            A software engineer at{" "}
            <Link
              href="https://cisco.com"
              target="_blank"
              rel="noopener"
              className="text-[#0070d2] underline decoration-[#0070d2] decoration-[6px] underline-offset-8 hover:text-[#0051af]"
            >
              Cisco
            </Link>
          </h2>
          <div className="mt-4">
            <Link
              href="https://github.com/adrian-saunders"
              target="_blank"
              rel="noopener"
              className="me-8 inline-flex items-center text-2xl underline decoration-[6px] underline-offset-8"
            >
              <BsGithub className="mr-1 inline" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/adrian-saunders"
              target="_blank"
              rel="noopener"
              className="me-8 inline-flex items-center text-2xl text-[#005e93] underline decoration-[#0077b5] decoration-[6px] underline-offset-8"
            >
              <BsLinkedin className="mr-1 inline text-[#0077b5]" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
