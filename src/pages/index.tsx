import React from "react";

import Head from "next/head";

import { CharactersList } from "../components/CharactersList";
import { PageCover } from "../components/Static/PageCover";
import { Footer } from "../components/Static/Footer";
import { Header } from "../components/Static/Header";

import { GlobalStyle } from "../styles/globals";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Lista de hérois</title>
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
            <GlobalStyle />
            <Header />
            <PageCover />
            <CharactersList />
            <Footer />
        </>
    );
}
