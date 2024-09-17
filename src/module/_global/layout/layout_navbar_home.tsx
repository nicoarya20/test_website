import { Box } from "@mantine/core";


export default function LayoutNavbarHome({children}: {children: React.ReactNode}) {
  return (
    <Box pt={25} pl={20} pr={20} m={0} pos={'sticky'} top={0} pb={25} bg={'white'}
    style={{
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      zIndex: 100
    }}
    >
      {children}
    </Box>
  )
}
