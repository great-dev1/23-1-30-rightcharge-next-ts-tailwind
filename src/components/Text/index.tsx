const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-lg leading-6 ${className}`}>{children}</p>;
};

export default Text;
