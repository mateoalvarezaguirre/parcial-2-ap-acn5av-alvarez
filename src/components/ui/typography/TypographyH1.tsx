import * as React from "react";

type Props = {
    customClass?: string;
    children?: React.ReactNode;
}

export const TypographyH1 = ({customClass, children}: Props) => {
    return (
        <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${customClass}`}>
            {children}
        </h1>
    );
};