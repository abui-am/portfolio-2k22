import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { useWindowScroll } from 'react-use';

function StickyView({ children }: PropsWithChildren) {
  const { y = 0 } = useWindowScroll();
  const Header = React.useMemo(
    () => (
      <header
        className={clsx(
          'sticky top-0 z-20 transition-colors',
          y > 0 ? 'gradient-white' : 'bg-light-gray'
        )}
      >
        {children}
      </header>
    ),
    [children, y > 0]
  );
  return Header;
}

export default StickyView;
