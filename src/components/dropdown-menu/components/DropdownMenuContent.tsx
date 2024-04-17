import { Icon } from 'components';
import { Ref } from 'react';
import { ArrayUtils, ReactUtils } from 'utils';
import './DropDownMenuContent.css';
import { DropdownMenuContentProps } from './DropdownMenuContent.types';

export default function DropdownMenuContent({
  title,
  options,
  displayMenu,
  setPopperElement,
  styles,
  width,
  attributes,
  height,
  closeOnSelect,
  setDisplayMenu,
}: Readonly<DropdownMenuContentProps>) {
  const contentClasses = ReactUtils.conditionalClass({
    ['im-dropdown-menu-content']: true,
    ['im-opened']: displayMenu,
    ['im-closed']: !displayMenu,
  });

  const optionClasses = (selected: boolean, disabledOption: boolean) =>
    ReactUtils.conditionalClass({
      ['im-dropdown-menu-option']: true,
      ['im-disabled']: disabledOption,
      ['im-selected']: selected,
    });

  const handleOptionClick = (click?: () => void) => {
    click?.();
    if (closeOnSelect) {
      setDisplayMenu(false);
    }
  };

  return (
    <div
      className={contentClasses}
      ref={setPopperElement as Ref<HTMLDivElement>}
      style={{ ...styles.popper, width: `${width}px`, height: !displayMenu ? 0 : `${height}px` }}
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
  );
}
