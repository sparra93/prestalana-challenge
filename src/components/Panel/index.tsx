import React from 'react';

import { PanelBody, PanelContainer, PanelHeader } from './Panel.style';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  isDraggable?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  title,
  children,
  handleDrop = () => {},
  isDraggable = false,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const newProps = isDraggable
    ? {
        draggable: isDraggable,
        onDragOver: handleDragOver,
        onDrop: (e: React.DragEvent<HTMLDivElement>) => handleDrop(e),
      }
    : {
        draggable: isDraggable,
      };
  return (
    <PanelContainer {...newProps}>
      <PanelHeader>
        <span>{title}</span>
      </PanelHeader>
      <PanelBody>{children}</PanelBody>
    </PanelContainer>
  );
};

export default Panel;
