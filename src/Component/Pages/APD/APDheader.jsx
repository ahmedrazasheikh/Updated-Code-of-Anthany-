import { useState } from 'react'
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import { Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input, HStack, Heading, Text, Flex, VStack, Image, AspectRatio, Accordion, AccordionItem,AccordionButton, Button, AccordionPanel, Select, AccordionIcon, FormLabel, FormControl } from '@chakra-ui/react';
import Header from '../../Header/HeadSideBar'
import { Checkbox } from 'antd';
import Nodes from './Notes/Notes';
import GLdrops from './GLdrops/GLdrops';
import Diary from './Diary/Diary';
import APDTrucking from './APDTrucking/APDTrucking';
import Memos from './Memos/Memos';
import History from './History/History';
export default function APDheader({ ResultsPerPageDrop }) {
      const [PerPage, setPerPage] = useState("APDTrucking");


    return (
        <div>
            {/* <Header /> */}

            <Flex h="" width='auto'
                rounded='md'
                // boxShadow='md'
                backgroundColor='#F6F6F6'
                marginLeft="15%" p='10'
            >
                <Box flex="1">
                    <Center>
                        <HStack justifyContent='center' boxShadow='2xl' style={{ justifyContent: "space-around" }} width='90%' height='10vh' align='center' rounded='md' mt="4">
                            {/* <Heading color='#2347F0' fontSize='4xl'>MGA Link</Heading> */}
                            {/* <Box boxShadow='md'> */}
                            <Text  fontWeight="bold"    onClick={() => setPerPage('APDTrucking')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Trucking</Text>
                            <Text  fontWeight="bold"    onClick={() => setPerPage('Premiums')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Premiums</Text>
                            <Text  fontWeight="bold"    onClick={() => setPerPage('Nodes')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Notes</Text>
                            <Text  fontWeight="bold"    onClick={() => setPerPage('Diary')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Diary</Text>
                            <Text  fontWeight="bold"    onClick={() => setPerPage('Memos')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Memos</Text>
                            <Text  fontWeight="bold"    onClick={() => setPerPage('History')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>History</Text>

                            {/* </Box> */}
                        </HStack>
                    </Center>
                    <br />

                </Box>

            </Flex>


            {/* </Container> */}

            {
                
                PerPage === 'APDTrucking' ? <><APDTrucking /></> :
                    PerPage === 'Premiums' ? <><APDTrucking /></> :
                        PerPage === 'Nodes' ? <><Nodes /></> :
                            PerPage === 'Diary' ? <><Diary /></> :
                                PerPage === 'Memos' ? <><Memos /></> :
                                PerPage === 'History' ? <><History /></> :
                                    <></>}
        </div>
    )
}