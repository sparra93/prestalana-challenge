import React from 'react';
import { useSelector } from 'react-redux';

import CheckBoxFilter from '@/components/Filter';
import Panel from '@/components/Panel';
import { selectYearFilter } from '@/redux/features/filterSlice';

interface YearFilterProps {
  onChange: (year: string) => void;
  options: string[];
}

const YearFilter: React.FC<YearFilterProps> = ({ onChange, options }) => {
  const selectedYears = useSelector(selectYearFilter);

  return (
    <Panel title="Years">
      <CheckBoxFilter
        options={options}
        onChange={onChange}
        optionsSelected={selectedYears}
      />
    </Panel>
  );
};

export default YearFilter;
