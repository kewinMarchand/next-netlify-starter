import React from "react";
import { useCustomers } from "../../logics/useCustomers";
import { CustomerRow } from '@components/customers/CustomerRow';

const Customers = ({title}) => {
    const { data, error } = useCustomers();
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading ...</div>;

    return (
        <section>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <ul>
                {data.map(customer => (
                    <CustomerRow
                        key={customer.ref['@ref'].id}
                        id={customer.ref['@ref'].id}
                        firstName={customer.data.firstName}
                        lastName={customer.data.lastName}
                        telephone={customer.data.telephone}
                        creditCard={customer.data.creditCard.number}
                    />
                ))}
            </ul>
        </section>
    );
};

export { Customers };