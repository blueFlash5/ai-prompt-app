import { Box, Text, Spinner, HStack } from "@chakra-ui/react";

export function PromptBubble({ text }: { text: string }) {
  return (
    <Box
      maxW="70%"
      bg="blue.500"
      color="white"
      p={3}
      borderRadius="lg"
      boxShadow="sm"
      alignSelf="flex-start"
    >
      <Text fontWeight="bold" mb={1} fontSize="sm">
        You
      </Text>
      <Text whiteSpace="pre-wrap">{text}</Text>
    </Box>
  );
}

export function ResponseBubble({
  text,
  mt = 0,
}: {
  text: string;
  mt?: string | number;
}) {
  const isLoading = text === "Loading...";
  const isError = text.startsWith("Error");

  return (
    <Box
      maxW="70%"
      bg={isError ? "red.100" : "gray.200"}
      color="gray.800"
      p={3}
      borderRadius="lg"
      boxShadow="sm"
      alignSelf="flex-start"
      ml="auto"
      mt={mt}
    >
      <Text fontWeight="bold" mb={1} fontSize="sm">
        AI
      </Text>

      {isLoading ? (
        <HStack>
          <Spinner size="sm" />
          <Text>Loading...</Text>
        </HStack>
      ) : (
        <Text whiteSpace="pre-wrap">{text}</Text>
      )}
    </Box>
  );
}
