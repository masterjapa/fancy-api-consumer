import React, { useEffect } from "react";

interface IUseOnClickOutsideProps {
    ref: React.RefObject<{ contains: Function }>
    onClick: (hasClickedOutside: boolean) => void
}

export const useOnClickOutside = ({ ref, onClick }: IUseOnClickOutsideProps) => {

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            let clickedOutside = false;

            if(ref && ref.current && !ref.current.contains(e.target)){
                clickedOutside = true;
            }

            return onClick(clickedOutside)
        }
        
        document.addEventListener('mousedown', onClickOutside);

        return () => document.removeEventListener('mousedown', onClickOutside);
    }, [ref, onClick])
}