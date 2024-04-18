import { DropdownMenuProps } from './DropdownMenu.types';
import { useOutsideClick, useKeyPress, usePosition } from 'hooks';
import { Ref, useRef, useState } from 'react';
import { ButtonIcon, Portal } from 'components';
import { ReactUtils, DOMUtils } from 'utils';
import DropdownMenuContent from './components/DropdownMenuContent';

export default function DropdownMenu({
  options,
  width,
  closeOnClickOutside = true,
  closeOnSelect = true,
  icon,
  title,
  disabled,
  height,
  position = 'center',
}: Readonly<DropdownMenuProps>) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const setSkidding = () => {
    const paddingInline = 16;

    if (position === 'center') {
      return 0;
    }
    if (position === 'end') return (width / 2 - paddingInline) * -1;
    return width / 2 - paddingInline;
  };

  const { styles, attributes, setReferenceElement, setPopperElement } = usePosition({
    distance: 8,
    position: 'absolute',
    skidding: setSkidding(),
  });

  useOutsideClick(dropdownContentRef, () => setDisplayMenu(false), closeOnClickOutside);

  const dropdownClasses = ReactUtils.conditionalClass({ ['im-dropdown-menu']: true, ['im-dropdown-disabled']: !!disabled });

  useKeyPress({
    keys: ['Escape'],
    callback: () => setDisplayMenu(false),
    target: dropdownContentRef,
    preventDefault: true,
    stopPropagation: true,
  });

  useKeyPress({
    keys: ['Tab'],
    enabled: displayMenu,
    type: 'keyup',
    callback: () => {
      if (!dropdownContentRef.current?.contains(DOMUtils.getFocusedElement())) {
        setDisplayMenu(false);
      }
    },
  });

  const effectiveIcon = () => {
    if (icon) {
      return icon;
    }

    return !displayMenu ? 'menu' : 'close';
  };

  return (
    <div ref={dropdownContentRef} className={dropdownClasses}>
      <div className="im-dropdown-menu-wrapper" ref={setReferenceElement as Ref<HTMLDivElement>}>
        <ButtonIcon
          disabled={disabled}
          variant="primary"
          stopPropagation
          applyBorder
          size="regular"
          icon={effectiveIcon()}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() =>
            setDisplayMenu((state) => {
              if (disabled) {
                return state;
              }
              return !state;
            })
          }
        />

        <Portal
          targetId="popper"
          element={
            <DropdownMenuContent
              title={title}
              options={options}
              displayMenu={displayMenu}
              setPopperElement={setPopperElement}
              styles={styles}
              width={width}
              attributes={attributes}
              height={height}
              closeOnSelect={closeOnSelect}
              setDisplayMenu={setDisplayMenu}
            />
          }
        />
      </div>
    </div>
  );
}
