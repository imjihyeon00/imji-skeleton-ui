import React from 'react';
import SkeletonText from './SkeletonText';
import SkeletonAvatar from './SkeletonAvatar';

const Skeleton = ({ type, ...props }) => {
  switch (type) {
    case 'text':
      return <SkeletonText {...props} />;
    case 'avatar':
      return <SkeletonAvatar {...props} />;
    default:
      return <SkeletonText {...props} />; // 기본값은 텍스트 스켈레톤
  }
};

export default Skeleton;
