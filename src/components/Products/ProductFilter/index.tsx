import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NameFilter from '@/components/Products/ProductFilter//NameFilter';
import PantoneFilter from '@/components/Products/ProductFilter//PantoneFilter';
import ColorFilter from '@/components/Products/ProductFilter/ColorFilter';
import YearFilter from '@/components/Products/ProductFilter/YearFilter';
import {
  setColorFilter,
  setInitialColorFilter,
  setInitialPantoneFilter,
  setInitialYearFilter,
  setNameFilter,
  setPantoneFilter,
  setYearFilter,
} from '@/redux/features/filterSlice';
import { selectProducts } from '@/redux/features/productSlice';
import { getUnique } from '@/shared/helpers/filter';

interface ProductFilterProps {}

const ProductFilter: React.FC<ProductFilterProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const yearsOptions = getUnique(products, 'year');
  dispatch(setInitialYearFilter(yearsOptions));
  const colorOptions = getUnique(products, 'color');
  dispatch(setInitialColorFilter(colorOptions));
  const pantoneOptions = getUnique(products, 'pantone_value');
  dispatch(setInitialPantoneFilter(pantoneOptions));

  const onChangeName = (name: string): void => {
    dispatch(setNameFilter(name));
  };
  const onChangeYear = (year: string): void => {
    dispatch(setYearFilter(year));
  };

  const onChangeColor = (color: string): void => {
    dispatch(setColorFilter(color));
  };

  const onChangePantone = (pantone_value: string): void => {
    dispatch(setPantoneFilter(pantone_value));
  };

  return (
    <>
      Filtros
      <YearFilter onChange={onChangeYear} options={yearsOptions} />
      <ColorFilter onChange={onChangeColor} options={colorOptions} />
      <PantoneFilter onChange={onChangePantone} options={pantoneOptions} />
      <NameFilter onChange={onChangeName} />
    </>
  );
};

export default ProductFilter;
