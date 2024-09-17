import { Box, Drawer, Text } from '@mantine/core'
import React from 'react'
import { WARNA } from '../fun/WARNA'

export default function LayoutDrawer({opened, onClose, children, title, size}: {opened: boolean, onClose: () => void, children: React.ReactNode, title: React.ReactNode, size?: string}) {
  return (
    <Box>
      <Drawer opened={opened} onClose={onClose} title={<Text c={WARNA.btnColor} fw={'bold'}>{title}</Text>} position='bottom' size={(size == 'lg') ? '80%' : '30%'}
      styles={{
         content: {
            backgroundColor: 'white',
         },
      }}
      >
         {children}
      </Drawer>
    </Box>
  )
}
