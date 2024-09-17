import { Flex, Image } from '@mantine/core';
import React from 'react'

export default function LayoutLogin({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Flex justify='center'  align='center' h='55vh'>
            <Image src="./assets/logo/Logo.png" alt="logo"
               radius="xs" h={150} w={150} />
         </Flex>
         {children}
      </>
   );
}
