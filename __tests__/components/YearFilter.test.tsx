import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import YearFilter from '@/components/Products/ProductFilter/YearFilter';
import { getUnique } from '@/shared/helpers/filter';

import { PRODUCT_MOCK } from '../../__mocks__/product.data';

describe('YearFilter Component', () => {
  const onChangeCheck = jest.fn();
  const options = getUnique(PRODUCT_MOCK, 'year');

  it('should display YearFilter information correctly', () => {
    renderWithProviders(
      <YearFilter onChange={onChangeCheck} options={options} />,
    );

    const input = screen.getByTestId(`checkbox-2001`);
    expect(input).toBeInTheDocument();
  });

  it('should do click and call the function', () => {
    renderWithProviders(
      <YearFilter onChange={onChangeCheck} options={options} />,
    );

    const checkbox = screen.getByTestId(`checkbox-2001`);
    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(onChangeCheck).toHaveBeenCalledWith('2001');
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(
      <YearFilter onChange={onChangeCheck} options={options} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
