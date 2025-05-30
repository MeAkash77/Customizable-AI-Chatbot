import { z } from "zod";
import { citationSchema } from "./data";

/**
 * This file contains types and schemas for chat-related functionalities.
 * It includes schemas for display messages, chat structures,
 * loading indicators, and indicator icon types.
 *
 * @file types/chat.ts
 * @author Son Nguyen
 * @license MIT
 * @version 1.0.0
 * @date 2025-05-11
 */

export const displayMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string(),
  citations: z.array(citationSchema).default([]),
});
export type DisplayMessage = z.infer<typeof displayMessageSchema>;

export const chatSchema = z.object({
  messages: z.array(displayMessageSchema),
});
export type Chat = z.infer<typeof chatSchema>;

export const indicatorIconTypeSchema = z.enum([
  "thinking",
  "searching",
  "understanding",
  "documents",
  "none",
  "error",
]);
export type IndicatorIconType = z.infer<typeof indicatorIconTypeSchema>;

export const loadingIndicatorSchema = z.object({
  status: z.string(),
  icon: indicatorIconTypeSchema,
});
export type LoadingIndicator = z.infer<typeof loadingIndicatorSchema>;
