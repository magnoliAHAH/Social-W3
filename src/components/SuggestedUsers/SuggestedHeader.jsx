import { Flex, Text, Avatar, Link } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import React from 'react'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='Ermin' size={'md'} src='/2024_ermin_m.jpg' ml={4}>
                <Text fontSize={12} fontWeight={"bold"}>
                    Ermin
                </Text>
            </Avatar>
        </Flex>
        <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={'blue.400'}
        cursor={"pointer"}
        style={{textDecoration: "none"}}
        >
            Log out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader
