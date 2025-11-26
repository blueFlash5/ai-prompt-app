import { Box, Container, Heading, Button } from "@chakra-ui/react";
import PromptForm from "./components/PromptForm";
import HistoryList from "./components/HistoryList";
import { useChat } from "./hooks/useChat";

function App() {
  const { sendPrompt, history, clearHistory } = useChat();

  const handleSubmit = async (prompt: string) => {
    await sendPrompt(prompt);
  };

  return (
    <Container maxW="600px" py={10}>
      <Heading mb={6}>AI Chat App</Heading>

      <PromptForm onSubmit={handleSubmit} />

      {history.length ? (
        <Button mt={6} colorScheme="red" onClick={clearHistory}>
          Clear History
        </Button>
      ) : (
        <></>
      )}

      <Box mt={8}>
        <HistoryList items={history} />
      </Box>
    </Container>
  );
}

export default App;
