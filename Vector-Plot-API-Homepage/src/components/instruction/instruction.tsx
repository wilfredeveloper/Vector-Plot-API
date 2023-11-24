import styles from "./instruction.module.css"

interface InstructionProps {
    text?: string;
    children?: React.ReactNode; // Add this line
}

export default function Instruction( { text, children }: InstructionProps) {
    return (
        <div className={styles.instruction_group}>
            <li className={styles.instruction}>{text}{children}</li>
        </div>
    )
}