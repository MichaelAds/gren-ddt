import { Flex, Img, Box, Text, Heading, Button, VStack, theme, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { BoxInd } from "../components/Dashboard/BoxInd";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic"
import { api } from "../services/api";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const options: any = {
    chart: {
    type: 'polarArea',
  },
  labels: ['Dentro do prazo', 'Próximo ao vencimento', 'Prazo vencido',],
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }      
    }
  }]
} as const;

const series = [
     72, 65, 90
];

export default function Dashboard() {
    // api.get('/user')
    // .then(response => console.log(response.data))
    // api.get('/43881219838')
    // .then(response => console.log(response))
    return(
        <Flex
            direction="column"
            h="100vh"
        >
            <Header name="Dashboard"/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
                <Sidebar dashColor="#35CB8C" cadColor="#5a5a5a" orcaColor="#5a5a5a"/>

                <Flex
                    flex="1"
                    gap="4"
                    align="flex-start"
                    direction="column"
                >
                    <Box
                        p={["6", "8"]}
                        borderRadius={8}
                        pb="4"
                        border="1px" 
                        borderColor="gray.200"
                    >
                        
                            <Flex align="center">
                                <Box w="75%">
                                    <VStack spacing="4" align="start">
                                        <Heading color="gray.500" size="lg" fontWeight="700">Bem vindo ao sistema de gerenciamento de dedetização</Heading>
                                        <Text fontWeight="normal" color="gray.400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                                        <Button display="block" color="#35CB8C" variant="outline">
                                            Assistir tutorial
                                        </Button>
                                    </VStack>
                                </Box>

                                <Box>
                                    <Img src="/images/monitor-dash.svg" alt="Imagem decorativa monitoramento" />
                                </Box>
                            </Flex>
                    </Box>

                    <Box w="100%" my="6" maxWidth={1480} mx="auto">
                        <Heading color="gray.500" size="md" mb="5" fontWeight="700">indicadores</Heading>
                        <Flex align="center" justify="space-between" >

                            <BoxInd nameInd="lojas cadastradas" numberInd="10" colorInd="gray.500" />

                            <BoxInd nameInd="dentro do prazo" numberInd="05" colorInd="#35CB8C" />

                            <BoxInd nameInd="próximo ao vencimento" numberInd="04" colorInd="#FFB454" />

                            <BoxInd nameInd="prazo vencido" numberInd="01" colorInd="#FA5858" />

                            <BoxInd nameInd="nota média de contrato" numberInd="4.8" colorInd="gray.500" />

                            <BoxInd nameInd="tempo médio de execução" numberInd="1:45" colorInd="gray.500" />

                            <BoxInd nameInd="valor médio porm2" numberInd="30,00" colorInd="gray.500" />

                            <BoxInd nameInd="númedo de garantia técnica" numberInd="03" colorInd="gray.500" />

                        </Flex>
                    </Box>

                    <Box w="100%" my="6" maxWidth={1480} mx="auto">
                        <Heading color="gray.500" size="md" mb="5" fontWeight="700">analytics</Heading>

                        <Flex justify="space-evelyn" align="start">
                            <Box p="5" 
                                borderRadius={8}
                                border="1px" 
                                borderColor="gray.200">
                                <VStack>
                                    <Text color="gray.500">Gráfico</Text>
                                    <Chart options={options} series={series} type="polarArea" height={260}/>
                                </VStack>
                            </Box>
                            
                            <Box p="5" 
                                borderRadius={8}
                                border="1px" 
                                borderColor="gray.200">
                                <Text color="gray.500">Franquias / Lojas</Text>

                                <Table borderColor="gray.300">
                                    <Thead>
                                        <Tr>
                                            <Th><Text fontWeight="700" color="gray.500">código</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">responsável</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">região</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">serviço</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">última dedetização</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">vencimento</Text></Th>
                                            <Th><Text fontWeight="700" color="gray.500">tempo restante</Text></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Loja 1</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="#FA5858">Vencido</Text>
                                            </Td>
                                        </Tr>

                                        <Tr>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Loja 1</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="#FFB454">Amanhã</Text>
                                            </Td>
                                        </Tr>

                                        <Tr>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Loja 1</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                            </Td>
                                            <Td>
                                                <Text fontSize={12} color="#FFB454">Amanhã</Text>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

        </Flex>
    );
}