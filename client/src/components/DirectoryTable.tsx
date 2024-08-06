import { AddIcon } from "@chakra-ui/icons"
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Box, Button, Flex, Heading } from "@chakra-ui/react"


export const DirectoryTable = () => {
  return (
    <>
    <Box m={32} shadow={"md"} rounded={"md"}>
        <Flex justifyContent={"space-between"} px={"5"}>
          <Heading fontSize={25}>Student Directory</Heading>
          <Button
            // onClick={() => handleAdd()}
            color="teal.300"
            leftIcon={<AddIcon />}
          >
            {" "}
            Add Student
          </Button>
        </Flex>

        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Phone Number</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>

            


            </Table>


        </TableContainer>



    </Box>



    
    
    </>
  )
}
