import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { handleMcpRequest } from "../utils/mcp-handler";
import { config } from "../lib/config";

import guitars from "../data/example-guitars";

const server = new McpServer({
  name: "guitar-app",
  version: "1.0.0",
});

server.registerTool(
  "getGuitars",
  {
    title: "Get all guitars",
    description: "Get all guitar products from the database",
    inputSchema: {},
  },
  async () => {
    return {
      content: [{ type: "text", text: JSON.stringify(guitars) }],
    };
  }
);

export const Route = createFileRoute("/mcp")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(
          JSON.stringify({
            name: "guitar-app",
            version: "1.0.0",
            description: "Guitar eCommerce MCP Server",
            capabilities: {
              tools: true,
              resources: true,
            },
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      },
      POST: async ({ request }) => {
        return await handleMcpRequest(request, server);
      },
      OPTIONS: async () => {
        return new Response(null, {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Max-Age": "86400",
          },
        });
      },
    },
  },
});
