const AuthLayout = ({ children }) => {
  return (
    <main
      className="
       
        bg-[#FBF9FE]
        flex
        justify-center
        items-start
        px-4
        py-10

        sm:px-6
        sm:py-14

        lg:px-8
        lg:py-16
      "
    >
      <div
        className="
          w-full
          max-w-[642px]
        "
      >
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;