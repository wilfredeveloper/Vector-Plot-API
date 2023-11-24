import "./roundedBtn.module.css"

interface RoundedBtnProps {
    text: string;
}

export default function RoundedBtn({ text }: RoundedBtnProps) {
    return (
        <button>
            {text}
        </button>
    );
}