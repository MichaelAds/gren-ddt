import { Flex, Box, Heading, Icon, Img, Link, Avatar, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { BsFillBellFill } from "react-icons/bs"
import { RiArrowDownSLine } from "react-icons/ri"

export function Header() {
    return(
        <Flex m={8} align="center" maxWidth={1480} w="100%" mx="auto" justify="space-between">
            <Flex w="10%" align="center">
                <Img size="lg" src="/images/logoHeader.svg" alt="logo green-ddt" ml="3" mr={10}/>
                <Heading color="gray.500" size="lg" fontWeight="700">Dasboard</Heading>
            </Flex>

            <Flex w="15%" align="center" justify="space-between">
                <Icon as={BsFillBellFill} m="auto" />

                <Flex align="center">
                    <Avatar size="sm" name="Michael Souza" mr="2"/>
                
                    <Menu>
                        <MenuButton p={4} color="gray.500" as={Button} size="sm" fontSize={10} rightIcon={<Icon as={RiArrowDownSLine} />}>
                            Michael Souza
                        </MenuButton>
                        <MenuList>
                            <MenuItem color="#FA5858" fontSize={10}>
                                <Link href="/access/login">
                                    Log out
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}