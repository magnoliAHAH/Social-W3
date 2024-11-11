import React, { useState } from 'react'
import { Box, Button, Flex, InputGroup, InputRightElement, Text, Input} from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
const PostFooter = ({username, postText, isProfilePage}) => {
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
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
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
      {!isProfilePage && (
        <>
          <Text fontSize='sm' fontWeight={700}>
            {username}{" "}
            <Text as='span' fontWeight={400}>
              {postText}
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 100 comments
          </Text>
        </>
      )}

      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
					<InputGroup>
						<Input
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={14}
						/>
						<InputRightElement>
							<Button
								fontSize={14}
								color={"blue.500"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "white" }}
								bg={"transparent"}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
    </Box>
  )
}

export default PostFooter
