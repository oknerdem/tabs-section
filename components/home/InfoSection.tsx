import { useState } from 'react';
import People from '@/data/Data';
import styles from '@/styles/Home.module.css';
import NameSection from './NameSection';

const InfoSection = () => {
  const [selectedName, setSelectedName] = useState<string>('john');

  const person = People.find(
    person => person.name.toLowerCase() === selectedName
  );

  const nameHandler = (e: any) => {
    const name = e.target.innerText.toLowerCase();
    setSelectedName(name);
  };

  return (
    <>
      <section className={styles.sections}>
        <NameSection selectedName={selectedName} nameHandler={nameHandler} />
        <div className={styles.infoSection}>
          <div className={styles.info}>
            <p className="text-gray-500 dark:text-gray-400">{person?.job}</p>
            <p className="text-gray-500 dark:text-gray-400">
              {person?.duration}
            </p>
          </div>
          <div className={styles.info}>
            <section className="flex flex-col gap-2">
              <p className="text-gray-500 dark:text-gray-400">{person?.info}</p>
              <p className="text-gray-500 dark:text-gray-400">
                {person?.info2}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {person?.info3}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {person?.info4}
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
