import React from 'react';
import './Typography.css';

function Typography(props) {
  const { children, variant = 'FuturaParagraphMedium', className } = props;

  return (
    <div className={`${variant} ${className}`}>
      {children}
    </div>
  );
}


export default Typography;
