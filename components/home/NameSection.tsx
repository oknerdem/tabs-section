import People from '@/data/Data';
import styles from '@/styles/Home.module.css';

interface NameSectionProps {
  selectedName: string;
  nameHandler: (e: any) => void;
}

const NameSection = ({ selectedName, nameHandler }: NameSectionProps) => {
  return (
    <div className={styles.nameSection}>
      {People.map(person => {
        const { id, name } = person;
        const nameL = name.toLowerCase();
        return (
          <div key={id} className={styles.name}>
            <button
              onClick={nameHandler}
              className={`px-2 py-1 w-20 rounded duration-200 ${
                nameL === selectedName &&
                'bg-indigo-500 dark:bg-indigo-700 text-white'
              }`}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NameSection;
