import { Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} >
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base: "none", lg: "block"}} maxW={"300px"} >
          Sug
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage
