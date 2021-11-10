import React, { useState } from "react";
import ScheduleTable from "../components/Table";
import {
  Flex,
  Heading,
  VStack,
  HStack,
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Spacer,
  Text
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TimePicker() {
  var time = [];
  for (var i = 8; i < 17; i+=0.5) {
    time.push(i=>{(i-i)===0?i.toString+":00":i.toString+":30"})
  }
  return(
    <>
        {time.map((time, i) =><option value="{time}">{time}</option>)}
    </>
  )
}

export default function Home() {
  const [date, setDate] = useState(new Date());

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack spacing="24px">
        <Flex
          pos="sticky"
          h="100vh"
          boxShadow="0 0 24px 0 rgba(0, 0, 0, 0.15)"
          w="300px"
          flexDir="column"
          bgColor="#C4C4C4"
          justifyContent="space-between"
        >
          <VStack spacing="24px" justify="left">
            <Flex w="100%">
              <Calendar onChange={(date) => setDate(date)} value={date} />
            </Flex>
            <IconButton
              aria-label="Open Modal"
              icon={<FiPlus />}
              onClick={onOpen}
            />
          </VStack>
        </Flex>

        <VStack spacing="24px">
          <Heading fontSize="4xl">{date.toLocaleDateString("en-US")}</Heading>
          <ScheduleTable />
        </VStack>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input placeholder="Event Name" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Booker</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Date</FormLabel>
              <Flex>
                <NumberInput defaultValue={10} min={1} max={31} w="20%">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Spacer />
                <NumberInput defaultValue={11} min={1} max={12} w="20%">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Spacer />
                <NumberInput defaultValue={2021} min={2000} max={2030} w="40%">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Time</FormLabel>
              <Flex>
                <Select placeholder="start" w="40%">{TimePicker()}</Select>
                <Spacer />
                <Text fontSize="xl">
                  to
                </Text>
                <Spacer />
                <Select placeholder="end" w="40%">{TimePicker()}</Select>
              </Flex>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
