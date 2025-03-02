import React from 'react';
import SkeletonBase from './SkeletonBase';
import styled from 'styled-components';

const SkeletonAvatarWrapper = styled(SkeletonBase)`
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'};
  border-radius: 50%;
`;

const SkeletonAvatar = ({ width }) => {
  return <SkeletonAvatarWrapper size={ width } />;
};

export default SkeletonAvatar;
