import React from "react";

import Head from "next/head";

import { CharactersList } from "../components/CharactersList";

import { GlobalStyle } from "../styles/globals";
import { Footer } from "../ComponentsStatic/Footer";
import { Header } from "../ComponentsStatic/Header";
import { PageCover } from "../ComponentsStatic/PageCover";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
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
