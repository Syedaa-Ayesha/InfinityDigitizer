import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import AuthInput from "./AuthInput";
import ContinueWithGoogle from "../layout/ContinueWithGoogle";
import SolidButton from "../layout/SolidButton";

const LoginForm = () => {
  return (
    <section
      className="
        overflow-hidden
        rounded-[20px]
        bg-white
       shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
         bg-[#7434E5]
          px-5
          py-[18px]

          sm:px-8
          sm:py-6
        "
      >
        <h2
          className="
            text-center
            font-dmSans
            text-[32px]
            font-extrabold
            text-white

            sm:text-[30px]
          "
        >
          Log In to Your Account
        </h2>
      </div>

      {/* Form */}

      <form
        className="
          space-y-6
          p-5

          sm:p-8
        "
      >
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="you@company.com"
          icon={Mail}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={Lock}
        />

        {/* Remember */}

        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <label
            className="
              flex
              items-center
              gap-2
              text-[14px]
              text-[#6B7280]
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              className="
                h-4
                w-4
                accent-[#7434E5]
              "
            />

            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="
              text-[14px]
              font-medium
              text-[#7434E5]
              transition-colors
              hover:underline
            "
          >
            Forgot Password?
          </Link>
        </div>

        <SolidButton
          title="Log In"
          Icon={ArrowRight}
        />

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
            or sign in with
          </span>
        </div>

        <ContinueWithGoogle />

        {/* Bottom */}

        <p
          className="
            text-center
            text-[14px]
            leading-6
            text-[#6B7280]
          "
        >
          Don't have an account?{" "}

          <Link
            to="/register"
            className="
              font-semibold
              text-[#7434E5]
              hover:underline
            "
          >
            Sign up here
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;