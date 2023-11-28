import Button from './Button'
import styles from '../styles/PrimaryButton.module.scss'

export default function PrimaryButton({ text, onClick }) {
    return(
        <Button className={styles.button} onClick={onClick} text= {text} />
    );
};
