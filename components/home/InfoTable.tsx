import styles from '@/styles/Home.module.css';

interface InfoTableProps {
  key: number;
  person: {
    name: string;
    job: string;
    duration: string;
    infos: {
      [key: number]: number;
    };
  };
}

const InfoTable = ({ person, key }: InfoTableProps) => {
  const { name, job, duration, infos } = person;
  return (
    <div key={key} className={styles.infoSection}>
      <div>
        <p className={styles.infoTitle}>{job}</p>
        <div className={styles.spacing}>
          <p className={styles.infoName}>{name}</p>
        </div>
        <p className={styles.infoDuration}>{duration}</p>
      </div>
      <div className={styles.info}>
        <section className={styles.infoDescGen}>
          {infos &&
            Object.values(person.infos).map((info, index) => (
              <p key={index} className={styles.infoDescription}>
                🍃 {info}
              </p>
            ))}
        </section>
      </div>
    </div>
  );
};

export default InfoTable;
