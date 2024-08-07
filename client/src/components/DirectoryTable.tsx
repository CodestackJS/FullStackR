import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Avatar,
  Text,
  PopoverTrigger,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant";

export interface Student {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export const DirectoryTable = () => {
  //useState
  const [data, setData] = useState<Student[]>([]);

//Function to get data from API
const fetchData = () => {
  axios
  .get(BASE_URL + "Students")
  .then((response) => {
    setData(response.data);
  })
  .catch((error) =>{
    console.log(error);
  })
}

useEffect(() => {
  fetchData();
}, []);


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
            <Tbody>
              {data.map((student: Student) => (
                <Tr key={student.id}>
                  <Td>{student.id}</Td>
                  <Td>
                    <HStack>
                      <Avatar size={"sm"} name={student.name} />
                      <Text>{student.name}</Text>
                    </HStack>
                  </Td>

                  <Td>{student.address}</Td>
                  <Td>{student.phoneNumber}</Td>
                  <Td>{student.email}</Td>
                  <Td>
                    <HStack>
                      <EditIcon
                        //onClick={() => getStudent(student.id)}
                        boxSize={23}
                        color={"orange.200"}
                      />

                      <Popover>
                        <PopoverTrigger>
                          <DeleteIcon boxSize={23} color={"red.400"} />
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Confirmation!</PopoverHeader>
                          <PopoverBody>
                            Are you sure you want to Delete?
                          </PopoverBody>
                          <PopoverFooter>
                            <Button
                              colorScheme="red"
                              variant={"outline"}
                              //onClick={() => studentDelete(student.id)}
                            >
                              Delete
                            </Button>
                          </PopoverFooter>
                        </PopoverContent>
                      </Popover>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/* {data.length == 0 && (
          <Heading p={5} textAlign={"center"} fontSize={24}>
            No Data
          </Heading>
        )}
        {isOpen && (
          <ProductForm
            currentData={currentData}
            fetchProduct={fetchData}
            isOpen={isOpen}
            onClose={onClose}
          />
        )} */}
      
      </Box>
    </>
  );
};
