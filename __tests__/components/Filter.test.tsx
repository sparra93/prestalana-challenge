import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import CheckBoxFilter from '@/components/Filter';
import { getUnique } from '@/shared/helpers/filter';

import { PRODUCT_MOCK } from '../../__mocks__/product.data';

describe('Filter Component', () => {
  const options = getUnique(PRODUCT_MOCK, 'year');
  const onChangeCheck = jest.fn();

  it('should display filter information correctly', () => {
    renderWithProviders(
      <CheckBoxFilter
        onChange={onChangeCheck}
        options={options}
        optionsSelected={[]}
      />,
    );

    const checkbox = screen.getByTestId(`checkbox-2001`);
    expect(checkbox).toBeInTheDocument();
  });

  it('should do click in the checkbox and call the function', () => {
    renderWithProviders(
      <CheckBoxFilter
        onChange={onChangeCheck}
        options={options}
        optionsSelected={[]}
      />,
    );

    const checkbox = screen.getByTestId(`checkbox-2001`);
    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(onChangeCheck).toHaveBeenCalledWith('2001');
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(
      <CheckBoxFilter
        onChange={onChangeCheck}
        options={options}
        optionsSelected={[]}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
