import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function PromptForm({
  onSubmit,
  disabled
}: {
  onSubmit: (value: string) => void;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
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
          isDisabled={disabled}
        />
        <Button
          colorScheme="blue"
          type="submit"
          width="100%"
          isDisabled={disabled}
          isLoading={disabled}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}