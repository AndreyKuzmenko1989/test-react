import React, { useEffect } from "react";
import { PhoneList } from "../features/phones/components/PhoneList";
import { usePhone } from "../features/phones/hooks/usePhone";


export const Index = () => {

    const { getPhones, sortedContactsByName } = usePhone();

    useEffect(() => {
        getPhones();
    }, [getPhones]);

    return (
        <>
            <PhoneList phones={sortedContactsByName} />
        </>
    );
};
