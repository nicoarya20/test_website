'use client'   
import { Box, Flex, Image, Stack, Text, Title } from "@mantine/core"

export default function ViewVerification() {

function onNext(){
{
   window.location.href = '/auth/welcome'
}}
return(
   <>
   <Flex justify='center' direction={"column"} align='center' h='99vh'>
            <Image src="./assets/logo/Logo.png" alt="logo"
               radius="xs" h={250} w={"auto"} />
      <Box>
         <Stack>
            <Box>
               <Title>Verifikasi Nomor Telpon</Title>
               <Text>Masukkan kode yang kami kirimkan melalui whatsapp</Text>

            </Box>
         </Stack>
      </Box>
      </Flex>
   </>
)
}