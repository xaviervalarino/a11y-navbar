import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import Navbar from './components/Navbar';
import BrandingLink from './components/BrandingLink';
import Annotations from './components/Annotations';

export default function App() {
  return (
    <>
      <Box
        as='header'
        role='banner'
        borderStyle='shadow'
        width="100vw"
        padding={2}
        smPaddingX={6}
        smPaddingY={4}
        display='flex'
        justifyContent="between"
      >
        <BrandingLink
          accessibilityLabel='Developers homepage'
          role='link'
          href='/'
        />
        <Navbar />
      </Box>
      <Annotations />
    </>
  )
}
