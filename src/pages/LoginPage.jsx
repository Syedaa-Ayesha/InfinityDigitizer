import AuthLayout from "../assets/components/auth/AuthLayout";
import LoginForm from "../assets/components/auth/LoginForm";
const LoginPage = () => {
  return (
    
     <AuthLayout title="Log In to Your Account">

      {/* LoginForm */}
      <LoginForm />

    </AuthLayout>
  )
}

export default LoginPage