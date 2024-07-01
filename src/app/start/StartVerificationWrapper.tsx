const StartVerificationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mt-[-5rem] px-4 md:px-0 pt-20 flex flex-col gap-4 justify-center items-center h-screen w-full bg-black bg-[url('/svg/start-verification-bg.svg')] bg-cover bg-no-repeat bg-center">
      {children}
    </div>
  );
};

export default StartVerificationWrapper;
