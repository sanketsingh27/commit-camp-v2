export default function Pricing() {
  return (
    <>
      <section className="w-full sm:px-32 py-12 bg-white text-black text-center">
        <h1 className="bg-yellow-300 font-extrabold w-fit mx-auto text-5xl text-black">
          What the Price.
        </h1>

        <div className=" font-bold text-3xl sm:w-2/6 mx-auto ">
          <p className="my-4">
            There is no Upfront cost. You will pay us{' '}
            <span className="bg-yellow-300 text-black text-bold">
              1,00,000 INR{' '}
            </span>{' '}
            in EMI when you get more than baseline. If you dont get a job within
            a year, <br />
            <span className="bg-yellow-300 text-black text-bold">
              {' '}
              you will not have to pay.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
