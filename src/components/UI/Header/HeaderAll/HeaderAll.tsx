import HeaderPublic from "../HeaderPublic/HeaderPublic";
import Link from "next/link";
import styles from "./HeaderAll.module.css";

const HeaderAll = () => {
    return (
        <header className={styles.HeaderAll}>
            <Link href={'/'}>Заказы</Link>
            <HeaderPublic />
        </header>
    );
};

export default HeaderAll;