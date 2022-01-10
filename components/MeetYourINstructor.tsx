import Image from 'next/image';
import mentorImage from '../public/avatar.jpg';

export default function MeetYourINstructor() {
  return (
    <>
      <h1 className="text-center w-full font-bold text-5xl py-3 text-blue-600">
        Meet Your Instructor
      </h1>
      <section className="bg-blue-600 w-full  rounded-xl p-3">
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
        <div>
          <ul className="list-disc">
            <li>
              developed 15+ internal tools for different teams in an e-commerce.
            </li>
            <li>
              Worked on banking application (Finacal) used by banks like ICICI
            </li>
            <li>
              Created API for enterprise dashboards uses by millions of users.{' '}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
