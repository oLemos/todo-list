import styles from './Header.module.css'

import logo from '../assets/ignite-todo-logo.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="todo" />
		</header>
	)
}
