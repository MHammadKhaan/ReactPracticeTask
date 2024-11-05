import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const Categories = ["Goroceries", "Utility", "Entertainment"] as const;
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "name must be at-least 3 characters" }),
  amount: z.number({ invalid_type_error: "amount is required" }),
  category: z.enum(Categories),
});
type FormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: FormData) => void;
}
export default function ExpanseTracker({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger"> {errors.amount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="">All Categories</option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}
