import React from "react";
import { FieldValues, useForm } from "react-hook-form";
interface formData{
    name:string,
    age:number
}
export default function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name must be longer then 3 characters
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 18 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">Age must be at-least 18</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
