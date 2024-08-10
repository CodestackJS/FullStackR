import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, Textarea, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { Student } from "./DirectoryTable";
import axios from "axios";
import { BASE_URL } from "../constant";


interface StudentFormProps {
    isOpen: boolean;
    onClose: () => void;
    fetchProduct: () => void;
    currentData?: Student;
}



const StudentForm = () =>
    ({
        isOpen,
        onClose,
        fetchStudent,
        currentData,
    }: StudentFormProps) => {
        const toast = useToast();
        const [student, setStudent] = useState({
            id: currentData?.id || 0,
            name: currentData?.name || "",
            address: currentData?.address || "",
            phoneNumber: currentData?.phoneNumber || "",
            email: currentData?.email || "",
        });
        const onSave = () => {
            if (currentData?.id) {
                editStudent()
            } else {
                addStudent()
            }

        };

        //To edit student
        const editStudent = () => {
            axios
                .put(BASE_URL + "Students/" + currentData?.id, student)
                .then(() => {
                    onClose();
                    fetchStudent();
                    toast({
                        title: "Student Updated.",
                        description: "Product Updated Successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        //To Add student
        const addStudent = () => {
            axios
                .post(BASE_URL + "Students", student)
                .then((response) => {
                    onClose();
                    fetchStudent();
                    toast({
                        title: "Product Added.",
                        description: "Product Added Succesfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });

            console.log(student);
        };
        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack gap={3} alignItems={"self-start"}>
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    value={student.name}
                                    onChange={(e) =>
                                        setStudent({ ...student, name: e.target.value })
                                    }
                                />
                                <Textarea
                                    placeholder="Description"
                                    value={student.description}
                                    onChange={(e) =>
                                        setStudent({ ...student, description: e.target.value })
                                    }
                                />
                                <Input
                                    type="number"
                                    placeholder="Price"
                                    value={student.price}
                                    onChange={(e) =>
                                        setStudent({ ...student, price: e.target.value })
                                    }
                                />
                                <Text>Is in Store?</Text>
                                <Switch
                                    isChecked={student.isInStore}
                                    onChange={(e) =>
                                        setStudent({ ...student, isInStore: e.target.checked })
                                    }
                                />
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="red" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button onClick={onSave} colorScheme="teal">
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>


            </>
        )
    }

export default StudentForm;