import { useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Slider from 'react-slick';
import * as Accordion from '@radix-ui/react-accordion';
import Layout from 'src/layout';
import ArrowLink from '@components/ArrowLink';
import ButtonLink from '@components/ButtonLink';
import Title from '@components/Title';
import InstallCriteria from '@components/InstallCriteria';

const ChargerData = {
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
};

const FaqData = [
  {
    id: 1,
    title: 'Compatibility',
    descriptions: [
      'Compatible with plug-in vehicles with a Type 2 socket only',
      'Available as a tethered unit only (with a 5m charging cable permanently attached). This charger will not be compatible with a car that uses a Type 1 socket unless there is an adapter',
    ],
  },
  {
    id: 2,
    title: 'Smart Charging',
    descriptions: [
      "Once you have set a target for your car's charge (such as 8am tomorrow), Ohme will calculate the energy required and schedule the charge the off-peak period hours of your electricity tariff (if you have switched to an off-peak tariff at home)",
      "Or, ask Ohme to prioritise charging when the electricity grid is at it's cleanest. The Ohme app is able to forecast the amount of renewable energy that will be generating across the UK and select the cleanest hours",
      "Achieve advanced scheduling of your car's charge if you have switched to the special Agile tariff from Octopus Energy",
    ],
  },
  {
    id: 3,
    title: 'Speed',
    descriptions: [
      'Available as a Fast (7.4 kW) charge point but is capable of lowering the power output if necessary (see Fuse Protection)',
    ],
  },
];

const SliderSettings = {
  arrows: false,
};

const Charger: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const slider = useRef<Slider | null>(null);

  return (
    <>
      <Head>
        <title>Charger | {pid}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* Charger */}
        <section className='py-8 lg:py-12 bg-[#F1F4F9]'>
          <div className='container'>
            {/* Back Link */}
            <Link href='/chargepoints'>
              <ArrowLink back>Back to comparing chargers</ArrowLink>
            </Link>

            <div className='grid grid-cols-12 mt-2 lg:gap-8 lg:mt-12'>
              <div className='col-span-12 md:col-span-5'>
                <div className='relative px-8'>
                  <button
                    className='absolute top-[calc(50%-28px)] left-2 text-xl text-[#1A1A34]'
                    onClick={() => slider.current?.slickPrev()}
                  >
                    <i className='fa-solid fa-chevron-left'></i>
                  </button>
                  <button
                    className='absolute top-[calc(50%-28px)] right-2 text-xl text-[#1A1A34]'
                    onClick={() => slider.current?.slickNext()}
                  >
                    <i className='fa-solid fa-chevron-right'></i>
                  </button>
                  <Slider {...SliderSettings} ref={slider}>
                    <img
                      className='w-full h-auto'
                      src='/images/ohme.webp'
                      alt='ohme'
                    />
                    <img
                      className='w-full h-auto'
                      src='/images/ohme-1.webp'
                      alt='ohme'
                    />
                    <img
                      className='w-full h-auto'
                      src='/images/ohme-2.webp'
                      alt='ohme'
                    />
                  </Slider>
                </div>
              </div>

              <div className='col-span-12 md:col-span-7'>
                <div className='grid grid-cols-12 mb-4 py-4 border-b-2 border-[#1A1A34] border-opacity-30'>
                  <div className='flex items-end col-span-12 gap-2 lg:col-span-8'>
                    <h2 className='lg:text-[45px] tracking-[-1px] text-[#1A1A34]'>
                      {ChargerData.name}
                    </h2>
                    <p className='mb-0 lg:text-lg text-[#1A1A34]'>
                      By <span className='underline'>{ChargerData.maker}</span>
                    </p>
                  </div>
                  <div className='flex items-center col-span-12 gap-2 lg:col-span-4 lg:flex-col-reverse lg:items-end'>
                    <p className='mb-0 text-sm lg:text-base text-[#1A1A34]'>
                      From
                      <span className='text-xl font-bold lg:text-3xl'>
                        {' '}
                        £{ChargerData.price}
                      </span>
                    </p>
                    <p className='mb-0 text-sm lg:text-base text-[#1A1A34]'>
                      Installation included
                    </p>
                  </div>
                </div>

                <div>
                  <p className='mb-4 text-sm lg:text-base text-[#1A1A34]'>
                    {ChargerData.description}
                  </p>
                  <ul className='grid grid-cols-12 mb-8'>
                    {ChargerData.features?.map((el, idx) => (
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

                <Link href='/quote-chargepoint/ohme-home-pro'>
                  <ButtonLink color='pink' className='w-full md:w-auto'>
                    Start your order
                  </ButtonLink>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-8 md:py-20 bg-[#1A1A34]'>
          <div className='container grid grid-cols-12'>
            <div className='col-span-12 md:col-span-4'>
              <Title className='mb-2 text-center text-white md:text-left'>
                More details
              </Title>
            </div>
            <div className='col-span-12 md:col-span-8 md:pl-8'>
              <Accordion.Root type='multiple'>
                {FaqData.map((el) => (
                  <Accordion.Item key={el.id} value={`item-${el.id}`}>
                    <Accordion.Trigger className='flex justify-between w-full gap-1 py-4 text-white border-b border-white AccordionTrigger'>
                      <p className='mb-0 text-base font-medium text-left'>
                        {el.title}
                      </p>
                      <i className='fa-solid fa-chevron-down pt-0.5 text-base'></i>
                    </Accordion.Trigger>
                    <Accordion.Content className='my-4 text-white'>
                      <ul className='pl-8 list-disc'>
                        {el.descriptions.map((el, idx) => (
                          <li key={idx} className='mb-4'>
                            {el}
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </section>

        <InstallCriteria />
      </Layout>
    </>
  );
};

export default Charger;
