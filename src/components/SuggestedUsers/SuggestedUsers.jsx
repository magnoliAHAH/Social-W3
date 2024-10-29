import { Flex, VStack, Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={'full'}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}> 
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
            See All
          </Text>

        </Flex>
        <SuggestedUser name='Kalvin' followers={1532} avatar='kelvin-ava.jpg'/>
        <SuggestedUser name='Arthas' followers={2411} avatar='arthas-ava.jpg'/>
        <SuggestedUser name='Abrams' followers={598} avatar='Abrams-ava.png'/>

        <Box alignSelf={"start"}
          fontSize={12} color={"gray.500"} mt={5}
        >
          2024 Build by {" "}
          <Link href='https://github.com/magnoliAHAH' target='_blank' color={"blue.500"} fontSize={14}>
            Mikhail Ermin
          </Link>

        </Box>
    </VStack>
  )
}

export default SuggestedUsers
