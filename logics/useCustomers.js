import React from "react";
import useSWR from 'swr';
import { fetcher } from "../utils/fauna-fetcher";

const useCustomers = () => {
    const { data, error } = useSWR('/api/customers', fetcher);

    return { data, error };
};

export { useCustomers };