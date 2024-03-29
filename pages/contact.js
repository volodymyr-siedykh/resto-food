import Head from 'next/head';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import FormMessage from '../components/FormMessage/FormMessage';
import Map from '../components/Map/Map';
import Subscribtion from '../components/Subscribtion/Subscribtion';
import TitlePage from '../components/TitlePage/TitlePage';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Restofood - Contact Us</title>
      </Head>
      <TitlePage
        title='Contact Us'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <Map />
      <ContactInfo />
      <FormMessage />
      <Subscribtion />
    </>
  );
};

export default ContactPage;
