import People from '@/data/Data';
import styles from '@/styles/Home.module.css';

interface InfoSectionProps {
  selectedName: string;
}

const InfoSection = ({ selectedName }: InfoSectionProps) => {
  const person = People.find(
    person => person.name.toLowerCase() === selectedName
  );

  return (
    <div className={styles.infoSection}>
      <div className={styles.info}>
        <p className="text-gray-500 dark:text-gray-400">{person?.job}</p>
        <p className="text-gray-500 dark:text-gray-400">{person?.duration}</p>
      </div>
      <div className={styles.info}>
        <section className="flex flex-col gap-2">
          <p className="text-gray-500 dark:text-gray-400">{person?.info}</p>
          <p className="text-gray-500 dark:text-gray-400">{person?.info2}</p>
          <p className="text-gray-500 dark:text-gray-400">{person?.info3}</p>
          <p className="text-gray-500 dark:text-gray-400">{person?.info4}</p>
        </section>
      </div>
    </div>
  );
};

export default InfoSection;
