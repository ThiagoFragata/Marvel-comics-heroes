import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Grid } from "./styles";

import md5 from "md5";
import { CardCharacter } from "../CardCharacter";
import { Pagination } from "../Static/Pagination";
import { SectionTitle } from "../Static/SectionTitle";

// example
// ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

// process.env.PUBLIC_KEY=20a812bb3e9adaf952b5a9af769aeb94
// process.env.PRIVATE_KEY=0eb8fba0c55ecdd5ea438a2c7add3ade14481425

const timeStamp = Math.floor(Date.now() / 1000);
const privateKey = "0eb8fba0c55ecdd5ea438a2c7add3ade14481425";
const publicKey = "20a812bb3e9adaf952b5a9af769aeb94";
const marvelKey = timeStamp + privateKey + publicKey;
const hash = md5(marvelKey);

const LIMIT = 20;

interface characterProps {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface RequestInfoPagination {
    total: number;
}

export function CharactersList() {
    const [requestInfo, setRequestInfo] = useState<RequestInfoPagination>();
    const [characters, setCharacters] = useState<characterProps[]>([]);
    const [offset, setOffset] = useState(0);

    const [hasSpinner, setHasSpinner] = useState(false);

    useEffect(() => {
        setHasSpinner(true);

        api.get(
            `/characters?limit=${LIMIT}&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        )
            .then((response) => {
                setCharacters(response.data.data.results);
                setRequestInfo(response.data.data);
                setHasSpinner(false);
            })
            .catch((error) => {
                setHasSpinner(true);
                console.error("Connection error: " + error);
            });
    }, [offset]);

    return (
        <Container>
            <SectionTitle title="Lista de Hérois" />
            <ul>
                {hasSpinner ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <Grid>
                            {characters.map((character) => {
                                return (
                                    <CardCharacter
                                        key={character.id}
                                        id={character.id}
                                        name={character.name}
                                        thumbnail={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                                    />
                                );
                            })}
                        </Grid>

                        {requestInfo && (
                            <Pagination
                                limit={LIMIT}
                                total={requestInfo.total}
                                offset={offset}
                                setOffset={setOffset}
                            />
                        )}
                    </>
                )}
            </ul>
        </Container>
    );
}
