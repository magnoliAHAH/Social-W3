import { Grid, Skeleton, VStack,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    setTimeout(()=> {
      setIsLoading(false)
    },1500)
  },[])
  return (
<Grid
			templateColumns={{
				sm: "repeat(1, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			gap={1}
			columnGap={1}
		>
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

        {!isLoading && (
          <>
            {/*2:18:56*/}
            <ProfilePost img="/prof-pic-1.jpg"/>
            <ProfilePost img="/prof-pic-2.jpg"/>
            <ProfilePost img="/prof-pic-4.jpg"/>
            <ProfilePost img="/prof-pic-3.jpg"/>
          </>
        )}

		</Grid>
  )
}

export default ProfilePosts
