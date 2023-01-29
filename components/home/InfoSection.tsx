import { useState } from 'react';
import People from '@/data/Data';
import InfoTable from '@/components/home/InfoTable';
import NameSection from '@/components/home/NameSection';
import styles from '@/styles/Home.module.css';

const InfoSection = () => {
  const [selectedName, setSelectedName] = useState<string>('john');

  const nameHandler = (e: any) => {
    const name = e.target.innerText.toLowerCase();
    setSelectedName(name);
  };

  return (
    <>
      <section className={styles.sections}>
        <NameSection selectedName={selectedName} nameHandler={nameHandler} />
        {People.map((person, index) => {
          if (person.name.toLowerCase() !== selectedName) return null;
          return <InfoTable key={index} person={person} />;
        })}
      </section>
    </>
  );
};

export default InfoSection;
