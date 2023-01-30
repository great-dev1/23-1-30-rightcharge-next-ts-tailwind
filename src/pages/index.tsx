import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Slider from 'react-slick';
import * as Accordion from '@radix-ui/react-accordion';
import Layout from 'src/layout';
import Title from '@components/Title';
import Text from '@components/Text';
import SaveCard from '@components/SaveCard';
import ButtonLink from '@components/ButtonLink';
import ArrowLink from '@components/ArrowLink';
import GuideCard from '@components/GuideCard';

const Person = () => (
  <svg
    width='39'
    height='39'
    viewBox='0 0 39 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='19.5' cy='19.5' r='19.5' fill='white' />
    <g clipPath='url(#clip0_10014_11446)'>
      <path
        d='M28.8231 28.7508L20.5024 18.5819C20.4367 18.5002 20.3552 18.4345 20.2635 18.3895C20.1718 18.3445 20.0721 18.3211 19.9712 18.321C19.8703 18.3211 19.7705 18.3445 19.6789 18.3895C19.5872 18.4345 19.5057 18.5002 19.44 18.5819L11.171 28.7508C11.0831 28.8607 11.0263 28.9949 11.0072 29.1379C10.988 29.2809 11.0073 29.4268 11.0629 29.5585C11.1197 29.6895 11.2106 29.8003 11.3248 29.8777C11.439 29.9551 11.5716 29.9958 11.7069 29.995H28.2919C28.4276 29.9966 28.5608 29.9561 28.6753 29.8784C28.7899 29.8007 28.8808 29.6892 28.9371 29.5574C28.9933 29.4257 29.0125 29.2793 28.9923 29.1361C28.9721 28.9929 28.9133 28.859 28.8231 28.7508Z'
        fill='#FF007F'
      />
      <path
        d='M19.993 23.5534C18.6439 23.5534 17.3251 23.1265 16.2034 22.3266C15.0817 21.5268 14.2074 20.3899 13.6911 19.0598C13.1748 17.7297 13.0397 16.2661 13.3029 14.854C13.5661 13.442 14.2158 12.145 15.1697 11.1269C16.1237 10.1089 17.3391 9.41562 18.6622 9.13474C19.9854 8.85387 21.3569 8.99803 22.6033 9.54898C23.8497 10.0999 24.915 11.0329 25.6645 12.23C26.414 13.4271 26.8141 14.8344 26.8141 16.2741C26.8116 18.2039 26.0921 20.0539 24.8135 21.4184C23.5348 22.783 21.8013 23.5508 19.993 23.5534ZM19.993 11.0116C19.0156 11.0116 18.0602 11.321 17.2476 11.9005C16.435 12.4801 15.8017 13.3039 15.4279 14.2676C15.0541 15.2313 14.9565 16.2917 15.1475 17.3147C15.3386 18.3376 15.8096 19.277 16.501 20.0142C17.1925 20.7514 18.0733 21.2532 19.032 21.4561C19.9907 21.6589 20.9843 21.5538 21.887 21.154C22.7897 20.7541 23.561 20.0775 24.1033 19.2098C24.6456 18.3421 24.9346 17.3222 24.9337 16.2792C24.9324 14.8812 24.4115 13.5409 23.4852 12.5524C22.5589 11.5638 21.303 11.0079 19.993 11.0066V11.0116Z'
        fill='#1A1A34'
      />
    </g>
    <defs>
      <clipPath id='clip0_10014_11446'>
        <rect width='18' height='21' fill='white' transform='translate(11 9)' />
      </clipPath>
    </defs>
  </svg>
);

