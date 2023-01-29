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
          <div>
            <p className="text-neutral-700 dark:text-neutral-100 text-2xl">
              {person?.job}
            </p>
            <div className="pb-3 pt-2">
              <p className="px-2 py-1 bg-zinc-700 max-w-fit rounded-lg text-zinc-300 text-base">
                {person?.name}
              </p>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              {person?.duration}
            </p>
          </div>
          <div className={styles.info}>
            <section className="flex flex-col gap-2">
              {person?.infos &&
                Object.values(person.infos).map((info, index) => (
                  <p
                    key={index}
                    className="text-neutral-700 dark:text-neutral-400"
                  >
                    🍃 {info}
                  </p>
                ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
