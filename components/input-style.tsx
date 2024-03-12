"use client";

import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FiEyeOff, FiEye } from "react-icons/fi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any }; // Adjust based on your error object structure
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  multiline,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full relative">
      {!multiline && type === "password" && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className=" text-neutral-700 absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
        </button>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={showPassword && type === "password" ? "text" : type}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          left-4
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      {/* Error message display */}
      {errors[id] && (
        <p className="text-rose-500 text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default Input;
