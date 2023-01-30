const Stepper = ({ className }: { className?: string }) => {
  return (
    <div
      className={`stepper relative flex items-center justify-between w-[100px] my-5 ${className}`}
    >
      <div className='absolute z-10 w-1/2 h-[1.5px] bg-[#FF007F] duration-1000' />
      <div className='z-20 w-3.5 h-3.5 border-2 border-white rounded-full bg-[#1A1A34] duration-700 completed' />
      <div className='z-20 w-3.5 h-3.5 border-2 border-white rounded-full bg-[#1A1A34] duration-700 delay-75 completed' />
      <div className='z-20 w-3.5 h-3.5 border-2 border-white rounded-full bg-[#1A1A34] duration-700' />
    </div>
  );
};

export default Stepper;
