import React from "react";
import { toCurrency } from "../../utils/format-utils";

const OrderLineRow = React.memo(({ line }) => (
    <li style={{border: '1px solid lightgrey', padding: 24, margin: '16px 0', width: '100%'}} key={line.product['@ref'].id}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>product id:&nbsp;</span>
            <span>{line.product['@ref'].id}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>price:&nbsp;</span>
            <span>{toCurrency(line.price)}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>quantity:&nbsp;</span>
            <span>{line.quantity}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{fontWeight: 800, paddingRight: 16}}>total price:&nbsp;</span>
            <span>{line.quantity} X {line.price} = {toCurrency(line.quantity * line.price)}</span>
        </div>
    </li>
));

export { OrderLineRow };