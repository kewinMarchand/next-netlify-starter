import React from "react";
import useSWR from 'swr';
import { fetcher } from "../utils/fauna-fetcher";

const useCustomerById = (id) => {
    const { data, error } = useSWR(`/api/customers/${id}`, fetcher);

    return { data, error };
};

export { useCustomerById };