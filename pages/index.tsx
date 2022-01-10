import Container from '../components/Container';
import MeetYourINstructor from '../components/MeetYourINstructor';

import Image from 'next/image';

import headImage from '../public/logos/visual.png';
import book from '../public/logos/book.png';
import notes from '../public/logos/notes.png';
import question from '../public/logos/question.png';
import phone from '../public/logos/phone.png';
import cap from '../public/logos/cap.png';
import project from '../public/logos/projects.png';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <section className="bg-blue-600 p-4 rounded-xl text-center">
          <div className="text-center text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <h1 className="font-bold text-white ">Skill Up and Get Hired.</h1>

            <h1 className="font-bold  text-gray-200 dark:text-blue-500 mt-2 ">
              Join the Full-Stack Web Development Bootcamp.
            </h1>
          </div>

          <h3 className="text-xl py-3">
            This 20-weeks long, 100% online, high-intensity training program you
            will go from knowing nothing about web development to developing
            production level apps and
            <span className="text-2xl font-bold"> get hired </span> by top
            companies.
          </h3>
        </section>

        <section className="text-black my-6 ">
          <h1 className="text-2xl text-blue-600 font-bold pb-4">Features</h1>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={book} alt="book" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Structured Learning </h1>
              <div>
                Learning made easy. Complete syllabus is covered while never
                compromising on quality.
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={notes} alt="book" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Notes</h1>
              <div>
                Get complete notes for all lectures so that you can focus on
                learning and practising.
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={question} alt="book" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Assignments</h1>
              <div>
                Assignments and questions are provided to understand the
                concepts well.{' '}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={phone} alt="phone" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Doubt Support</h1>
              <div>Clear all your doubts through LIVE discord support.</div>
            </div>
          </div>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={cap} alt="cap" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Assignments</h1>
              <div>
                Assignments and questions are provided to understand the
                concepts well.{' '}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-3">
            <div className="flex-none bg-bg_primary p-2 rounded-full w-10 h-10">
              <Image src={project} alt="project" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Projects</h1>
              <div>
                Learning made easy. Complete syllabus is covered while never
                compromising on quality.
              </div>
            </div>
          </div>
        </section>

        <section className="text-black my-6 ">
          <h1 className="text-xl text-blue-600 font-bold pb-4 text-center">
            WE'LL ENTIRELY FOCUS ON PRACTICE, PRACTICE, PRACTICE
          </h1>

          <h2 className="text-2xl font-bold text-center">
            Fantastic Projects we will build.
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">
                Build a static landing page with HTML and Tailwind
              </p>
              <p className="font-light">
                At the core of anything, online, there's a landing page. We'll
                create a static one and we'll deploy it to the world to see!
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">
                Build a login/signup process with just JavaScript
              </p>
              <p className="font-light">
                Create an interactive page directly by using the DOM functions
                and browser events.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">
                Build a stock/crypto price visualizer
              </p>
              <p className="font-light">
                Build an interface to visualize data dynamically with React and
                Next.js. We'll visualize stock and crypto prices, whatever you
                prefer.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">
                Build a real-world REST and GraphQL API
              </p>
              <p className="font-light">
                We'll create a real-world API that offers two different kinds of
                access: REST (GET, POST, etc) and GraphQL.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Build a remote job board</p>
              <p className="font-light">
                Remote job boards are very popular right now, for good reasons.
                We'll build a job board for remote React jobs!
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Build a Zoom clone</p>
              <p className="font-light">
                We'll replicate the live video chat functionality of Zoom with
                React and Next.js.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Create you own component library</p>
              <p className="font-light">
                We'll replicate our own component library.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">
                Build a project management tool./trello clone
              </p>
              <p className="font-light">
                We'll basically create a project management app, with pricing
                plans, free trial, accounts, billing. Users will pay to access
                it and organize their work.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Built an e-commerce website</p>
              <p className="font-light">
                Building an e-commerce is not an easy task, but we'll do it in
                style using Next.js Commerce.
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Build a TripAdvisor clone</p>
              <p className="font-light">
                We'll build a website for a local community. People will be able
                to signup and leave reviews of restaurants and shops and hotels
                in the area!
              </p>
            </section>

            <section className="w-full bg-gray-200 rounded-lg p-2 ">
              <p className="font-semibold">Build enterprise sales dashboard</p>
              <p className="font-light">
                We will build sales dashboard that are used by enterprise. we
                will use next js, react query ,Rest Api and chartsjs.
              </p>
            </section>
          </div>
        </section>

        <section className="text-black my-6 ">
          <h1 className="text-xl text-blue-600 font-bold pb-4 text-center">
            WE'LL ENTIRELY FOCUS ON CUTTING EDGE TECHNOLOGIES
          </h1>

          <h2 className="text-2xl font-bold text-center">
            Technologies you will learn.
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
            <section className=" ">
              <p className="font-semibold">HTML and CSS</p>
              <p className="font-light">
                It all starts from those 2 fundamental technologies
              </p>
            </section>

            <section className=" ">
              <p className="font-semibold">Tailwind CSS</p>
              <p className="font-light">
                The evolution of CSS. We'll use Tailwind in all our projects
              </p>
            </section>

            <section className=" ">
              <p className="font-semibold">JavaScript</p>
              <p className="font-light">
                You'll learn how to use in practice the programming language of
                the Web
              </p>
            </section>

            <section className=" ">
              <p className="font-semibold">React</p>
              <p className="font-light">
                React is what we'll use on top of JavaScript to create
                components-based applications
              </p>
            </section>
            <section className=" ">
              <p className="font-semibold">Next.js</p>
              <p className="font-light">
                Using Next.js we'll build React applications easily and with a
                clear structure
              </p>
            </section>

            <section className=" ">
              <p className="font-semibold">Node.js</p>
              <p className="font-light">
                At the core of everything is Node.js, the JavaScript engine that
                runs on the server
              </p>
            </section>

            <section className=" ">
              <p className="font-semibold">Databases</p>
              <p className="font-light">Databases will store our data</p>
            </section>
          </div>
        </section>

        <MeetYourINstructor />

        <a
          target="_blank"
          href="https://chat.whatsapp.com/FDYpilxNHGcI8kjxMIZdQa"
          rel="noopener noreferrer"
          className="py-2 px-4 w-full border-solid border-4 rounded-lg 
            my-6 border-blue-600   ml-auto inline-block text-blue-600
  
          font-bold  hover:bg-blue-600 hover:text-white"
        >
          Join the waitlist.
        </a>

        {/* todo: modify the suscrbe to contact card and join the wait list
         */}
        {/* <Subscribe />   */}
      </div>
    </Container>
  );
}
