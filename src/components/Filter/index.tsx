import React from 'react';

import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxListContainer,
  CheckboxListItem,
} from './Filter.style';

interface CheckBoxFilterProps {
  onChange: (value: string) => void;
  options: string[];
  optionsSelected: string[];
}

const CheckBoxFilter: React.FC<CheckBoxFilterProps> = ({
  onChange,
  options,
  optionsSelected,
}) => {
  const handleYearChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <CheckboxListContainer>
      {options.map((option) => (
        <CheckboxListItem key={`checkbox-${option}`}>
          <CheckboxInput
            name={`checkbox-${option}`}
            type="checkbox"
            value={option}
            checked={optionsSelected.includes(option)}
            onChange={handleYearChange}
          />
          <CheckboxLabel htmlFor={`checkbox-${option}`}>{option}</CheckboxLabel>
        </CheckboxListItem>
      ))}
    </CheckboxListContainer>
  );
};

export default CheckBoxFilter;
