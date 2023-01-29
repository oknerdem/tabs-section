import { useState } from 'react';
import Header from '@/components/Header';
import Title from '@/components/home/Title';
import NameSection from '@/components/home/NameSection';
import InfoSection from '@/components/home/InfoSection';

const Home = () => {
  const title = 'Experience';
  const header = 'Tabs';
  const content =
    'Tabs App with Next.js & Tailwind CSS & TypeScript & AutoAnimate';

  const [selectedName, setSelectedName] = useState<string>('john');

  const nameHandler = (e: any) => {
    const name = e.target.innerText.toLowerCase();
    setSelectedName(name);
  };

  return (
    <>
      <Header title={header} content={content} />
      <Title title={title} />
      <div className="flex flex-col md:flex-row  max-w-2xl w-full items-center mx-auto gap-10">
        <NameSection selectedName={selectedName} nameHandler={nameHandler} />
        <InfoSection selectedName={selectedName} />
      </div>
    </>
  );
};

export default Home;
