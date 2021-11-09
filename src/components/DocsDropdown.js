import { useState, useRef } from 'react';
import { Button } from 'gestalt';

import DocsPopover from './DocsPopover';

export default function DocsDropdown () {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);
  const anchorRef = useRef();

  const dropdownHandler = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Button
        accessibilityLabel='Links to Docs pages'
        accessibilityExpanded={dropdownOpen}
        accessibilityControls='docs_list'
        text='Docs'
        color='white'
        role='button'
        iconEnd='arrow-down'
        ref={anchorRef}
        onClick={dropdownHandler}
      />
      { dropdownOpen && (
        <DocsPopover
          anchor={anchorRef}
          ariaControlsID='docs_list'
          closePopover={ () => setDropdownOpen(false) }
        />
      )}
    </>
  );
}
