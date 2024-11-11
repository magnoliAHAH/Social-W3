import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({createdAt, username, profilePic, text}) => {
  return (
    <Flex>
      <Avatar src={profilePic} name={username} size={"sm"} mr={2}/>
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>
            {text}
          </Text>

        </Flex>
        <Flex fontSize={12} color={"gray.500"}>
            {createdAt}
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Comment
