import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [template, setTemplate] = useState("general");

  const addItem = () => {
    if (name && quantity && price) {
      setItems([...items, { name, quantity, price }]);
      setName("");
      setQuantity("");
      setPrice("");
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="pink.600">
          Quotation Creator
        </Heading>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <Stack spacing={4}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <FormControl>
                  <FormLabel>Product/Service Name {i + 1}</FormLabel>
                  <Input
                    value={items[i]?.name || ""}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[i] = { ...newItems[i], name: e.target.value };
                      setItems(newItems);
                    }}
                    placeholder="Enter product or service name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Quantity {i + 1}</FormLabel>
                  <Input
                    type="number"
                    value={items[i]?.quantity || ""}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[i] = { ...newItems[i], quantity: e.target.value };
                      setItems(newItems);
                    }}
                    placeholder="Enter quantity"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price {i + 1}</FormLabel>
                  <Input
                    type="number"
                    value={items[i]?.price || ""}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[i] = { ...newItems[i], price: e.target.value };
                      setItems(newItems);
                    }}
                    placeholder="Enter price"
                  />
                </FormControl>
              </React.Fragment>
            ))}
            <Text fontWeight="bold">Total: ${calculateTotal()}</Text>
          </Stack>
        </Box>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product/Service</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>${item.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Text mt={4} fontWeight="bold">
            Total: ${calculateTotal()}
          </Text>
        </Box>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <FormControl>
            <FormLabel>Select Template</FormLabel>
            <Select value={template} onChange={(e) => setTemplate(e.target.value)}>
              <option value="general">General</option>
              <option value="construction">Construction</option>
              <option value="consulting">Consulting</option>
            </Select>
          </FormControl>
          <Stack direction="row" mt={4} spacing={4}>
            <Button leftIcon={<FaFileAlt />} colorScheme="pink">
              Export
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="pink">
              Send Email
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
