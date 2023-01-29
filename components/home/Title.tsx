import styles from '@/styles/Home.module.css';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
    </main>
  );
};

export default Title;
