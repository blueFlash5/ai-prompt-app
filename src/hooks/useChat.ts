/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import OpenAI from "openai";
import type { ChatMessage } from "../types/chat";

export const useChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [history, setHistory] = useState<ChatMessage[]>(() => {
    return JSON.parse(localStorage.getItem("history") || "[]");
  });

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  // Immediately add user prompt, then update later
  const sendPrompt = async (prompt: string) => {
    setLoading(true);
    setError(null);

    // Create temporary message first
    const tempMessage: ChatMessage = {
      id: crypto.randomUUID(),
      prompt,
      response: "Loading...", // placeholder
      timestamp: new Date().toISOString()
    };

    // Newest first
    setHistory(prev => {
      const updated = [tempMessage, ...prev];
      localStorage.setItem("history", JSON.stringify(updated));
      return updated;
    });

    try {
      // Call OpenAI API
      const response = await client.responses.create({
        model: "gpt-4.1-mini",
        input: prompt
      });

      const text = response.output_text ?? "";

      // Replace placeholder with actual AI response
      setHistory(prev => {
        const updated = prev.map(m =>
          m.id === tempMessage.id ? { ...m, response: text } : m
        );
        localStorage.setItem("history", JSON.stringify(updated));
        return updated;
      });

      return text;
    } catch (err: any) {
      const msg =
        err?.response?.error?.message ||
        err?.message ||
        "Connection error";

      setError(msg);

      // Update temp message to show error
      setHistory(prev => {
        const updated = prev.map(m =>
          m.id === tempMessage.id
            ? { ...m, response: `Error: ${msg}` }
            : m
        );
        localStorage.setItem("history", JSON.stringify(updated));
        return updated;
      });

      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  return { loading, error, history, sendPrompt, clearHistory };
};