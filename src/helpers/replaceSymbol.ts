import React from 'react';

interface ReplaceSymbolComponentProps {
  tProps?: Record<string, any>;
  cProps?: Record<string, any>;
}

interface ReplaceSymbolComponents {
  t?: React.FC<any>;
  c?: React.FC<any>;
}

export const replaceSymbol = (
  text: string,
  components: ReplaceSymbolComponents,
  componentProps?: ReplaceSymbolComponentProps
): React.ReactNode[] => {
  const parts = text.split(/(ť|č)/);
  return parts.map((part, index) => {
    if (part === 'ť' && components.t) {
      const props = componentProps?.tProps || {};
      return React.createElement(components.t, { key: `t-${index}`, ...props });
    }
    if (part === 'č' && components.c) {
      const props = componentProps?.cProps || {};
      return React.createElement(components.c, { key: `c-${index}`, ...props });
    }
    return part;
  });
};
