import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { useCallback, useMemo } from "react";
import { getPhonesThunk } from "../redux/thunks";
import sortByFirstName from "../utils/sortByFirstName";

export const usePhone = () => {
    const dispatch = useDispatch();
    const { phones, ...phonesState } = useSelector((state: RootState) => state.phones);
    const sortedContactsByName = useMemo(() => phones?.sort(sortByFirstName) || [], [phones]);

    const getPhones = useCallback(() => {
        if (phones.length <= 0) {
            dispatch(getPhonesThunk());
        }
    }, [dispatch]);



    return {
        ...phonesState,
        phones,
        sortedContactsByName,
        getPhones,
    };
};
