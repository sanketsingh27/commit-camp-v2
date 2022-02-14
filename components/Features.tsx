import Image from 'next/image';

import book from '../public/logos/book.png';

export default function Features() {
  const bg = {
    backgroundImage: `radial-gradient(#12060640 1.35px, #ffffff 1.35px)`,
    backgroundSize: `27px 27px`,
    backgroundColor: `#fff`
  };
  return (
    <>
      <div style={bg} className="  sm:px-32  flex flex-col justify-around ">
        <h1 className="text-4xl mt-10 mb-5 bg-yellow-300 px-4 py-2 w-fit  font-extrabold text-black">
          Salient Features
        </h1>

        <div className=" text-black flex flex-wrap">
          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Structured Learning
            </h1>
            <div>
              Learning made easy. Complete syllabus is covered while never
              compromising on quality.
            </div>
          </div>

          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Notes
            </h1>
            <div>
              Get complete notes for all classes so that you can focus on
              learning and practising.
            </div>
          </div>

          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Assignments
            </h1>
            <div>
              Assignments and questions are provided to understand the concepts
              well.
            </div>
          </div>

          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Doubt Support
            </h1>
            <div>
              Clear all your doubts through discord support or reaching directly
              to instructor.
            </div>
          </div>

          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Projects
            </h1>
            <div>
              develop around 20+ projects. each project designed to learn and
              practice new technology.
            </div>
          </div>

          <div className="m-5 sm:m-0 sm:mb-5  sm:w-4/12 text-xl mb-6">
            <h1 className="bg-blue-primary w-fit text-2xl   font-bold">
              Guest Lectures
            </h1>
            <div>
              lectures form top engineers and managers form top tire companies
              on hiring / tech/project management
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