const Car = () => (
  <svg
    width='39'
    height='39'
    viewBox='0 0 39 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='19.5' cy='19.5' r='19.5' fill='white' />
    <path
      d='M33.5694 15.2218C33.3162 14.295 32.7711 13.478 32.0174 12.8959C31.2638 12.3137 30.3431 11.9985 29.3964 11.9985C28.4496 11.9985 27.529 12.3137 26.7753 12.8959C26.0217 13.478 25.4766 14.295 25.2234 15.2218C24.5166 15.462 23.9021 15.9218 23.4666 16.5363C23.0312 17.1508 22.7969 17.8887 22.7969 18.6459C22.7969 19.403 23.0312 20.141 23.4666 20.7555C23.9021 21.37 24.5166 21.8298 25.2234 22.07C25.4766 22.9968 26.0217 23.8138 26.7753 24.3959C27.529 24.9781 28.4496 25.2932 29.3964 25.2932C30.3431 25.2932 31.2638 24.9781 32.0174 24.3959C32.7711 23.8138 33.3162 22.9968 33.5694 22.07C34.2778 21.8309 34.8942 21.3712 35.331 20.7562C35.7679 20.1411 36.0029 19.4019 36.0029 18.6435C36.0029 17.8851 35.7679 17.1459 35.331 16.5308C34.8942 15.9158 34.2778 15.4561 33.5694 15.217V15.2218Z'
      fill='#FF007F'
    />
    <path
      d='M22.8887 28.0191C22.1669 27.9815 21.4743 27.7176 20.9062 27.2637C20.338 26.8098 19.9222 26.1883 19.716 25.4845H12.9375C12.7478 26.1937 12.3337 26.8197 11.759 27.2661C11.1844 27.7124 10.4811 27.9542 9.75775 27.9542C9.03439 27.9542 8.33116 27.7124 7.7565 27.2661C7.18184 26.8197 6.76772 26.1937 6.57802 25.4845H6.47916C6.10123 25.4787 5.73024 25.3805 5.39758 25.1982C5.06492 25.0159 4.78038 24.7548 4.56801 24.4372C4.13362 23.8096 3.93796 23.0433 4.01727 22.2804L4.29498 19.368C4.32968 18.8315 4.5148 18.3164 4.82842 17.8833C5.14205 17.4503 5.5711 17.1175 6.06492 16.9242L9.96255 15.6091L13.074 10.253C13.2733 9.87877 13.5673 9.56538 13.9256 9.34513C14.2839 9.12488 14.6935 9.00574 15.1123 9H24.3621C24.8872 9.01827 25.3931 9.20548 25.8068 9.53466C26.2205 9.86385 26.5206 10.318 26.6639 10.8316L28.6033 16.6373C28.7132 16.9786 28.7703 17.3351 28.7728 17.6942V24.5759C28.7729 24.7044 28.7475 24.8316 28.6982 24.9499C28.6489 25.0682 28.5766 25.1752 28.4856 25.2645C28.2998 25.4417 28.0531 25.5378 27.7984 25.5323L26.0755 25.4845C25.8678 26.1901 25.4498 26.8129 24.879 27.2668C24.3082 27.7208 23.6128 27.9837 22.8887 28.0191V28.0191ZM12.2126 23.586H20.4362C20.6612 23.5828 20.8798 23.6617 21.0525 23.8082C21.2252 23.9547 21.3406 24.1591 21.3777 24.3846C21.5377 25.365 22.1967 26.1062 22.9028 26.1062C23.6089 26.1062 24.2679 25.3841 24.4327 24.3846C24.4698 24.1591 24.5851 23.9547 24.7578 23.8082C24.9305 23.6617 25.1492 23.5828 25.3741 23.586H26.9134V17.6942C26.9132 17.5314 26.8861 17.3697 26.8334 17.216L24.9034 11.4294C24.7951 11.1138 24.588 10.8986 24.3856 10.8986H15.1076C15.0189 10.9105 14.9345 10.9447 14.8622 10.9981C14.7898 11.0516 14.7318 11.1226 14.6933 11.2046L11.5018 16.6995C11.3207 17.0061 11.039 17.2381 10.7063 17.3546L6.65332 18.7272C6.51187 18.8067 6.39376 18.9231 6.31105 19.0642C6.22835 19.2054 6.18402 19.3663 6.1826 19.5306L5.90017 22.4525C5.86798 22.7516 5.93957 23.0527 6.10258 23.3038C6.14337 23.3734 6.19942 23.4325 6.26638 23.4764C6.33333 23.5204 6.40938 23.5481 6.48858 23.5573H7.31235C7.53732 23.5541 7.75596 23.633 7.92866 23.7795C8.10136 23.926 8.2167 24.1304 8.25381 24.3559C8.41385 25.3363 9.07287 26.0775 9.77896 26.0775C10.485 26.0775 11.1441 25.3363 11.3088 24.3559C11.3477 24.1395 11.4589 23.9434 11.6235 23.8005C11.7881 23.6577 11.9962 23.5768 12.2126 23.5716V23.586Z'
      fill='#1A1A34'
    />
  </svg>
);

