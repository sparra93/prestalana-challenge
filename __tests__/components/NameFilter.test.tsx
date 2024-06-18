import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import NameFilter from '@/components/Products/ProductFilter/NameFilter';

describe('NameFilter Component', () => {
  const onChangeInput = jest.fn();

  it('should display NameFilter information correctly', () => {
    renderWithProviders(<NameFilter onChange={onChangeInput} />);

    const input = screen.getByPlaceholderText(`Product name`);
    expect(input).toBeInTheDocument();
  });

  it('should do type and call the function', () => {
    renderWithProviders(<NameFilter onChange={onChangeInput} />);

    const input = screen.getByPlaceholderText(`Product name`);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toBeInTheDocument();
    expect(onChangeInput).toHaveBeenCalledWith('test');
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProviders(
      <NameFilter onChange={onChangeInput} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
