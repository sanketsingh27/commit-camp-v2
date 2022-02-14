import Image from 'next/image';

import book from '../public/logos/book.png';

export default function TechnologiesToLearn() {
  const techArr = [
    'html5',
    'css3',
    'JS',
    'DOM manipulation',
    'react js',
    'Redux',
    'Tailwind',
    'Styled Component',
    'TypeScript',
    'typescript/react',
    'typescript/node',
    'expressjs',
    'redis'
  ];
  const bg = {
    backgroundImage: `radial-gradient(#12060640 1.35px, #F9D745 1.35px)`,
    backgroundSize: `27px 27px`
  };
  return (
    <>
      <div style={bg} className=" sm:px-32  pb-5 flex flex-col justify-around ">
        <h1 className="text-4xl my-9 bg-white px-4 py-2 w-fit mr-auto font-extrabold text-black">
          Learn in demand and cutting edge technology
        </h1>

        <div className=" text-white text-lg sm:text-2xl font-bold flex flex-wrap justify-between ">
          {techArr.map((i) => (
            <>
              <div className="bg-blue-primary mx-1 px-3 py-1 my-1 sm:mx-3 sm:px-5 sm:py-3 sm:my-1">
                {i.toUpperCase()}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
