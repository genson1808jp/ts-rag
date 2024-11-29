import {
  LlamaParseReader,
  // we'll add more here later
} from "llamaindex";

import { MarkdownReader } from "llamaindex";

import * as fs from "fs";

async function main(): Promise<void> {
  try {
    // Path to the PDF document
    const inputPath = "../docs/NDI-5.6-White-Paper-2023.pdf";

    // Output file path
    const outputPath = "../parsed_document.md";

    // Check if the output file already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Output file already exists at ${outputPath}. Skipping parsing.`);
      return;
    }

    // Set up the LlamaParseReader with result type and API key
    const reader = new LlamaParseReader({
      resultType: "markdown",
      apiKey: "",
    });

    // Parse the document
    const documents = await reader.loadData(inputPath);

// Extract content and combine into a single string
    const parsedContent = documents.map(doc => doc.text).join("\n");

    // Save the parsed content to a file
    fs.writeFileSync(outputPath, parsedContent, "utf-8");

  

    console.log(`Parsed document saved to ${outputPath}`);
  } catch (error) {
    console.error("Error processing the document:", error);
  }
}
main().catch(console.error);

async function embedding2store(): Promise<void> {
  
}