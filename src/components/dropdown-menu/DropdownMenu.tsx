import './DropdownMenu.css';
import { DropdownMenuProps } from './DropdownMenu.types';
import { useOutsideClick, useKeyPress, usePosition } from 'hooks';
import { Ref, useRef, useState } from 'react';
import { Icon, ButtonIcon } from 'components';
import { ReactUtils, ArrayUtils, DOMUtils } from 'utils';

export default function DropdownMenu({
  options,
  width,
  closeOnClickOutside = true,
  closeOnSelect = true,
  skidding,
  icon,
  title,
  disabled,
  listHeight,
}: Readonly<DropdownMenuProps>) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const { styles, attributes, setReferenceElement, setPopperElement } = usePosition({
    distance: 5,
    position: 'absolute',
    skidding: skidding ?? -70,
  });

  useOutsideClick(dropdownContentRef, () => setDisplayMenu(false), closeOnClickOutside);

  const handleOptionClick = (click?: () => void) => {
    click?.();
    if (closeOnSelect) {
      setDisplayMenu(false);
    }
  };

  const dropdownClasses = ReactUtils.conditionalClass({ ['im-dropdown-menu']: true, ['im-dropdown-disabled']: !!disabled });

  const optionClasses = (selected: boolean, disabledOption: boolean) =>
    ReactUtils.conditionalClass({
      ['im-dropdown-menu-option']: true,
      ['im-disabled']: disabledOption,
      ['im-selected']: selected,
    });

  const contentClasses = ReactUtils.conditionalClass({
    ['im-dropdown-menu-content']: true,
    ['im-opened']: displayMenu,
    ['im-closed']: !displayMenu,
  });

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
    <div ref={dropdownContentRef} style={{ width }} className={dropdownClasses}>
      <div className="im-dropdown-menu-wrapper" ref={setReferenceElement as Ref<HTMLDivElement>}>
        <ButtonIcon
          disabled={disabled}
          variant="primary"
          stopPropagation
          applyBorder
          size={7}
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

        {
          <div
            className={contentClasses}
            ref={setPopperElement as Ref<HTMLDivElement>}
            style={{ ...styles.popper, width, height: !displayMenu ? 0 : listHeight }}
            {...attributes.popper}
          >
            {title && <div className="im-dropdown-menu-title">{title}</div>}
            {ArrayUtils.filterMap(
              options,
              (opt) => !opt.hide,
              (option) => (
                <button
                  className={optionClasses(!!option.selected, !!option.disabled)}
                  disabled={option.disabled}
                  key={option.text}
                  style={{ color: `var(--${option.textVariant ?? 'primary'}-color)` }}
                  title={option.title}
                  onClick={() => {
                    if (!option.disabled) {
                      handleOptionClick(option.onClick);
                    }
                  }}
                >
                  <div className="im-dropdown-menu-icon">{option.icon && <Icon icon={option.icon} disabled={option.disabled} />}</div>
                  <div className="im-dropdown-menu-text">{option.text}</div>
                </button>
              )
            )}
          </div>
        }
      </div>
    </div>
  );
}
