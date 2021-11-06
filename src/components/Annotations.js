import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from 'gestalt';

export default function Annotations() {
  return (
    <Container>
      <Box
        as='main'
        margin={12}
        padding={6}
        rounding={4}
        dangerouslySetInlineStyle={{ __style: { background: '#EBF4FE' } }}
      >
        <Flex alignItems='center' gap={4} >
          <Flex.Item>
            <Icon icon='info-circle' color='blue' size='32' />
          </Flex.Item>
          <Flex.Item>
            <Box marginBottom={1}>
              <Heading size='sm'>Reference</Heading>
            </Box>
            <Text>See The W3's WAI-ARIA{' '}
              <Link inline href='https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-navigation.html'>
                <Text weight='bold'>Example Disclosure for Navigation Menus</Text>
              </Link>
              {' '}originally authored by{' '}
              <Link inline href='https://sarahmhigley.com/'>
                <Text weight='bold'>Sarah Higley</Text>
              </Link>
            </Text>
          </Flex.Item>
        </Flex>
      </Box>
    </Container>
  );
}
