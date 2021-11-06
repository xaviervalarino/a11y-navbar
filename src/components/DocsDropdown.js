import { useState, useRef } from 'react';
import { Box, Button } from 'gestalt';

import DocsPopover from './DocsPopover';

export default function DocsDropdown () {
  const dropdownID = 'Docs list';
  const [ dropdownOpen, setDropdownOpen ] = useState(false);
  const anchorRef = useRef();

  const dropdownHandler = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Box role='list'>
      <Button
        accessibilityLabel='Links to Docs pages'
        accessibilityExpanded={dropdownOpen}
        accessibilityControls={dropdownID}
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
          ariaControlsID={dropdownID}
          closePopover={ () => setDropdownOpen(false) }
        />
      )}
    </Box>
  );
}
