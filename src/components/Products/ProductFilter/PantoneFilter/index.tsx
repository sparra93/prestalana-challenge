import React from 'react';
import { useSelector } from 'react-redux';

import CheckBoxFilter from '@/components/Filter';
import Panel from '@/components/Panel';
import { selectPantoneFilter } from '@/redux/features/filterSlice';

interface PantoneFilterProps {
  onChange: (year: string) => void;
  options: string[];
}

const PantoneFilter: React.FC<PantoneFilterProps> = ({ onChange, options }) => {
  const selectedYears = useSelector(selectPantoneFilter);

  return (
    <Panel title="Pantone">
      <CheckBoxFilter
        options={options}
        onChange={onChange}
        optionsSelected={selectedYears}
      />
    </Panel>
  );
};

export default PantoneFilter;
