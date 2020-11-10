import React from "react";

const AddressInfos = React.memo(({ title, address }) => (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
        <span style={{fontWeight: 800}}>{title}:&nbsp;</span>
        <address style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
            <span>{address.street}</span>
            <span>{address.zipCode} {address.city} {address.state}</span>
        </address>
    </div>
));

export { AddressInfos };