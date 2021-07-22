import { Title } from "./styles";

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <Title>
            <h1>{title}</h1>
        </Title>
    );
}
