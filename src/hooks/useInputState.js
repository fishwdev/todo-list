import {useState} from "react";

function useInputState(initState) {
    const [value, setValue] = useState(initState);
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    const resetInput = () => {
        setValue('');
    }
    return [value, handleInputChange, resetInput];
}

export default useInputState;