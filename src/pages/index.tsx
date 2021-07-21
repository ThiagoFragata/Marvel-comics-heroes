import React from "react";
import { CharactersList } from "../components/CharactersList";
import { Footer } from "../components/Static/Footer";
import { Header } from "../components/Static/Header";

export default function Home() {
    return (
        <>
            <Header />
            <CharactersList />
            <Footer />
        </>
    );
}
