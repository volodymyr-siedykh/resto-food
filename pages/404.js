import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/404.module.css'

const ContactPage = () => {
  return (
    <>
    <Head>
      <title>Restofood - Page Not Found</title>
    </Head>
      <div className={styles.bg}>
        <section className='section'>
          <div className='container center'>
            <div className={styles.wrapper}>
              <h1 className='heading-1-white text-center'>Page Not Found</h1>
              <Link href='/'>
                <a className='btn'>back</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;