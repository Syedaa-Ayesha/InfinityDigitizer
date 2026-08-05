import {
UserRound,
  Mail,
  Phone,
  Building2,
  Lock,
  ArrowRight,
  UserPlus,
} from "lucide-react";

import { Link } from "react-router-dom";
import AuthInput from "./InputFields";
import SolidButton from "../layout/SolidButton";
import ContinueWithGoogle from "../layout/ContinueWithGoogle";
const RegisterForm = () => {
  return (
    <form className="space-y-[18px]">

      {/* Badge */}

      <div className="">

        <span
          className="
            rounded-full
            bg-[#EDE7F8]
            px-[22px]
            py-[10px]
            text-sm
            font-dmSans
            font-bold
            uppercase
            tracking-wider
            text-[#7434E5]
            flex w-fit
            gap-2
          "
        >
          
          <UserPlus size={16}/> Create Account
        </span>
<h1
          className="
          pt-3
          text-[32px]
          font-extrabold
          font-dmSans
          text-[#0F1729]
          tracking-[-0.64px]
          "
        >
          Sign Up to create account
        </h1> 
      </div>



        <p className=" text-[#6B7280] text-base font-inter -mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#7434E5] font-inter hover:underline"
          >
            Log In
          </Link>
        </p>


      {/* First & Last Name */}

      <div className="grid gap-4 md:grid-cols-2">

        <AuthInput
          label="First Name"
          placeholder="Ali"
          icon={UserRound}
        />

        <AuthInput
          label="Last Name"
          placeholder="Khan"
          icon={UserRound}
        />

      </div>

      {/* Email */}

      <AuthInput
        label="Email Address"
        placeholder="you@company.com"
        type="email"
        icon={Mail}
      />

      {/* Phone */}
   <div className="grid gap-4 md:grid-cols-2">
      <AuthInput
        label="Phone Number"
        placeholder="+92 300 1234567"
        type="tel"
        icon={Phone}
      />

      {/* Company */}

      <AuthInput
        label="Company Name"
        placeholder="Optional"
        icon={Building2}
      />
</div>
      {/* Password */}
<div className="space-y-2">
      <AuthInput
        label="Password"
        type="password"
        placeholder="Create a Password"
        icon={Lock}
      />
  
<p className="text-xs font-inter text-[#6B7280]">Minimum 8 characters, with a number and symbol.</p>
      {/* Confirm Password */}

      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="Re-enter your password"
        icon={Lock}
      />
</div>
      {/* Checkboxes */}

      <div className="space-y-[18px]">

        <label className="flex items-start gap-3 cursor-pointer">

          <input
            type="checkbox"
            className="mt-1 accent-[#7434E5]"
          />

          <span className="text-[14px] leading-6 text-[#6B7280]">
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-semibold text-[#7434E5]"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-semibold text-[#7434E5]"
            >
              Privacy Policy
            </Link>
          </span>

        </label>

        <label className="flex items-start gap-3 cursor-pointer">

          <input
            type="checkbox"
            className="mt-1 accent-[#7434E5]"
          />

          <span className="text-[14px] leading-6 text-[#6B7280]">
            Send me updates about offers, new designs and discounts.
          </span>

        </label>

      </div>

      {/* Register Button */}

     <SolidButton title= "Create Account" Icon ={  ArrowRight} classname="w-full"/>

      {/* Divider */}

      <div className="relative flex items-center justify-center">

        <div className="absolute left-0 h-px w-full bg-[#E7E3ED]" />

        <span
          className="
            relative
            bg-white
            px-4
            text-[13px]
            text-[#ACB0B9]
          "
        >
          or sign up with
        </span>

      </div>

      {/* Google */}
      <ContinueWithGoogle/>
    </form>
  );
};

export default RegisterForm;