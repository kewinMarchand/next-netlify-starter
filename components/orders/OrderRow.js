import React from "react";
import { OrderLineRow } from "@components/orders/OrderLineRow";
import { AddressInfos } from "@components/common/AddressInfos";
import { toDate } from "../../utils/format-utils";
import { CustomerCard } from "@components/customers/CustomerCard";

const OrderRow = React.memo(({ id, customer, line, status, creationDate, shipAddress, creditCard }) => (
    <li style={{border: '1px solid lightgrey', padding: 40, margin: '16px auto', maxWidth: 500}}>
        <CustomerCard id={customer} />
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>Order id:&nbsp;</span>
            <span>{id}</span>
        </div>
        <AddressInfos title={'Shipping address'} address={shipAddress} />
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>Creation date:&nbsp;</span>
            <span>{toDate(creationDate)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>Status:&nbsp;</span>
            <span>{status}</span>
        </div>
        <ul>
            {line.map(line => (
                <OrderLineRow line={line} />
            ))}
        </ul>
    </li>
));

export { OrderRow };