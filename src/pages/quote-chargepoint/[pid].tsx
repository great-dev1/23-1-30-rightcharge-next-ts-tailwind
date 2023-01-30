import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from 'src/layout';
import ArrowLink from '@components/ArrowLink';
import Title from '@components/Title';
import Text from '@components/Text';
import ButtonLink from '@components/ButtonLink';

import InstallCriteria from '@components/InstallCriteria';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  installCheck: boolean;
  reduceCheck: boolean;
}

const StepsData = [
  {
    no: 1,
    text: 'Choose your charge point',
  },
  {
    no: 2,
    text: 'Provide photos of your home',
  },
  {
    no: 3,
    text: 'Get a free quote from our network of elite installers',
  },
  {
    no: 4,
    text: 'Book an installation date',
  },
  {
    no: 5,
    text: 'Get it promptly installed by a pro',
  },
];

const Quote: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Quote Chargepoint | {pid}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <section className='py-8 lg:py-12 bg-white'>
          <div className='container'>
            {/* Back Link */}
            <Link href='/chargepoints'>
              <ArrowLink back>Back to comparing chargers</ArrowLink>
            </Link>

            <div className='grid grid-cols-12 gap-8 pt-4 pb-12 border-b-4 border-[#1A1A34]'>
              <div className='col-span-12 lg:col-span-6'>
                <div className='text-center lg:text-left'>
                  <Title className='mb-6 text-[#1A1A34]'>
                    Let's confirm the price
                  </Title>
                  <p className='text-2xl font-semibold text-[#1A1A34]'>
                    We need to check that your install falls into our standard
                    criteria.
                  </p>
                  <Text className='mb-8 lg:mb-12 text-[#1A1A34]'>
                    If there are any additional costs, these will be detailed in
                    your free quote.
                  </Text>
                </div>

                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    installCheck: false,
                    reduceCheck: false,
                  }}
                  validate={(values: Values) => {
                    const errors: any = {};
                    if (!values.firstName) {
                      errors.firstName = 'Please enter first name.';
                    }
                    if (!values.lastName) {
                      errors.lastName = 'Please enter last name.';
                    }
                    if (!values.email) {
                      errors.email = 'Please enter email.';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = 'Please enter valid email.';
                    }
                    if (!values.phone) {
                      errors.phone = 'Please enter phone number.';
                    }
                    if (!values.installCheck) {
                      errors.installCheck =
                        'Please check this box if you want to proceed.';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Field
                        className='block w-full px-8 py-4 border border-transparent rounded-full text-lg bg-[#F1F4F9] duration-300 hover:border-[#FF007F] hover:shadow'
                        id='firstName'
                        name='firstName'
                        placeholder='First name'
                      />
                      <ErrorMessage
                        className='px-8 text-sm text-[#dc3545]'
                        name='firstName'
                        component='div'
                      />

                      <Field
                        className='block w-full mt-4 px-8 py-4 border border-transparent rounded-full text-lg bg-[#F1F4F9] duration-300 hover:border-[#FF007F] hover:shadow'
                        id='lastName'
                        name='lastName'
                        placeholder='Last name'
                      />
                      <ErrorMessage
                        className='px-8 text-sm text-[#dc3545]'
                        name='lastName'
                        component='div'
                      />

                      <Field
                        className='block w-full mt-4 px-8 py-4 border border-transparent rounded-full text-lg bg-[#F1F4F9] duration-300 hover:border-[#FF007F] hover:shadow'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                      />
                      <ErrorMessage
                        className='px-8 text-sm text-[#dc3545]'
                        name='email'
                        component='div'
                      />

                      <Field
                        className='block w-full mt-4 px-8 py-4 border border-transparent rounded-full text-lg bg-[#F1F4F9] duration-300 hover:border-[#FF007F] hover:shadow'
                        id='phone'
                        name='phone'
                        placeholder='Phone number'
                      />
                      <ErrorMessage
                        className='px-8 text-sm text-[#dc3545]'
                        name='phone'
                        component='div'
                      />

                      <label className='flex items-start gap-3 mt-12'>
                        <Field
                          className='mt-1.5'
                          type='checkbox'
                          name='installCheck'
                        />
                        <p className='mb-1 font-medium text-[#1A1A34]'>
                          I understand that my details will be passed through to
                          my selected installation company so they can respond
                          to my quote request{' '}
                          <span className='text-[#FF007F]'>*</span>
                        </p>
                      </label>
                      <ErrorMessage
                        className='px-8 text-sm text-[#dc3545]'
                        name='installCheck'
                        component='div'
                      />

                      <label className='flex items-start gap-3 mt-4'>
                        <Field
                          className='mt-1.5'
                          type='checkbox'
                          name='reduceCheck'
                        />
                        <p className='mb-6 font-medium text-[#1A1A34]'>
                          Want to learn more about reducing cost and carbon?
                          <br />
                          <span className='font-normal'>
                            Trusted by over 15,000 drivers, be the first to know
                            about the latest EV news and offers. Opt-out at any
                            time.
                          </span>
                        </p>
                      </label>

                      <ButtonLink color='pink' className='w-full'>
                        Submit
                      </ButtonLink>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className='col-span-12 lg:col-span-6'>
                <div className='hidden lg:block mb-12 p-5 rounded-[10px] shadow'>
                  <div className='grid grid-cols-12 items-center'>
                    <div className='col-span-4'>
                      <img
                        className='w-full h-auto'
                        src='/images/ohme.webp'
                        alt='ohme'
                      />
                    </div>
                    <div className='col-span-8 pl-6'>
                      <div className='flex items-end gap-1 pb-6 border-b border-black border-opacity-[0.1] text-[#1A1A34]'>
                        <span className='inline text-3xl font-bold'>
                          Home Pro
                        </span>{' '}
                        <span>
                          By <u>Ohme</u>
                        </span>
                      </div>
                      <div className='flex items-base gap-3 pt-6 text-[#1A1A34]'>
                        <span className='text-2xl'>From</span>{' '}
                        <span className='inline text-[45px] font-bold'>
                          £840
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='p-6 rounded-[10px] shadow'>
                  <h2 className='mb-6 text-2xl text-[#1A1A34]'>
                    Five simple steps to get your home charge point installed
                  </h2>
                  <ul>
                    {StepsData.map((el) => (
                      <li
                        key={el.no}
                        className='py-4 font-semibold text-[#1A1A34]'
                      >
                        {el.no}. {el.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InstallCriteria />
      </Layout>
    </>
  );
};

export default Quote;
