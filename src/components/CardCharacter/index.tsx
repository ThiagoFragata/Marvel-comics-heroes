/* eslint-disable @next/next/no-img-element */
import { Container, Content } from "./styles";
import Link from "next/link";

interface CardCharacterProps {
    id: number;
    name: string;
    thumbnail: string;
}

export function CardCharacter({ id, name, thumbnail }: CardCharacterProps) {
    return (
        <Container>
            <Link
                href={{
                    pathname: "/characterDetail/",
                    query: {
                        id,
                    },
                }}
            >
                <a>
                    <Content>
                        <div>
                            <img src={thumbnail} alt={name} />
                        </div>
                        <h3>{name}</h3>
                    </Content>
                </a>
            </Link>
        </Container>
    );
}
