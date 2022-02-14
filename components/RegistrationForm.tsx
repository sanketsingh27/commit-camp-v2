import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className=" bg-white  text-blue-primary text-sm text-left p-4 rounded-3xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="font-bold  " htmlFor="name">
        Name: <br />
        <input
          className="border-blue-primary rounded-md border-2  w-60  sm:w-full"
          id="name"
          type={'text'}
          {...register('name')}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label className="font-bold " htmlFor="email">
        Email: <br />
        <input
          id="email"
          className="border-blue-primary rounded-md border-2 w-60 sm:w-full"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <br />

      <label className="font-bold " htmlFor="number">
        Contact Number: <br />
        <input
          id="number"
          className="border-blue-primary rounded-md border-2 w-60 sm:w-full"
          {...register('number', { required: true })}
        />
        {errors.number && <span>This field is required</span>}
      </label>
      <br />

      <label className="font-bold " htmlFor="hours">
        How many hours can you dedicate to learning:
        <br />
        <select
          id="hours"
          className="border-blue-primary rounded-md border-2 w-60 sm:w-full"
          {...register('hours', { required: true })}
        >
          <option value="<2">less that 2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="allDay">I am free all day</option>
        </select>
        {errors.email && <span>This field is required</span>}
      </label>
      <br />

      <label className="font-bold " htmlFor="kyc">
        Tell us something about you.(edu,hobbies,etc):
        <br />
        <textarea
          id="kyc"
          className="border-blue-primary rounded-md border-2 w-60 sm:w-full"
          {...register('kyc ', { required: true })}
        />
        {errors.kyc && <span>This field is required</span>}
      </label>
      <br />

      <button
        className="px-4 py-2 rounded-lg bg-blue-700 font-bold text-white"
        type="submit"
      >
        Sign me up the .
      </button>
    </form>
  );
}
