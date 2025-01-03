import { Avatar, AvatarGroup, Flex, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:'row'}}>
      <AvatarGroup
        size={{base:'xl',md:'2xl'}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={'auto'}
      >
        <Avatar src='/2024_ermin_m.jpg' name='Ermin' alt='Profile pic'></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:"column",sm:"row"}}
        justifyContent={{base:"center",sm:"flex-start"}} w={'full'}>
            <Text fontSize={{base:'sm',md:"lg"}}>
                Ermin
            </Text>
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                <Button color={'black'} _hover={{bg:'whiteAlpha.800'}} bg={"white"} size={{base:'xs',md:'sm'}}>
                    Edit Profile
                </Button>

            </Flex>
        </Flex>
		<Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
			<Text fontSize={{ base: "xs", md: "sm" }}>
				<Text as='span' fontWeight={"bold"} mr={1}>
					1
				</Text>
				Posts
			</Text>
			<Text fontSize={{ base: "xs", md: "sm" }}>
				<Text as='span' fontWeight={"bold"} mr={1}>
					123
				</Text>
				Followers
			</Text>
			<Text fontSize={{ base: "xs", md: "sm" }}>
				<Text as='span' fontWeight={"bold"} mr={1}>
					124
				</Text>
				Following
			</Text>
		</Flex>
        <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"}>
                Description of a profile
            </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
