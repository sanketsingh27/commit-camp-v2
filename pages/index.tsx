import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import book from '../public/logos/book.png';
import notes from '../public/logos/notes.png';
import question from '../public/logos/question.png';
import phone from '../public/logos/phone.png';
import cap from '../public/logos/cap.png';
import project from '../public/logos/projects.png';

import RegistrationForm from 'components/RegistrationForm';
import Testimonial from 'components/Testimonial';
import MobileMenu from 'components/MobileMenu';
import Features from 'components/Features';
import TechnologiesToLearn from 'components/TechnologiesToLearn';
import MeetYourINstructor from '../components/MeetYourINstructor';
import Projects from 'components/Projects';
import Pricing from 'components/Pricing';

export default function Home() {
  const background = {
    backgroundImage: ` radial-gradient(#02030140 1.35px, #2298FF 1.35px)`,
    backgroundSize: `27px 27px`,
    backgroundColor: `#2298FF`,
    opacity: 1
  };

  function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
      <NextLink href={href}>
        <a
          className={cn(
            isActive
              ? 'font-semibold text-gray-800 dark:text-gray-200'
              : 'font-normal text-gray-600 dark:text-gray-400',
            'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
          )}
        >
          <span className="capsize">{text}</span>
        </a>
      </NextLink>
    );
  }

  return (
    <>
      <main className="w-full bg-blue-primary" style={background}>
        <nav className=" sm:px-32 flex items-center justify-between w-full   border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900  dark:bg-gray-900 dark:text-gray-100">
          <h1 className=" text-2xl sm:text-4xl font-extrabold text-white ">
            Commit Camp
          </h1>

          <span className="sm:py-2 text-lg py-1 px-2 sm:px-4 bg-blue-600 text-white font-semibold rounded-md ml-auto inline-block">
            <a
              target="_blank"
              href="https://chat.whatsapp.com/FDYpilxNHGcI8kjxMIZdQa"
              rel="noopener noreferrer"
            >
              Talk with an expert Request a call back
            </a>
          </span>

          <div>
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Pricing" />
            <NavItem href="/" text="Syllabus" />
          </div>
        </nav>

        <div className=" bg-yellow-300  fixed bottom-8  w-12 -right-4 sm:right-0 sm:w-fit font-bold  border-1 border-black  rounded-l-full  h-7 text-black">
          <h1 className="m-2">* 60 % seats already filled </h1>
        </div>

        <section className="sm:px-32 flex flex-wrap min-h-hero w-full  p-4 text-center">
          <div className="w-full sm:w-1/2  text-left  flex flex-col  justify-evenly  dark:bg-black text-white dark:text-white">
            <h1 className=" text-2xl sm:text-5xl font-extrabold ">
              Learn Full Stack Web Development And get Hired
            </h1>

            <h2 className=" text-lg sm:text-3xl font-semibold ">
              Average salary 4.5 LPA
            </h2>

            <div>
              <h2 className="text-lg sm:text-3xl font-semibold">
                No Up front cost
              </h2>
              <p className=" text-sm sm:text-xl font-normal">
                Pay us when you get hired
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-3xl font-semibold">
                Learn In demand technology
              </h2>
              <p className="text-sm sm:text-xl font-normal">
                react js redux next js node js express js redis socket io{' '}
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-3xl font-semibold">
                Learn by practice
              </h2>
              <p className="text-sm sm:text-xl font-normal">
                Make around 20 + projects{' '}
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-3xl font-semibold">
                Fixed batch size of 20
              </h2>
              <p className="text-sm sm:text-xl font-normal">
                Each batch has a full time instructor of doubt solving{' '}
              </p>
            </div>
          </div>

          <div className=" w-full sm:w-1/2  text-3xl  dark:bg-black text-white dark:text-white">
            <div className="w-full  sm:w-4/5 ml-auto sm:h-full flex flex-col justify-evenly ">
              <h1 className="font-extrabold  text-4xl text-left">
                Register to get scholarship before time runs out <br />
                <span className="text-yellow-300 text-5xl"> 1: 30 </span>
              </h1>
              <RegistrationForm />
            </div>
          </div>
        </section>

        <Testimonial />
        <Features />
        <Projects />
        <TechnologiesToLearn />
        <MeetYourINstructor />
        <Pricing />

        <a
          target="_blank"
          href="https://chat.whatsapp.com/FDYpilxNHGcI8kjxMIZdQa"
          rel="noopener noreferrer"
          className="py-2 px-4 w-full sm:w-2/6 mx-auto block border-solid border-4 rounded-lg 
            my-6 border-yellow-300  ml-auto  text-yellow-300
  
          font-bold  hover:bg-blue-600 hover:text-white"
        >
          Join the wait-list.
        </a>

        {/* <section className=" px-32 mt-8 p-7 rounded-lg text-black w-full pt-4 bg-gray-200 md:flex-wrap gap-6">
          <p className="text-2xl font-bold">How To join commit camp</p>
          <ul className="list-none pl-5">
            <li className="text-lg">
              <span className="font-bold "> Step 1 : </span>
              Register for our free 1 week workshop on fundamentals of web
              development with live mentors.
            </li>
            <li className="font-xl">
              <span className="font-bold"> Step 2 : </span>
              complete and submit the assignments.
            </li>
            <li className="font-xl">
              <span className="font-bold"> Step 3 : </span>
              Our team of instructors will evaluate your work and call you back
            </li>
          </ul>
        </section> */}
      </main>
    </>
  );
}
