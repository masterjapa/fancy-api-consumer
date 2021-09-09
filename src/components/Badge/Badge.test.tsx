import React from 'react';
import { screen } from '@testing-library/react';
import StyledBadge from './';
import { theme } from '../../theme';
import renderComponent from '../../test/helpers/renderComponent';

describe('<Badge />', () => {
    it('should render with default badge', () => {
        renderComponent(<StyledBadge badgeType="default">Badge Default</StyledBadge>);

        expect(screen.getByText(/badge default/i)).toHaveStyleRule('background', theme.badgeColors.default);

    });
    it('should render with active badge', () => {
        renderComponent(<StyledBadge badgeType="active">Badge Active</StyledBadge>);

        expect(screen.getByText(/badge active/i)).toHaveStyleRule('background', theme.badgeColors.active);
    });
    it('should render with done badge', () => {
        renderComponent(<StyledBadge badgeType="done">Badge Done</StyledBadge>);

        expect(screen.getByText(/badge done/i)).toHaveStyleRule('background', theme.badgeColors.done);
    });
})