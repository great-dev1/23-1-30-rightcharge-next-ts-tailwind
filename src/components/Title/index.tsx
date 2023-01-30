const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`text-[32px] md:text-[45px] leading-[36px] md:leading-[48px] font-semibold tracking-[-2px] ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
