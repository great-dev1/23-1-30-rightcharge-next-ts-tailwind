const ButtonLink = ({
  color = 'white',
  children,
  className,
}: {
  color?: string;
  children: string;
  className?: string;
}) => {
  if (color === 'black') {
    return (
      <button
        className={`px-8 py-4 border-2 border-[#1A1A34] text-white bg-[#1A1A34] rounded-full duration-300 hover:underline ${className}`}
      >
        <span className='text-lg font-medium leading-8'>{children}</span>
      </button>
    );
  } else if (color === 'pink') {
    return (
      <button
        className={`px-8 py-4 border-2 border-[#F4178F] text-white bg-[#F4178F] rounded-full duration-300 ${className}`}
      >
        <span className='text-lg font-medium leading-8'>{children}</span>
      </button>
    );
  } else {
    return (
      <button
        className={`px-8 py-4 border-2 border-[#F4178F] text-[#1A1A34] hover:text-[#F4178F] rounded-full duration-300 hover:underline ${className}`}
      >
        <span className='text-lg font-medium leading-8'>{children}</span>
      </button>
    );
  }
};

export default ButtonLink;
