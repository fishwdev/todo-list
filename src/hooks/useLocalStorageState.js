import {useEffect, useState} from "react";

function useLocalStorageState(key, initVal) {
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(initVal)
            );
        }
        catch (e) {
            value = initVal;
        }
        // console.log('USING: ', value)
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, setState];
}

export {useLocalStorageState};