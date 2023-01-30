import Link from 'next/link';
import Text from '@components/Text';
import ArrowLink from '@components/ArrowLink';

const SaveCard = ({
  image,
  description,
  text,
  url,
}: {
  image: string;
  description: string;
  text: string;
  url: string;
}) => {
  return (
    <div className='flex flex-col items-center gap-5 max-w-[352px] p-12 rounded bg-white shadow-lg'>
      <img src={image} alt='save' />
      <Text className='text-[#1A1A34]'>{description}</Text>
      <Link href={url}>
        <ArrowLink>{text}</ArrowLink>
      </Link>
    </div>
  );
};

export default SaveCard;
