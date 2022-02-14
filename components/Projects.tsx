import Image from 'next/image';

import book from '../public/logos/book.png';

export default function Projects() {
  const bg = {
    backgroundImage: `radial-gradient(#12060640 1.35px, #2298FF 1.35px)`,
    backgroundSize: `27px 27px`
  };
  return (
    <>
      <div
        style={bg}
        className=" sm:px-32  min-h-hero flex flex-col justify-around "
      >
        <h1 className="text-4xl my-9 bg-yellow-300 px-4 py-2 w-fit mr-auto font-extrabold text-black">
          Fantastic Projects we will build.
        </h1>

        <div className=" text-black flex flex-wrap justify-between ">
          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white  w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a static landing page with HTML and Css
            </h1>
            <div>
              At the core of anything, online, there's a landing page. We'll
              create a static one and host it.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a login/signup process with just JavaScript
            </h1>
            <div>
              Create an interactive page directly by using the DOM functions and
              browser events.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0   rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a stock/crypto price visualizer
            </h1>
            <div>
              Build an interface to visualize data dynamically with React and
              Next.js. We'll visualize stock and crypto prices, whatever you
              prefer.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a real-world REST and GraphQL API
            </h1>
            <div>
              We'll create a real-world API that offers two different kinds of
              access: REST (GET, POST, etc) and GraphQL.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a remote job board
            </h1>
            <div>
              Remote job boards are very popular right now, for good reasons.
              We'll build a job board for remote React jobs!
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">Build a Zoom clone</h1>
            <div>
              We'll replicate the live video chat functionality of Zoom with
              React and Next.js.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white  w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Create you own component library
            </h1>
            <div>We'll replicate our own component library.</div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Build a project management tool./trello clone
            </h1>
            <div>
              We'll basically create a project management app, with pricing
              plans, free trial, accounts, billing. Users will pay to access it
              and organize their work.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Built an e-commerce website
            </h1>
            <div>
              Building an e-commerce is not an easy task, but we'll do it in
              style using Next.js Commerce.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              Appointment Management System
            </h1>
            <div>System to book meeting with each other.</div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold">
              {' '}
              Build enterprise sales dashboard
            </h1>
            <div>
              We will build sales dashboard that are used by enterprise. we will
              use next js, react query ,Rest Api and chartsjs.
            </div>
          </div>

          <div className=" m-5 sm:my-5 sm:mx-0  rounded-2xl bg-white w-96 p-3  text-xl mb-6">
            <h1 className=" w-fit text-xl   font-bold"> SAAS Integration</h1>
            <div>
              We will learn payment integration , email service integration ,
              intercom integration
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
