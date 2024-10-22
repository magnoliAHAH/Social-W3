import React, { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
const PostFooter = () => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikesCount] = useState(100)
    const handleLike = () => {
        if(liked){
            setLiked(false)
            setLikesCount(likes - 1)
        } else {
            setLiked(true)
            setLikesCount(likes + 1)
        }
    }
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? (<FaRegHeart size={25}/>) : (<FaHeart color='red' size={25}/>)}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
            <FaRegCommentAlt  size={25} />
        </Box>
      </Flex>
      <Text fontSize='sm' fontWeight={600}>
        {likes} likes
      </Text>
      <Text fontSize='sm' fontWeight={700}>
        Ermin{" "}
        <Text as='span' fontWeight={400}>
            Feeling bad
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 100 comments
      </Text>
    </>
  )
}

export default PostFooter
