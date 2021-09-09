import React, { useRef, useState } from "react";
import { render, screen } from '@testing-library/react';
import { useOnClickOutside } from './useOnClickOutside';
import userEvent from "@testing-library/user-event";

const Component = () => {
    const refTest = useRef(null);
    const [hideHeading, setHideHeading] = useState(false);

    useOnClickOutside({
        ref: refTest,
        onClick: (hide) => setHideHeading(hide)
    })

    return (
        <div>
            <h2>heading 1</h2>
            {!hideHeading && <h3>heading 2</h3>}
            <input ref={refTest} type="text" aria-label="teste" />
            <button>click</button>
        </div>
    )
}

describe('useOnClickOutside', () => {
    it('should click outside and trigger the hook', async () => {

        render(<Component />)

        expect(await screen.findByRole('heading', { name: /heading 2/i })).toBeInTheDocument();

        const input = screen.getByRole('textbox', { name: /teste/i });

        userEvent.type(input, 'um texto');

        userEvent.click(screen.getByRole('heading', { name: /heading 1/i }));

        expect(screen.queryByRole('heading', { name: /heading 2/i })).not.toBeInTheDocument();

    });
});