const StepsData = [
  {
    id: 1,
    image: '/images/step-1.png',
    description: '1. Choose your perfect home charge point',
  },
  {
    id: 2,
    image: '/images/step-2.png',
    description: '2. Get it installed promptly by a pro',
  },
  {
    id: 3,
    image: '/images/step-3.png',
    description: '3. Find an energy tariff that cuts your bills',
  },
];

const BrandsData = [
  {
    id: 1,
    image: '/images/the-telegraph.png',
  },
  {
    id: 2,
    image: '/images/autocar.png',
  },
  {
    id: 3,
    image: '/images/the-guardian.png',
  },
  {
    id: 4,
    image: '/images/fleet-world.png',
  },
  {
    id: 5,
    image: '/images/fully-charged.png',
  },
  {
    id: 6,
    image: '/images/techround.png',
  },
  {
    id: 7,
    image: '/images/reuters.png',
  },
];

const SavesData = [
  {
    id: 1,
    image: '/images/save-1.png',
    description:
      "Our recommended chargers let you schedule 'off-peak' overnight charging...",
    text: 'Compare chargers',
    url: '/',
  },
  {
    id: 2,
    image: '/images/save-2.png',
    description:
      'With the right energy tariff, this electricity can cost up to 78% less. Hurrah!',
    text: 'Compare tariffs',
    url: '/',
  },
];

const LogosData = [
  {
    id: 1,
    name: 'audi',
    image: '/images/audi.png',
  },
  {
    id: 2,
    name: 'autocar',
    image: '/images/autocar.png',
  },
  {
    id: 3,
    name: 'ford',
    image: '/images/ford.png',
  },
  {
    id: 4,
    name: 'bmw',
    image: '/images/bmw.png',
  },
  {
    id: 5,
    name: 'citreon',
    image: '/images/citreon.png',
  },
  {
    id: 6,
    name: 'vauxhall',
    image: '/images/vauxhall.png',
  },
  {
    id: 7,
    name: 'honda',
    image: '/images/honda.png',
  },
  {
    id: 8,
    name: 'jaguar',
    image: '/images/jaguar.png',
  },
  {
    id: 9,
    name: 'kia',
    image: '/images/kia.png',
  },
  {
    id: 10,
    name: 'landlover',
    image: '/images/landrover.png',
  },
  {
    id: 11,
    name: 'mg',
    image: '/images/mg.png',
  },
  {
    id: 12,
    name: 'mitsubishi',
    image: '/images/mitsubishi.png',
  },
  {
    id: 13,
    name: 'toyota',
    image: '/images/toyota.png',
  },
  {
    id: 14,
    name: 'lexus',
    image: '/images/lexus.png',
  },
  {
    id: 15,
    name: 'nissan',
    image: '/images/nissan.png',
  },
  {
    id: 16,
    name: 'renault',
    image: '/images/renault.png',
  },
  {
    id: 17,
    name: 'volkswagen',
    image: '/images/volkswagen.png',
  },
];

const FaqData = [
  {
    id: 1,
    title: 'How should I prepare for my EV charger installation?',
    description:
      'We’ll walk you through the steps of getting a charger installed. The most important thing we need from you is to be at home the day of installation.',
  },
  {
    id: 2,
    title: 'Do I need a dedicated electric car charger?',
    description:
      'Whilst having a home charger isn’t a requirement to charge your car at home, having a dedicated charger has many benefits including being able to schedule your charge to utilise the cheaper and greener off-peak energy periods at night.',
  },
  {
    id: 3,
    title: 'Can’t I just use a regular plug?',
    description:
      "Yes, but you'll normally charge at only a third of the speed that you would if you have a dedicated electric car charger",
  },
  {
    id: 4,
    title: 'Do all chargers work for my electric car model?',
    description:
      'Yes! Most new cars and chargers have a Type 2 connection. Please get in touch if you have any concerns about connectivity between your car and charger.',
  },
  {
    id: 5,
    title: 'Aren’t all home charge points more or less the same?',
    description:
      'No there are very important differences between different chargers. We characterise chargers by 3 features, smart charging, fuse protection and solar integration. If you want to find out more about these features, this guide explains all you need to know.',
  },
];

