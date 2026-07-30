import AuthLayout from "../assets/components/auth/AuthLayout";
import RegisterForm from "../assets/components/auth/RegisterForm";
const RegisterPage = () => {
  return (
       <AuthLayout title="Sign Up to Create Account">

      {/* RegisterForm */}
      <RegisterForm />

    </AuthLayout>
  )
}

export default RegisterPage