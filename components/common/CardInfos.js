import React from "react";

const CardInfos = React.memo(({ creditCard }) => (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
        <span style={{fontWeight: 800, paddingRight: 16}}>CreditCard:&nbsp;</span>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
            <span>{creditCard.network}</span>
            <span>{creditCard.number}</span>
        </div>
    </div>
));

export { CardInfos };