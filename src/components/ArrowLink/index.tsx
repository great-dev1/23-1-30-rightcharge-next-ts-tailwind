import Link from 'next/link';
import Arrow from '@components/Arrow';

const ArrowLink = ({
  back,
  white,
  small,
  children,
  className,
}: {
  back?: boolean;
  white?: boolean;
  small?: boolean;
  children: string;
  className?: string;
}) => {
  return (
    <div
      className={`inline-flex ${
        back && 'flex-row-reverse'
      } items-center gap-1 cursor-pointer ${className}`}
    >
      <span
        className={`${small ? 'text-base' : 'text-lg font-medium'} ${
          white ? 'text-white' : 'text-[#1A1A34]'
        } hover:underline`}
      >
        {children}
      </span>
      {back ? <Arrow back red /> : <Arrow red />}
    </div>
  );
};

export default ArrowLink;
