import React, { useEffect, useState } from "react";
import { api, marvelApi, token } from "../../services/api";

import { Container, Grid } from "./styles";

import { CardCharacter } from "../CardCharacter";
import { Pagination } from "../../ComponentsStatic/Pagination";
import { SectionTitle } from "../../ComponentsStatic/SectionTitle";
import { Spinner } from "../../ComponentsStatic/Spinner";


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

interface responseProps {
    description: string;
    id: number;
    title: string;
    thumbnail: string;
}

export function CharactersList() {
    const [requestInfo, setRequestInfo] = useState<RequestInfoPagination>();
    const [characters, setCharacters] = useState<characterProps[]>([]);
    const [offset, setOffset] = useState(0);

    const [hasSpinner, setHasSpinner] = useState(false);
    const [hasConnect, setHasConnect] = useState(false);

    useEffect(() => {
        setHasSpinner(true);

        api.get(
            `/characters?limit=${LIMIT}&offset=${offset}&ts=${marvelApi.timeStamp}&apikey=${marvelApi.publicKey}&hash=${token}`
        )
            .then((response) => {
                setCharacters(response.data.data.results);
                setRequestInfo(response.data.data);
                setHasSpinner(false);
            })
            .catch((error) => {
                setHasConnect(true);
                console.error("Connection error: " + error);
            });
    }, [offset]);

    return (
        <Container>
            <SectionTitle title="List all characters" />
            <ul>
                {hasConnect ? (
                    <SectionTitle title="Error in connection API" />
                ) : (
                    <>
                        {hasSpinner ? (
                            <Spinner />
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
                    </>
                )}
            </ul>
        </Container>
    );
}
