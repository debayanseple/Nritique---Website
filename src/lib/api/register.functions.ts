import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const registerSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("class"),
    student: z.string().min(1, "Student name is required"),
    age: z.string().min(1, "Age is required"),
    parent: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    level: z.string().min(1, "Experience level is required"),
    startDate: z.string().min(1, "Start date is required"),
    batchName: z.string().min(1, "Batch name is required"),
  }),
  z.object({
    type: z.literal("workshop"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    level: z.string().min(1, "Experience level is required"),
    workshopTitle: z.string().min(1, "Workshop title is required"),
    fee: z.number().optional(),
    date: z.string().optional(),
    format: z.string().optional(),
  }),
  z.object({
    type: z.literal("enquiry"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required"),
  }),
]);

export type RegistrationInput = z.infer<typeof registerSchema>;

export const submitRegistration = createServerFn({ method: "POST" })
  .validator(registerSchema)
  .handler(async ({ data }) => {
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl || googleScriptUrl.trim() === "") {
      console.warn(
        "GOOGLE_SCRIPT_URL is not configured. Simulating successful registration for data:",
        data,
      );

      // Simulate delay for realism in development
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        success: true,
        warning:
          "Developer Mode: GOOGLE_SCRIPT_URL not configured. Form was processed in simulation mode.",
      };
    }

    try {
      console.log(`Submitting ${data.type} registration to Google Apps Script Web App...`);
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script responded with HTTP ${response.status}`);
      }

      const resData = await response.json();

      if (resData.status === "error") {
        throw new Error(resData.message || "Failed to process registration inside Apps Script");
      }

      return { success: true };
    } catch (error: unknown) {
      console.error("Error submitting registration to Google Sheets:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred during registration";
      return {
        success: false,
        error: errorMessage,
      };
    }
  });
