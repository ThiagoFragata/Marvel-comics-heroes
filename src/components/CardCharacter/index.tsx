/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

interface CardCharacterProps {
    id: number;
    name: string;
    thumbnail: string;
}

export function CardCharacter({ id, name, thumbnail }: CardCharacterProps) {
    return (
        <>
            <Link
                href={{
                    pathname: "/CharacterDetail/",
                    query: {
                        id,
                    },
                }}
            >
                <a>
                    <li>
                        <img
                            src={thumbnail}
                            alt={name}
                        />
                        <h1>{name}</h1>
                    </li>
                </a>
            </Link>
        </>
    );
}
