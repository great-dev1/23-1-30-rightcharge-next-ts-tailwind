import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'src/layout';
import Text from '@components/Text';
import Title from '@components/Title';
import Stepper from '@components/Stepper';
import ProductCard from '@components/ProductCard';
import ArrowLink from '@components/ArrowLink';

const ProductsData = [
  {
    id: 1,
    name: 'Wall Connector',
    image: '/images/tesla.webp',
    maker: 'Tesla',
    price: 390,
    description:
      'This sleek, Tesla-designed tethered charger is compatible with all Type 2 vehicles',
    features: [
      {
        icon: '/images/warranty.png',
        feature: '3 year warranty',
      },
      {
        icon: '/images/wifi.png',
        feature: 'Wi-Fi',
      },
      {
        icon: '/images/charge.png',
        feature: 'Tethered opton',
      },
    ],
  },
  {
    id: 2,
    name: 'Home Pro',
    image: '/images/ohme.webp',
    maker: 'Ohme',
    price: 840,
    description:
      'Discreet design and user friendly, this tethered charger comes with touchscreen LCD panel control',
    features: [
      {
        icon: '/images/warranty.png',
        feature: '3 year warranty',
      },
      {
        icon: '/images/wifi.png',
        feature: 'Wi-Fi',
      },
      {
        icon: '/images/adapter.png',
        feature: 'Untethered option',
      },
    ],
  },
  {
    id: 3,
    name: 'Easee One',
    image: '/images/easee.webp',
    maker: 'Easee',
    price: 848,
    description:
      'The best option for drivers who want an untethered charger that can also be tethered',
    features: [
      {
        icon: '/images/warranty.png',
        feature: '3 year warranty',
      },
      {
        icon: '/images/wifi.png',
        feature: 'Wi-Fi',
      },
      {
        icon: '/images/charge.png',
        feature: 'Tethered option',
      },
    ],
  },
];

const ChargePoints: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Chargers | Rightcharge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* Preferences */}
        <section className='py-12 bg-[#1A1A34]'>
          <div className='container grid grid-cols-12 gap-4 lg:gap-8 items-center'>
            <div className='col-span-12 md:col-span-8'>
              <Text className='mb-4 text-white'>
                Which chargers are most suitable for you?
              </Text>
              <Title className='text-center md:text-left text-white'>
                Does your house have solar panels or could you have them within
                the next few years?
              </Title>
              <Stepper className='mx-auto md:mx-0' />
            </div>
            <div className='col-span-6 md:col-span-2'>
              <img
                className='hidden md:block'
                src='/images/yes.svg'
                alt='yes'
              />
              <img
                className='md:hidden mx-auto'
                src='/images/yes-mobile.svg'
                alt='yes'
              />
            </div>
            <div className='col-span-6 md:col-span-2'>
              <img className='hidden md:block' src='/images/no.svg' alt='no' />
              <img
                className='md:hidden mx-auto'
                src='/images/no-mobile.svg'
                alt='no'
              />
            </div>
          </div>
        </section>

        {/* Top Charge Points */}
        <section className='py-8 md:py-20 bg-white'>
          <div className='container'>
            <Title className='mb-8 lg:mb-12 text-center text-[#1A1A34]'>
              Our top 3 charge points
            </Title>
            <div className='flex flex-col gap-4 mb-16'>
              {ProductsData.map((el) => (
                <ProductCard
                  key={el.id}
                  name={el.name}
                  image={el.image}
                  maker={el.maker}
                  price={el.price}
                  description={el.description}
                  features={el.features}
                />
              ))}
            </div>
            <ArrowLink>View all charge points</ArrowLink>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChargePoints;
