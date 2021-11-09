import {
  Badge,
  Box,
  Flex,
  Popover,
  Text,
  TapArea
} from 'gestalt';

const solutionsPages = [
  {
    href: '/',
    key: 'content app',
    node: <Text weight='bold'>Content apps</Text>
  },
  {
    href: '/',
    key: 'analytics app',
    node: <Text weight='bold'>Analytics apps</Text>
  }
];
const productPages = [
  {
    href: '/',
    key: 'Pinterest API',
    node: <Text weight='bold'>Pinterest API (v5) <Badge text='Beta' /></Text>
  },
  {
    href: '/',
    key: 'Tags',
    node: <Text weight='bold'>Tags</Text>
  },
  {
    href: '/',
    key: 'Rich Pins',
    node: <Text weight='bold'>Rich Pins</Text>
  },
  {
    href: '/',
    key: 'Add-ons',
    node: <Text weight='bold'>Add-ons</Text>
  }
];

const Section = ({ title, children }) => {
  return (
    <Flex.Item role='listitem'>
      <Box marginBottom={2}>
        <Text id='solutions' size='sm'>{title}</Text>
      </Box>
      { children }
    </Flex.Item>
  );
}

const ListOfPages = ({ pages }) => {
  return (
    <Flex role='list' gap={0} direction='column'>
      { pages.map( ({ key, href, node }) => (
        <Flex.Item  role='listitem' key={key}>
          <TapArea
            role='link'
            rounding={4}
            href={href}
          >
            <Box
              display='flex'
              justifyContent='between'
              marginStart={-2}
              padding={2}
              rounding={2}
            >
              {node}
            </Box>
          </TapArea>
        </Flex.Item>
      ))}
    </Flex>
  );
}

export default function DocsPopover ({ anchor, ariaControlsID, closePopover }) {
  return (
    <Popover
      anchor={anchor.current}
      id={ariaControlsID}
      idealDirection='down'
      onDismiss={ closePopover }
      positionRelativeToAnchor={false}
      size='xl'
    >
      <Box
        role='list'
        display='flex'
        direction='column'
        margin={4}
      >
        <Flex gap={8} direction='column'>
          <Section title='Solutions'>
            <ListOfPages pages={solutionsPages} />
          </Section>
          <Section title='Products'>
            <ListOfPages pages={productPages} />
          </Section>
        </Flex>
      </Box>
    </Popover>
  );
}
