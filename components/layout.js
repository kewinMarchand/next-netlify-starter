import React from "react";
import Head from 'next/head';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Next Fauna CRUD</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {children}
        </main>
    </>
);

export { Layout };