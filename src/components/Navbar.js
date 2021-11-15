import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  TapArea
} from 'gestalt';

import DocsDropdown from './DocsDropdown';

export default function Navbar() {
  return (
    <Box
      as='nav'
      aria-label='Site'
      column={7}
      display='flex'
      justifyContent='end'
    >
      <Flex role='list' gap={2} alignItems='center'>
        <Box role='listitem'>
          <DocsDropdown />
        </Box>
        <Box role='listitem'>
          <Button
            accessibilityLabel='Apps'
            text='Apps'
            color='white'
            role='link'
            href='/'
          />
        </Box>
        <Box role='listitem'>
          <TapArea
            accessibilityLabel='Your Pinterest user page'
            role='link'
            rounding='circle'
            href='/'
          >
          <Avatar
            name='username'
            accessibilityLabel='user avatar'
            size='xs'
          />
          </TapArea>
        </Box>
        <Box role='listitem'>
          <IconButton
            accessibilityLabel='More options'
            icon='arrow-down'
            accessibilityExpanded={false}
            size='xs'
            color='darkGray'
          />
        </Box>
      </Flex>
    </Box>
  );
}