const GuidsData = [
  {
    id: 1,
    image: '/images/guide-1.png',
    title: 'The £350 OZEV Grant (formerly OLEV Grant)',
    description:
      'What are the rules of the OZEV Homecharge Grant? And how do you take advantage ...',
    url: '/',
  },
  {
    id: 2,
    image: '/images/guide-2.png',
    title: 'Ultimate guide: Home electric car chargers',
    description: 'A complete guide to choosing the right charger for your home',
    url: '/',
  },
  {
    id: 3,
    image: '/images/guide-3.png',
    title: 'Charging your electric car with solar panels',
    description:
      "Want to charge your electric car with solar panels? At Rightcharge, we're big fans of renewable energy solutions.",
    url: '/',
  },
];

const LogoSliderSettings = {
  arrows: false,
  focusOnSelect: true,
  variableWidth: true,
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Compare Electric Car Home Chargers- EV Tariff Comparison</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* Hero */}
        <section className='hero flex items-center h-full py-[30px] md:min-h-[calc(100vh-84px-94px)] md:bg-center bg-no-repeat bg-cover'>
          <div className='container grid grid-cols-12'>
            <div className='col-span-12 lg:col-span-10 xl:col-span-9'>
              <h1 className='text-center md:text-left text-4xl md:text-[65px] font-semibold tracking-[-1px] leading-[1.3] md:leading-[68px] text-white '>
                Sort your electric car
                <br />
                home charging and
                <br />
                save money
              </h1>
              <p className='max-w-[540px] mb-48 md:mb-12 text-center md:text-left text-lg md:text-[22px] font-medium leading-6 md:leading-9 text-white'>
                We help you choose the right charger, get it installed, and find
                an energy tariff to save up to £400 a year
              </p>

              <div className='-mb-[152px] md:mb-0'>
                <div className='flex items-center p-2 mb-6 bg-white rounded-full shadow-md'>
                  <div className='flex flex-col w-1/2 md:w-[30%] pl-6 pr-1 border-r border-black'>
                    <label
                      htmlFor='postcode'
                      className='font-medium text-[#1A1A34]'
                    >
                      Your postcode
                    </label>
                    <input
                      className='text-[#6C757D] focus-visible:outline-none'
                      name='postcode'
                      placeholder='e.g. SL4 5EU'
                    />
                  </div>
                  <div className='flex flex-col w-1/2 md:w-[30%] pl-6 pr-1'>
                    <label
                      htmlFor='carname'
                      className='font-medium text-[#1A1A34]'
                    >
                      Your car
                    </label>
                    <input
                      className='text-[#6C757D] focus-visible:outline-none'
                      name='carname'
                      placeholder='e.g. Audi'
                    />
                  </div>
                  <Link
                    href='/chargepoints'
                    className='hidden flex-grow md:flex items-center justify-center gap-1 rounded-full py-3.5 text-white bg-[#FF007F]'
                  >
                    <span className='text-lg font-medium text-white'>
                      Choose my home charger
                    </span>
                    {/* <Arrow /> */}
                  </Link>
                </div>

                <Link
                  href='/chargepoints'
                  className='md:hidden flex items-center justify-center gap-1 w-full rounded-full p-5 text-white bg-[#FF007F]'
                >
                  <span className='text-lg font-medium text-white'>
                    Choose my home charger
                  </span>
                  {/* <Arrow /> */}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className='bg-[#1A1A34]'>
          <div className='container grid grid-cols-12 pt-[150px] pb-8 md:pt-8 text-center text-white'>
            <div className='flex items-center justify-center col-span-12 px-2 mb-6 md:col-span-4 md:mb-0'>
              <img
                className='h-auto max-w-full'
                src='/images/trustpilot.png'
                alt='trustpilot'
              />
            </div>
            <div className='flex flex-col items-center col-span-6 px-2 border-white md:col-span-4 md:border-l md:border-r'>
              <div className='relative md:top-[-52px]'>
                <Person />
              </div>
              <p className='my-4 text-base md:-mt-8 md:text-lg'>
                Money saved for drivers
              </p>
              <h6 className='text-lg md:text-[22px]'>£2,480,000</h6>
            </div>
            <div className='flex flex-col items-center col-span-6 px-2 md:col-span-4'>
              <div className='relative md:top-[-52px]'>
                <Car />
              </div>
              <p className='my-4 text-base md:-mt-8 md:text-lg'>
                Carbon emissions cut
              </p>
              <h6 className='text-lg md:text-[22px]'>570 tonnes</h6>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className='py-12 bg-white md:py-20'>
          <div className='container grid items-center grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-5'>
              <Title className='mb-6 text-center md:text-left text-[#1A1A34]'>
                Three simple steps to get you sorted
              </Title>
            </div>
            <div className='col-span-12 lg:col-span-7'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {StepsData.map((el) => (
                  <div
                    key={el.id}
                    className='relative p-6 md:p-0 rounded-lg bg-[#F7FAFC] md:bg-transparent'
                  >
                    <img
                      className='absolute md:relative -top-4 right-2 w-auto md:w-auto h-[120px] md:h-auto'
                      src={el.image}
                      alt='step'
                    />
                    <Text className='w-2/3 mb-0 md:w-full text-[#1A1A34]'>
                      {el.description}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className='py-6 md:py-8 bg-[#F1F4F9]'>
          <div className='flex flex-col items-center justify-center gap-4 xl:flex-row'>
            <Text className='mb-0 text-[#1A1A34]'>Featured in</Text>
            <div className='flex flex-wrap items-center justify-evenly md:gap-8'>
              {BrandsData.map((el) => (
                <img
                  key={el.id}
                  className='max-w-[200px] max-h-[72px] p-2'
                  src={el.image}
                  alt='logo'
                />
              ))}
            </div>
          </div>
        </section>

        {/* Save an average of £360 a year  */}
        <section className='relative py-12 bg-white md:py-20'>
          <div className='container relative z-10 flex flex-col items-center text-center'>
            <Title className='mb-2 text-[#1A1A34]'>
              Save an average of £360 a year
            </Title>
            <Text className='max-w-[420px] mb-12 text-[#1A1A34]'>
              Psst... Did you know you can unlock hidden savings when you
              combine the right charger and tariff?
            </Text>
            <div className='flex flex-col justify-center gap-8 md:flex-row'>
              {SavesData.map((el) => (
                <SaveCard
                  key={el.id}
                  image={el.image}
                  description={el.description}
                  url={el.url}
                  text={el.text}
                />
              ))}
            </div>
          </div>
          <img
            className='hidden md:block absolute top-[15%] left-[-51px]'
            src='/images/car-sm.png'
            alt='car'
          />
        </section>

        {/* Logos */}
        <section className='relative py-8 text-center bg-[#F1F4F9]'>
          <Text className='mb-0 text-[#1A1A34]'>
            Charge points for every car
          </Text>
          <Slider {...LogoSliderSettings}>
            {LogosData.map((el) => (
              <div key={el.id} className='mx-6 mt-4 md:mx-12'>
                <div className='flex items-center'>
                  <img
                    className='w-[70px] h-[70px] object-contain'
                    src={el.image}
                    alt={el.name}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Chargers */}
        <section className='py-12 bg-white md:py-20'>
          <div className='container'>
            <div className='grid grid-cols-12 mb-12 gap-y-8'>
              <div className='col-span-12 lg:col-span-7'>
                <div className='lg:max-w-[445px] h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                  <Title className='mb-6 text-[#1A1A34]'>Right charger</Title>
                  <Text className='mb-10 text-[#1A1A34]'>
                    With home charge points, one size doesn't fit all.
                  </Text>
                  <Text className='mb-10 text-[#1A1A34]'>
                    Our experts give you personalised recommendations, whether
                    you want fast charging or low cost, sleek looks or solar
                    compatibility.
                  </Text>
                  <Link href='/'>
                    <ButtonLink color='black'>Find my charge point</ButtonLink>
                  </Link>
                </div>
              </div>
              <div className='order-first col-span-12 lg:order-last lg:col-span-5'>
                <img
                  className='w-full h-auto max-w-lg mx-auto'
                  src='/images/charger.png'
                  alt='charger'
                />
              </div>
            </div>

            <div className='grid grid-cols-12 mb-12 gap-y-8'>
              <div className='col-span-12 lg:col-span-5'>
                <img
                  className='max-w-[445px] w-full h-auto mx-auto'
                  src='/images/installer.gif'
                  alt='installer'
                />
              </div>
              <div className='col-span-12 lg:col-start-7 lg:col-span-6'>
                <div className='lg:max-w-[445px] h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                  <Title className='mb-6 text-[#1A1A34]'>Right installer</Title>
                  <Text className='mb-10 text-[#1A1A34]'>
                    We've handpicked our network of installation companies.
                    They're OLEV/OZEV-approved, top-rated and fairly priced.
                  </Text>
                  <Text className='mb-10 text-[#1A1A34]'>
                    Other charger installers can leave you waiting months. Our
                    pros are typically with you in less than 3 weeks.
                  </Text>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-12 gap-y-8'>
              <div className='col-span-12 lg:col-span-7'>
                <div className='lg:max-w-[445px] h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                  <Title className='mb-6 text-[#1A1A34]'>
                    Right energy tariff
                  </Title>
                  <Text className='mb-10 text-[#1A1A34]'>
                    Charging at home doesn't have to send energy costs through
                    the roof.
                  </Text>
                  <Text className='mb-10 text-[#1A1A34]'>
                    Our experts find you the best EV-friendly energy deal on the
                    market. They forecast your costs, so you know what to
                    expect.
                  </Text>
                  <Link href='/'>
                    <ButtonLink color='black'>Find my energy tariff</ButtonLink>
                  </Link>
                </div>
              </div>
              <div className='order-first col-span-12 lg:order-last lg:col-span-5'>
                <img
                  className='w-full h-auto max-w-lg mx-auto'
                  src='/images/meter.png'
                  alt='meter'
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='py-12 md:py-20 bg-[#1A1A34]'>
          <div className='container grid grid-cols-12'>
            <div className='col-span-12 md:col-span-5'>
              <Title className='text-white'>Home charging 101</Title>
            </div>
            <div className='col-span-12 md:col-span-7 md:pl-8'>
              <h4 className='mb-4 text-[22px] font-medium text-white'>
                Your questions answered
              </h4>
              <Accordion.Root type='multiple'>
                {FaqData.map((el) => (
                  <Accordion.Item key={el.id} value={`item-${el.id}`}>
                    <Accordion.Trigger className='flex justify-between w-full gap-1 py-4 text-white border-b border-white AccordionTrigger'>
                      <p className='mb-0 text-base font-bold text-left'>
                        {el.title}
                      </p>
                      <i className='fa-solid fa-chevron-down pt-0.5 text-base'></i>
                    </Accordion.Trigger>
                    <Accordion.Content className='my-4 text-white'>
                      {el.description}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
              <Link href='/'>
                <ArrowLink className='mt-4' small white>
                  See More
                </ArrowLink>
              </Link>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className='py-12 bg-white md:py-20'>
          <div className='container grid grid-cols-12 gap-8'>
            <div className='col-span-12 lg:col-span-5'>
              <img
                className='w-full h-auto max-w-lg mx-auto'
                src='/images/support.gif'
                alt='support'
              />
            </div>
            <div className='col-span-12 lg:col-span-7'>
              <div className='lg:max-w-[445px] h-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                <Title className='mb-6 text-[#1A1A34]'>
                  Support at every step
                </Title>
                <Text className='mb-10 text-[#1A1A34]'>
                  Going electric can be complicated. Our friendly team is here
                  to guide you through it and help you avoid potholes along the
                  way.
                </Text>
                <Text className='mb-10 text-[#1A1A34]'>
                  Want to talk? We're only a phone call away.
                </Text>
                <Link href='/'>
                  <ArrowLink>Get in touch</ArrowLink>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Positive Energy */}
        <section className='relative flex items-center justify-center h-[45vh] md:h-screen bg-white'>
          <img
            className='absolute w-full h-[250px] md:h-auto object-cover'
            src='/images/green-bg.png'
            alt='green'
          />
          <div className='container relative z-10 text-center'>
            <h2 className='mb-4 md:mb-8 text-3xl md:text-[45px] font-medium text-white'>
              Positive energy
            </h2>
            <p className='max-w-lg mx-auto mb-0 text-lg font-medium text-white'>
              We give you a greener way to charge your car. Use your clever
              charge point to schedule your charging for the early morning when
              electricity is cleanest and cut your carbon by an average of 25%.
              Welcome to the green revolution.
            </p>
          </div>
        </section>

        {/* Charging Guides */}
        <section className='py-12 md:py-20 bg-[#F1F4F9]'>
          <div className='container flex flex-col items-center'>
            <Title className='mb-10 md:mb-16 text-center text-[#1A1A34]'>
              Charging guides
            </Title>
            <div className='flex flex-col md:flex-row gap-8 mb-16'>
              {GuidsData.map((el) => (
                <div
                  key={el.id}
                  className={el.id === 1 ? 'md:w-2/5' : 'md:w-4/12'}
                >
                  <GuideCard
                    image={el.image}
                    title={el.title}
                    description={el.description}
                    url={el.url}
                  />
                </div>
              ))}
            </div>
            <Link href='/'>
              <ButtonLink>All charging guides</ButtonLink>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
