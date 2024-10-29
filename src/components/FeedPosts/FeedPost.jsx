import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = ({username, img, avatar, postText}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar}/>
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={img} alt={username}/>
      </Box>
      <PostFooter username={username} postText={[postText]}/>
    </>
  )
}

export default FeedPost
