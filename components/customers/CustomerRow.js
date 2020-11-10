import React from "react";
import Link from 'next/link';

const CustomerRow = React.memo(({ id, firstName, lastName, telephone, creditCard }) => (
    <li style={{border: '1px solid lightgrey', padding: 40, margin: '16px auto', maxWidth: 500}}>
        <p style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>Name:&nbsp;</span>
            <Link href="/customers/[id]" as={`/customers/${id}`}>
                <a>{firstName} {lastName}</a>
            </Link>
        </p>
        <p style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>Telephone:&nbsp;</span>
            <span>{telephone}</span>
        </p>
        <p style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>CreditCard:&nbsp;</span>
            <span>{creditCard}</span>
        </p>
    </li>
));

export { CustomerRow };