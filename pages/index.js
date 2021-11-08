import React, { useState } from 'react'
import ScheduleTable from '../components/Table'
import EventModal from '../components/EventModal'
import {
  Flex,
  Heading,
  VStack,
  HStack
} from '@chakra-ui/react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Home() {
  const [date, setDate] = useState(new Date());
  const onChange = date => setDate(date)

  return (
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
          <Flex>
            <Calendar
              onChange={onChange}
              value={date}
            />
          </Flex>
        </Flex>

        <VStack
          spacing="24px"
        >
          <Heading fontSize="4xl">{date.toLocaleDateString("en-US")}</Heading>
          <ScheduleTable />
        </VStack>
      </HStack>

  )
}
