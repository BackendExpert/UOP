import React from 'react';

function Ribbon({ text, color = 'bg-red-500' }) {
  return (
    <div className={`top-0 left-0 transform -translate-x-4 -translate-y-4 rotate-45 ${color} text-white font-bold text-sm py-1 px-3`}>
      {text}
    </div>
  );
}

export default Ribbon;
