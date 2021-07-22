/* eslint-disable @next/next/no-img-element */
import md5 from "md5";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ComicCard from "../components/Static/ComicCard";
import { Footer } from "../components/Static/Footer";
import { Header } from "../components/Static/Header";
import { SectionTitle } from "../components/Static/SectionTitle";
import { api } from "../services/api";
import { Container, Content, Grid } from "../styles/CharacterDetailsStyles";
import { GlobalStyle } from "../styles/globals";

const timeStamp = Math.floor(Date.now() / 1000);
const privateKey = "0eb8fba0c55ecdd5ea438a2c7add3ade14481425";
const publicKey = "20a812bb3e9adaf952b5a9af769aeb94";
const marvelKey = timeStamp + privateKey + publicKey;
const hash = md5(marvelKey);

interface Character {
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface Comics {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export default function CharacterDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [hasSpinner, setHasSpinner] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<Character>();
    const [comics, setComics] = useState<Comics[]>([]);

    useEffect(() => {
        setHasSpinner(true);

        api.get(
            `characters/${id}?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        )
            .then((response) => {
                setCharacterDetails(response.data.data.results[0]);
            })
            .catch((error) => {
                console.error(error);
            });

        api.get(
            `characters/${id}/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        )
            .then((response) => {
                setComics(response.data.data.results);
                setHasSpinner(false);
            })
            .catch((error) => {
                setHasSpinner(true);
                console.error(error);
            });
    }, [id]);

    return (
        <>
            <GlobalStyle />
            <Header />
            <Container>
                {hasSpinner ? (
                    <h1>Loading</h1>
                ) : (
                    <>
                        {characterDetails && (
                            <>
                                <SectionTitle title={`Um pouco sobre ${characterDetails.name}`} />

                                <Content>
                                    <div className="containerImage">
                                        <img
                                            src={`${characterDetails.thumbnail.path}/standard_fantastic.${characterDetails.thumbnail.extension}`}
                                            alt={`Imagem de ${characterDetails.name}`}
                                        />
                                    </div>

                                    <div className="context">
                                        <div className="name">
                                            <h2>{characterDetails.name}</h2>
                                        </div>
                                        <div className="description">
                                            <p>
                                                {characterDetails.description
                                                    ? characterDetails.description
                                                    : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}
                                            </p>
                                        </div>
                                    </div>
                                </Content>

                                <SectionTitle
                                    title={`${characterDetails.name}'s comics`}
                                />

                                <Grid>
                                    {comics.map((comic) => (
                                        <ComicCard
                                            key={`${comic.id}`}
                                            image={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                                            title={comic.title}
                                        />
                                    ))}
                                </Grid>
                            </>
                        )}
                    </>
                )}
            </Container>
            <Footer />
        </>
    );
}
