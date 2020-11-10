import React from "react";
import { Layout } from '@components/layout';
import { Orders } from "@components/orders/Orders";
import {Customers} from "@components/customers/Customers";

const Home = () => {
    return (
        <Layout>
            <div>
                <header style={{margin: '16px 0 24px 0'}}>
                    <h1 style={{textAlign: 'center'}}>Next Fauna CRUD</h1>
                </header>
                <Customers title={'Our customers:'}/>
            </div>
        </Layout>
    );
};

export default Home;