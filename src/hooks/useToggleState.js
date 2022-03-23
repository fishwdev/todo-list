import {useState} from "react";

function useToggleState(initState) {
    const [isToggled, setIsToggled] = useState(initState);
    const toggle = () => {
        setIsToggled(!isToggled);
    }
    return [isToggled, toggle];
}

export default useToggleState;