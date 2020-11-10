import React from "react";
import Link from "next/link";
import { useCustomerById } from "../../logics/useCustomerById";
import { CardInfos } from "@components/common/CardInfos";
import { AddressInfos } from "@components/common/AddressInfos";

const CustomerCard = ({id}) => {
    const { data, error } = useCustomerById(id);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>Loading ...</div>;

    return (
        <div style={{paddingBottom: 24}}>
            <p style={{fontSize: 24, fontWeight: 800, paddingBottom: 16}}>Customer:&nbsp;</p>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
                <span style={{fontWeight: 800, paddingRight: 16}}>Name:&nbsp;</span>
                <Link href="/customers/[id]" as={`/customers/${id}`}>
                    <a>{data.firstName} {data.lastName}</a>
                </Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 16}}>
                <span style={{fontWeight: 800, paddingRight: 16}}>Telephone:&nbsp;</span>
                <span>{data.telephone}</span>
            </div>
            <CardInfos creditCard={data.creditCard} />
            <AddressInfos title={'Address'} address={data.address} />
        </div>
    );
};

export { CustomerCard };