import styles from './Link.module.css';
import arrowUpRight from "/Arrow-up-right.svg";

interface LinkProps {
    text?: string;
    url?: string;
 }

export default function Link( {text, url }: LinkProps) {  
    return (
        <div className={styles.Link_wrapper}>
            <a className={styles.link} href={url}>{text}</a>
            <img className={styles.arrow} src={arrowUpRight} alt="arrow up right" />
        </div>
    )
}