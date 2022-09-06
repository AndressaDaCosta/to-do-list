import styles from './Header.module.css';

import rocket from '../assets/rocket.svg';
import toDoLogo from '../assets/todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="rocket" />
            <img src={toDoLogo} alt="toDoLogo" />
        </header>
    )
}