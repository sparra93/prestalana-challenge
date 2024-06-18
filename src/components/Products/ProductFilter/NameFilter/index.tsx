import type { ReactElement } from 'react';
import React from 'react';

import Panel from '@/components/Panel';
import { Input } from '@/components/Products/ProductFilter/NameFilter/NameFilter.style';

interface NameFilterProps {
  onChange: (name: string) => void;
}

const NameFilter: React.FC<NameFilterProps> = ({ onChange }): ReactElement => {
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onChange(event.target.value);
  };

  return (
    <Panel title="Nombre">
      <Input
        type="text"
        onChange={handleNameChange}
        placeholder="Product name"
      />
    </Panel>
  );
};

export default NameFilter;
