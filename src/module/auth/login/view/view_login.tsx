'use client'

import { WARNA } from "@/module/_global/fun/WARNA";


import { Box, Button, Checkbox, Flex, Image, Stack, Text, TextInput } from "@mantine/core";
// import { useRouter } from "next/navigation";
import React from "react";
function ViewLogin() {
   // const router = useRouter()
   const textInfo =
      "Kami akan mengirimkan kode verifikasi melalui WhatsApp ke nomor yang terdaftar";

   function onMasuk() {
      window.location.href = '/verification'
   }
   return (
      <>
      <Flex justify='center' direction={"column"} align='center' h='99vh'>
            <Image src="./assets/logo/Logo.png" alt="logo"
               radius="xs" h={250} w={"auto"} />
         <Box>
               <Stack>
                  <Box>
                     <TextInput
                     styles={{
                        input: {
                           backgroundColor: WARNA.bgKrem,
                           borderRadius: WARNA.bgKrem,
                           borderColor: WARNA.bgKrem
                        },
                     }}
                     size="md"
                     type="number"
                     radius="md"
                     leftSection={<Text>+62</Text>}
                     placeholder="XXX XXX XXX"
                     />
                     <Text fz={15} mt={10} c={WARNA.btnColor}>
                        {textInfo}
                     </Text>
                     <Checkbox
                     mt={20}
                     label={
                        <Text fz={10} c={WARNA.btnColor}>
                           Ingat Saya
                        </Text>
                     }
                     />
                     <Box mt={20}>
                        <Button
                        c={'white'}
                        bg={WARNA.btnColor}
                        size="md"
                        radius={30}
                        onClick={onMasuk}
                        fullWidth
                        >
                        Masuk
                        </Button>
                     </Box>
                  </Box>
               </Stack>
         </Box>
         </Flex>
      </>
   );

}

export default ViewLogin;