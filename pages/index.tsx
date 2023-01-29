import { NextPage } from 'next';
import Header from '@/components/Header';
import Title from '@/components/home/Title';
import InfoSection from '@/components/home/InfoSection';

const Home: NextPage = () => {
  const title = 'Experience';
  const header = 'Tabs';
  const content =
    'Tabs App with Next.js & Tailwind CSS & TypeScript & AutoAnimate';

  return (
    <>
      <Header title={header} content={content} />
      <Title title={title} />
      <InfoSection />
    </>
  );
};

export default Home;
