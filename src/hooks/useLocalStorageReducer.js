import {useEffect, useReducer} from "react";

function useLocalStorageReducer(key, initValue, reducer) {
    const [storedValue, storedValueDispatch] = useReducer(reducer, initValue, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(initValue)
            );
        } catch (e) {
            value = initValue;
        }
        // console.log('USING: ', value)
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue])

    return [storedValue, storedValueDispatch];
}

export {useLocalStorageReducer};