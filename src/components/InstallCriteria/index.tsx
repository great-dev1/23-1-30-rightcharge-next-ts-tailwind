import Title from '@components/Title';
import Text from '@components/Text';

const CriteriaData = [
  'Up to 15m of standard or armoured power cable run from your consumer unit to your charge point and clipped to the wall',
  'One hole drilled through one of your internal walls, one drilled through your external wall and the cable pulled through',
  'Fitting and testing of electrical connections and protections, as required',
  'Installation of components to meet the 18th Edition IET wiring regulations, as required (MCBs / RCD / earth rods in soft ground)',
  'No special civil or electrical works',
];

const InstallCriteria = () => {
  return (
    <section className='py-8 md:py-20 bg-white'>
      <div className='container grid grid-cols-12 lg:gap-8'>
        <div className='col-span-12 lg:col-span-6 px-4'>
          <Title className='mb-4 text-center lg:text-left text-[#1A1A34]'>
            Standard Installation Criteira
          </Title>
          <Text className='text-[#1A1A34]'>
            Your installation company will check that the requirements of your
            installation fall within the following Standard Installation
            criteria. If there are any extra costs involved in your installation
            they will let you know how much they are and what they are for in
            your quote.
          </Text>
          <ul className='list-disc text-[#1A1A34]'>
            {CriteriaData.map((el, idx) => (
              <li key={idx}>
                <Text className='mb-4 text-[#1A1A34]'>{el}</Text>
              </li>
            ))}
          </ul>
          <Text className='mb-0 font-semibold text-[#1A1A34]'>
            If your installer spots any extra work required they will detail any
            extra costs at the quote stage.
          </Text>
        </div>

        <div className='order-first lg:order-last col-span-12 lg:col-span-6'>
          <img
            className='max-w-[320px] lg:max-w-none w-full h-auto mx-auto'
            src='/images/installer.png'
            alt='install'
          />
        </div>
      </div>
    </section>
  );
};

export default InstallCriteria;
