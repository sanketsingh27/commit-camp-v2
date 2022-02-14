export default function Testimonial() {
  const bg = {
    backgroundImage: `radial-gradient(#12060640 1.35px, #ffffff 1.35px)`,
    backgroundSize: `27px 27px`
  };
  return (
    <>
      <div
        style={bg}
        className=" mt-5 sm:px-32 flex flex-col  justify-between  w-full  bottom-2   bg-white  border-white "
      >
        <h1 className=" my-7 px-4 py-2  text-4xl font-extrabold text-black w-fit  bg-yellow-300">
          See what people are saying.
        </h1>

        <div className="flex flex-wrap sm:flex-nowrap justify-between ">
          <h1 className=" m-5 rounded-2xl text-lg font-normal text-white sm:w-1/5 text-justify bg-blue-primary p-4">
            Sanket is an amazing teacher. I struggled with javascript and DOM
            manipulation for days but he was able to break it down and make it
            understandable for me. It really made the difference!
            <br />
            <div className="bg-yellow-200 ml-auto w-fit text-black  text-xs font-light">
              <span className="font-bold"> Gayatri </span>
              QA @Coutloot
            </div>
          </h1>

          <h1 className=" m-5 rounded-2xl text-lg font-normal text-white sm:w-1/5 text-justify bg-blue-primary p-4">
            using react and understanding react is two different things, Commit
            camp makes sure you understand first and use it on a lot of practice
            problems.
            <br />
            <div className="bg-yellow-200 ml-auto w-fit text-black  text-xs font-light">
              <span className="font-bold"> Pratik </span>
              SDE @FYND
            </div>
          </h1>

          <h1 className="m-5 rounded-2xl text-lg font-normal text-white sm:w-1/5 text-justify bg-blue-primary p-4">
            The best place to boost growth for budding web developers. Always
            attend the guest lecture to know latest technological development.
            <br />
            <div className="bg-yellow-200 ml-auto w-fit text-black  text-xs font-light">
              <span className="font-bold"> Sameer Patil </span>
              UI/UX @HPS
            </div>
          </h1>

          <h1 className="m-5 rounded-2xl text-lg font-normal text-white sm:w-1/5 text-justify bg-blue-primary p-4">
            I really enjoy learning from their code-review sessions. It takes
            mentorship to whole new level.
            <br />
            <div className="bg-yellow-200 ml-auto w-fit text-black  text-xs font-light">
              <span className="font-bold"> Apurva </span>
              SDE @Capgemini
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
