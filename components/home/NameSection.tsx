import People from '@/data/Data';
import styles from '@/styles/Home.module.css';

interface NameSectionProps {
  categoryHandler: (e: any) => void;
}

const NameSection = ({ categoryHandler }: NameSectionProps) => {
  return (
    <div className={styles.nameSection}>
      {People.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className={styles.name}>
            <button onClick={categoryHandler}>{name}</button>
          </div>
        );
      })}
    </div>
  );
};

export default NameSection;
