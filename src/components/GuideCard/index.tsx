import Link from 'next/link';
import Text from '@components/Text';
import ArrowLink from '@components/ArrowLink';

const GuideCard = ({
  image,
  title,
  description,
  url,
}: {
  image: string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <div className='flex md:flex-col h-full'>
      <img
        className='w-2/5 md:w-full h-auto md:h-[237px] md:mb-6 object-cover'
        src={image}
        alt='guide'
      />
      <div className='p-4 md:p-0'>
        <h3 className='mb-1 text-base md:text-[22px] leading-[1.2] font-semibold text-[#1A1A34]'>
          {title}
        </h3>
        <Text className='line-clamp-2 mb-0 md:mb-4 text-sm md:text-lg text-[#1A1A34]'>
          {description}
        </Text>
      </div>
      <Link href={url}>
        <ArrowLink className='hidden md:flex mt-auto'>Read more</ArrowLink>
      </Link>
    </div>
  );
};

export default GuideCard;
