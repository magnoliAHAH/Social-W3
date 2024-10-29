import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },1500)
  }, [])
  return (
    <Container maxW={'container.sm'} py={10} px={10}>
      {isLoading && [0,1,2,3].map((_,idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={'10'}/>
              <VStack
               gap={2} alignItems={"flex-start"}>
                  <Skeleton height={'10px'} w={'200px'}/>
                  <Skeleton height={'10px'} w={'200px'}/>
               </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
      ))}
        {!isLoading && (
          <>
            <FeedPost 
            username="Ermin"
            img='img4.png'
            avatar='2024_ermin_m.jpg'
            postText='Красиво'
          />
          <FeedPost
            username="flashka"
            img='flashka-post.jpg'
            avatar='flashka-ava.jpg'
            postText='Отдыхаю'
          />
          <FeedPost
            username="krotik_43246"
            img='krot-post.jpg'
            avatar='krot-ava.jpg'
            postText='Всем привет!'
          />
          <FeedPost
            username="dobricola"
            img='dobrijcola-post.png'
            avatar='cola-dobryi.png'
            postText='Новая коллекция напитков'
          />
          </>
        )}

    </Container>
  )
}

export default FeedPosts
