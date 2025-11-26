import { VStack, Text } from "@chakra-ui/react";
import type { ChatMessage } from "../types/chat";
import { ResponseBubble, PromptBubble } from "./BubbleForm";

export default function HistoryList({ items }: { items: ChatMessage[] }) {
  if (!items.length) {
    return <Text color="gray.500">No chat history yet.</Text>;
  }

  return (
    <VStack spacing={6} align="stretch">
      {items.map((msg) => (
        <VStack key={msg.id} align="stretch" spacing={2}>
          {/* Response bubble (AI), slightly raised */}
          <ResponseBubble text={msg.response} mt="-8px" />

          {/* Prompt bubble (user) */}
          <PromptBubble text={msg.prompt} />
        </VStack>
      ))}
    </VStack>
  );
}