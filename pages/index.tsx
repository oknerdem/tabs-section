import { useState } from 'react';
import Header from '@/components/Header';
import Title from '@/components/home/Title';
import NameSection from '@/components/home/NameSection';

const Home = () => {
  const title = 'Experience';
  const header = 'Tabs';
  const content =
    'Tabs App with Next.js & Tailwind CSS & TypeScript & AutoAnimate';

  const [name, setName] = useState<string>('John');

  const currentName = (e: any) => {
    setName(e.target.innerText);
  };

  return (
    <>
      <Header title={header} content={content} />
      <Title title={title} />
      <NameSection categoryHandler={currentName} />
    </>
  );
};

export default Home;
