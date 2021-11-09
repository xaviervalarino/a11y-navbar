import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  TapArea
} from 'gestalt';

import BrandingLink from './BrandingLink';
import DocsDropdown from './DocsDropdown';

export default function Navbar() {
  return (
    <Box
      as='nav'
      aria-label='Site'
      borderStyle='shadow'
      width="100vw"
      padding={2}
      smPaddingX={6}
      smPaddingY={4}
      display='flex'
      justifyContent="between"
    >
      {/* Passing props down to `TapArea`
        * Note that the LogoLink is not part of the unordered list of nav links
        */}
      <BrandingLink
        accessibilityLabel='Developers homepage'
        role='link'
        href='/'
      />
      <Box column={7} display='flex' justifyContent='end'>
        <Flex role='list' gap={2} alignItems='center'>
          <Flex.Item role='listitem'>
            <DocsDropdown />
          </Flex.Item>
          <Flex.Item role='listitem'>
            <Button
              accessibilityLabel='Current page: Apps'
              text='Apps'
              color='white'
              role='link'
              href='/'
            />
          </Flex.Item>
          <Flex.Item role='listitem'>
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
          </Flex.Item>
          <Flex.Item role='listitem'>
            <IconButton
              accessibilityLabel='More options'
              icon='arrow-down'
              accessibilityExpanded={false}
              size='xs'
              color='darkGray'
            />
          </Flex.Item>
        </Flex>
      </Box>
    </Box>
  );
}
