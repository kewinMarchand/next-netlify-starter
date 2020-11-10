import React from "react";
import { useOrders } from "../../logics/useOrders";
import { OrderRow } from '@components/orders/OrderRow';

const Orders = () => {
    const { data, error } = useOrders();
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading ...</div>;

    return (
        <section>
            <h2 style={{textAlign: 'center'}}>Orders Data</h2>
            <ul>
                {data.map(order => (
                    <OrderRow
                        key={order.ref['@ref'].id}
                        id={order.ref['@ref'].id}
                        customer={order.data.customer['@ref'].id}
                        status={order.data.status}
                        creationDate={order.data.creationDate['@ts']}
                        shipAddress={order.data.shipAddress}
                        creditCard={order.data.creditCard}
                        line={order.data.line}
                    />
                ))}
            </ul>
        </section>
    );
};

export { Orders };