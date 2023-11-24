interface textHighlightProps {
    text?: string;
}

export default function textHighlight({ text }: textHighlightProps) {
    return (
        <span>
            {text}
        </span>
    )
}