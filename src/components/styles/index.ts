import { css, keyframes } from 'styled-components';

const mobileStyles = (style: string) => {
    return css`
        @media only screen and (max-width:${({ theme }) => theme.mobileBreakView}) {
            ${style}
        }
    `
};

const responsiveStyles = css`
    display: flex;
    flex-wrap: wrap;

    ${mobileStyles(`
        flex-direction: column;
        text-align: center;
    `)}
`;

const fadingAnimation = keyframes`
    from {
        opacity: 0.2
    }

    to {
        opacity: 0.8
    }
`;

const fadingLoader = css`
    animation: 1.5s ${fadingAnimation} infinite;
    pointer-events: none;
`

export {
    responsiveStyles,
    fadingLoader,
    mobileStyles,
}