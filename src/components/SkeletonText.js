import React from 'react';
import SkeletonBase from './SkeletonBase';
import styled from 'styled-components';

const SkeletonTextWrapper = styled(SkeletonBase)`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '8px'};
`;

const SkeletonText = ({ width, height, marginBottom }) => {
  return <SkeletonTextWrapper width={width} height={height} marginBottom={marginBottom} />;
};

export default SkeletonText;
