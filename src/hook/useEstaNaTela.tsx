import { useState, useEffect } from 'react';

export const useEstaNaTela = () => {
    const [isFocused, setIsFocused] = useState<boolean>(true);

    useEffect(() => {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);

        return () => {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, []);

    return isFocused;
};
