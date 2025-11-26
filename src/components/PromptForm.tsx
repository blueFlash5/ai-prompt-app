import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function PromptForm({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={3}>
        <Input
          placeholder="Enter your prompt..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="blue" type="submit" width="100%">
          Submit
        </Button>
      </VStack>
    </form>
  );
}