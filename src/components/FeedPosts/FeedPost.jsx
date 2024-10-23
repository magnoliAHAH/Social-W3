import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = () => {
  return (
    <>
      <PostHeader/>
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src="/img4.png" alt="user profile pic"/>
      </Box>
      <PostFooter/>
    </>
  )
}

export default FeedPost
