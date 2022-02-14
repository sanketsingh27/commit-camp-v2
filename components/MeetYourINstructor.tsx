import Image from 'next/image';
import mentorImage from '../public/avatar.jpg';

export default function MeetYourINstructor() {
  return (
    <>
      <section className="m-5">
        <h1 className="text-center  w-fit  font-bold text-5xl py-3 px-5 mx-auto bg-white text-black">
          Meet Your Instructor
        </h1>
        <section className="bg-yellow-300 text-black my-5 mx-auto w-full sm: sm:w-2/6 rounded-lg rounded-xl p-3">
          <div className="flex ">
            <div className="rounded-full border-4 border-white border-solid">
              <Image
                src={mentorImage}
                className="rounded-full"
                width="70"
                height="70"
              />
            </div>

            <div className="flex flex-col ml-2 text-left justify-center">
              <p className="font-bold text-lg">Sanket Singh</p>
              <p className="text-lg">5 years of experience.</p>
            </div>
          </div>
          <div className="flex flex-wrap  justify-evenly">
            <p className=" sm:w-2/6 rounded-lg bg-white m-2 p-2">
              developed 15+ internal tools for different teams in an e-commerce.
            </p>
            <p className=" sm:w-2/6 rounded-lg bg-white m-2 p-2">
              Worked on banking application (Finacal) used by banks like ICICI
            </p>
            <p className=" sm:w-2/6 rounded-lg bg-white m-2 p-2">
              Created API for enterprise dashboards uses by millions of users.{' '}
            </p>
            <p className=" sm:w-2/6 rounded-lg bg-white m-2 p-2">
              Designed Microservice architecture for e-commerce platform
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
