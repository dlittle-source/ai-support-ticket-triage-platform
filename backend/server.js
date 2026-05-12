require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Support Ticket Triage API is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    service: "ai-support-ticket-triage-api",
  });
});

app.post("/api/triage", async (req, res) => {
  try {
    const { ticket } = req.body;

    if (!ticket || typeof ticket !== "string" || ticket.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: "Ticket text is required and must be at least 10 characters.",
      });
    }

    const prompt = `
You are an AI support ticket triage assistant for DevOps and cloud infrastructure teams.

Analyze the following support ticket and return ONLY valid JSON. Do not use markdown. Do not wrap the JSON in code blocks.

Support Ticket:
"${ticket}"

Return this JSON structure:
{
  "severity": "Low | Medium | High | Critical",
  "priority": "P4 | P3 | P2 | P1",
  "category": "Deployment | Networking | Authentication | Performance | Infrastructure | Database | Security | Other",
  "summary": "Brief summary of the issue",
  "business_impact": "Short explanation of potential impact",
  "recommended_actions": [
    "Action 1",
    "Action 2",
    "Action 3"
  ]
}
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const aiText = response.output_text.trim();

    const cleanedText = aiText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedText);

    res.json({
      success: true,
      ticket,
      analysis: parsed,
    });
  } catch (error) {
    console.error("Triage error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to analyze support ticket.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`AI Support Ticket Triage API running on port ${PORT}`);
});