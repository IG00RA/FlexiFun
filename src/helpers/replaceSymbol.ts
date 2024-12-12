import React from 'react';

interface ReplaceSymbolComponentProps {
  tProps?: Record<string, unknown>;
  cProps?: Record<string, unknown>;
}

interface ReplaceSymbolComponents {
  t?: React.FC<Record<string, unknown>>;
  c?: React.FC<Record<string, unknown>>;
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
