import { T as TSS_SERVER_FUNCTION, b as createServerFn } from "./server-DZmASGXn.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { d as discriminatedUnionType, o as objectType, s as stringType, l as literalType, n as numberType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const registerSchema = discriminatedUnionType("type", [objectType({
  type: literalType("class"),
  student: stringType().min(1, "Student name is required"),
  age: stringType().min(1, "Age is required"),
  parent: stringType().optional(),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  level: stringType().min(1, "Experience level is required"),
  startDate: stringType().min(1, "Start date is required"),
  batchName: stringType().min(1, "Batch name is required")
}), objectType({
  type: literalType("workshop"),
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  level: stringType().min(1, "Experience level is required"),
  workshopTitle: stringType().min(1, "Workshop title is required"),
  fee: numberType().optional(),
  date: stringType().optional(),
  format: stringType().optional()
}), objectType({
  type: literalType("enquiry"),
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  message: stringType().min(1, "Message is required")
})]);
const submitRegistration_createServerFn_handler = createServerRpc({
  id: "9e58baf11c8faa90393eacafd0c351424b17bf15083f49b1a489e8b5e2d5e371",
  name: "submitRegistration",
  filename: "src/lib/api/register.functions.ts"
}, (opts) => submitRegistration.__executeServer(opts));
const submitRegistration = createServerFn({
  method: "POST"
}).validator(registerSchema).handler(submitRegistration_createServerFn_handler, async ({
  data
}) => {
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!googleScriptUrl || googleScriptUrl.trim() === "") {
    console.warn("GOOGLE_SCRIPT_URL is not configured. Simulating successful registration for data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    return {
      success: true,
      warning: "Developer Mode: GOOGLE_SCRIPT_URL not configured. Form was processed in simulation mode."
    };
  }
  try {
    console.log(`Submitting ${data.type} registration to Google Apps Script Web App...`);
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`Google Apps Script responded with HTTP ${response.status}`);
    }
    const resData = await response.json();
    if (resData.status === "error") {
      throw new Error(resData.message || "Failed to process registration inside Apps Script");
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Error submitting registration to Google Sheets:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during registration";
    return {
      success: false,
      error: errorMessage
    };
  }
});
export {
  submitRegistration_createServerFn_handler
};
