import React from "react";
import { CharactersList } from "../components/CharactersList";
import { PageCover } from "../components/Static/PageCover";
import { Footer } from "../components/Static/Footer";
import { Header } from "../components/Static/Header";
import { GlobalStyle } from "../styles/globals";

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <PageCover />
            <CharactersList />
            <Footer />
        </>
    );
}
