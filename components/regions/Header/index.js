import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      Spotify logo
      <br />
      Top 10 Artists
    </header>
  );
};
export default Header;
