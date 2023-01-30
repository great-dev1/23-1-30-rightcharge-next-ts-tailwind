import Link from 'next/link';
import ButtonLink from '@components/ButtonLink';

const ProductCard = ({
  name,
  image,
  maker,
  price,
  description,
  features,
}: {
  name: string;
  image: string;
  maker: string;
  price: number;
  description: string;
  features?: any[];
}) => {
  return (
    <div className='p-4 lg:p-6 border border-[#F1F4F9] hover:border-[#FF007F] rounded bg-white shadow duration-300'>
      <div className='grid grid-cols-12 lg:gap-x-8'>
        <div className='col-span-12 lg:col-span-4'>
          <img
            className='max-w-[320px] w-full h-auto mx-auto'
            src={image}
            alt={name}
          />
        </div>

        <div className='col-span-12 lg:col-span-8'>
          <div className='grid grid-cols-12 mb-4 py-4 border-b-2 border-[#1A1A34] border-opacity-30'>
            <div className='col-span-12 lg:col-span-8 flex items-end gap-2'>
              <h2 className='lg:text-[45px] tracking-[-1px] text-[#1A1A34]'>
                {name}
              </h2>
              <p className='mb-0 lg:text-lg text-[#1A1A34]'>
                By <span className='underline'>{maker}</span>
              </p>
            </div>
            <div className='col-span-12 lg:col-span-4 flex lg:flex-col-reverse items-center lg:items-end gap-2'>
              <p className='mb-0 text-sm lg:text-base text-[#1A1A34]'>
                From
                <span className='text-xl lg:text-3xl font-bold'> £{price}</span>
              </p>
              <p className='mb-0 text-sm lg:text-base text-[#1A1A34]'>
                Installation included
              </p>
            </div>
          </div>

          <div>
            <p className='mb-4 text-sm lg:text-base text-[#1A1A34]'>
              {description}
            </p>
            <ul className='grid grid-cols-12 mb-8'>
              {features?.map((el, idx) => (
                <li
                  key={idx}
                  className='col-span-6 flex items-center gap-2 py-2.5'
                >
                  <img
                    className='w-auto h-[34px]'
                    src={el.icon}
                    alt={el.feature}
                  />
                  <span className='text-sm lg:text-base text-[#1A1A34]'>
                    {el.feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col md:flex-row gap-4 justify-between mb-4'>
            <Link href='/charger/ohme-home-pro'>
              <ButtonLink className='w-full md:w-auto'>
                See more details
              </ButtonLink>
            </Link>
            <Link href='/quote-chargepoint/ohme-home-pro'>
              <ButtonLink color='black' className='w-full md:w-auto'>
                Start your order
              </ButtonLink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
