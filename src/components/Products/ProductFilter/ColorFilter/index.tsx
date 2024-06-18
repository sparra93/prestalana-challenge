import React from 'react';
import { useSelector } from 'react-redux';

import CheckBoxFilter from '@/components/Filter';
import Panel from '@/components/Panel';
import { selectColorFilter } from '@/redux/features/filterSlice';

interface ColorFilterProps {
  onChange: (year: string) => void;
  options: string[];
}

const ColorFilter: React.FC<ColorFilterProps> = ({ onChange, options }) => {
  const selectedColors = useSelector(selectColorFilter);

  return (
    <Panel title="Colors">
      <CheckBoxFilter
        options={options}
        onChange={onChange}
        optionsSelected={selectedColors}
      />
    </Panel>
  );
};

export default ColorFilter;
