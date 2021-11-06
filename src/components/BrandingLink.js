import {
  Box,
  Flex,
  Heading,
  Icon,
  TapArea
} from 'gestalt';

export default function BrandingLink ({ accessibilityLabel, role, href }) {
  return (
    <TapArea
      accessibilityLabel={accessibilityLabel}
      href={href}
      role={role}
      fullWidth={false}
      rounding='pill'
      tabIndex={0}
    >
      <Box padding={2} rounding='pill'>
        <Flex alignItems='center' gap={1}>
          <Icon
            accessibilityLabel='Pinterest'
            role='presentation'
            icon="pinterest"
            size='24px'
            color='darkGray'
          />
          <Heading size='sm' accessibilityLevel={2}>
            <Box dangerouslySetInlineStyle={{ __style: { display: 'inline' } }}>
              Pinterest
            </Box>
            <Box dangerouslySetInlineStyle={{ __style: { display: 'inline', fontWeight: 'normal' } }}>
              {' '}Developers
            </Box>
          </Heading>
        </Flex>
      </Box>
    </TapArea>
  );
}
