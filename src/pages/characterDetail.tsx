/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Container, Content, Grid } from "../styles/CharacterDetailsStyles";
import { GlobalStyle } from "../styles/globals";

import { api, marvelApi, token } from "../services/api";

import { Header } from "../ComponentsStatic/Header";
import { ComicCard } from "../ComponentsStatic/ComicCard";
import { Footer } from "../ComponentsStatic/Footer";
import { SectionTitle } from "../ComponentsStatic/SectionTitle";
import { Spinner } from "../ComponentsStatic/Spinner";

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

    const [hasConnect, setHasConnect] = useState(false);
    const [hasSpinner, setHasSpinner] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<Character>();
    const [comics, setComics] = useState<Comics[]>([]);

    useEffect(() => {
        setHasSpinner(true);

        api.get(
            `characters/${id}?&ts=${marvelApi.timeStamp}&apikey=${marvelApi.publicKey}&hash=${token}`
        )
            .then((response) => {
                setCharacterDetails(response.data.data.results[0]);
            })
            .catch((error) => {
                console.error(error);
            });

        api.get(
            `characters/${id}/comics?&ts=${marvelApi.timeStamp}&apikey=${marvelApi.publicKey}&hash=${token}`
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
            <Head>
                <title>Details character</title>
                <meta
                    name="description"
                    content="Aqui você encontra seu heroi da Marvel e tudo mais!"
                />
                <link
                    rel="shortcut icon"
                    href="favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <Header />
            <Container>
                {hasConnect ? (
                    <SectionTitle title="Error in connection API" />
                ) : (
                    <>
                        {hasSpinner ? (
                            <Spinner />
                        ) : (
                            <>
                                {characterDetails && (
                                    <>
                                        <SectionTitle title="About" />

                                        <Content>
                                            <div className="containerImage">
                                                <img
                                                    src={`${characterDetails.thumbnail.path}/standard_fantastic.${characterDetails.thumbnail.extension}`}
                                                    alt={`Imagem de ${characterDetails.name}`}
                                                />
                                            </div>

                                            <div className="context">
                                                <div className="name">
                                                    <h2>
                                                        {characterDetails.name}
                                                    </h2>
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
                    </>
                )}
            </Container>
            <Footer />
            <GlobalStyle />
        </>
    );
}
