import React from "react";
import useSWR from 'swr';
import { fetcher } from "../utils/fauna-fetcher";

const useOrders = () => {
    const { data, error } = useSWR('/api/orders', fetcher);

    return { data, error };
};

export { useOrders };