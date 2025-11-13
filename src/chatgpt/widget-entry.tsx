import React from "react";
import { createRoot, Root } from "react-dom/client";

import GuitarRecommendation from "./GuitarRecommendation";
import { ChatGPTIntegration, useChatGPTToolOutput } from "./integration";
import { getBaseURL } from "../lib/config";

import "@/styles.css";

const CONTAINER_ID = "tanstack-app-root";

function ensureRoot(): Root {
  const container = document.getElementById(CONTAINER_ID);
  if (!container) {
    throw new Error(`Container #${CONTAINER_ID} not found`);
  }

  let root = (container as any)._reactRoot as Root | undefined;
  if (!root) {
    root = createRoot(container);
    (container as any)._reactRoot = root;
  }
  return root;
}

function PlaceGuitarRecommendation() {
  const toolOutput = useChatGPTToolOutput<{ id?: string }>();
  if (!toolOutput?.id) {
    return null;
  }
  return (
    <GuitarRecommendation id={toolOutput.id}>
      <a
        onClick={() => {
          (window as any).openai.openExternal({
            href: `${getBaseURL()}example/guitars/${toolOutput.id}`,
          });
        }}
      >
        <button className="bg-linear-to-r from-orange-500 to-red-600 text-white px-4 py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
          View Details
        </button>
      </a>
    </GuitarRecommendation>
  );
}

const config = {
  baseURL: getBaseURL(),
  debug: true,
};

function render() {
  ensureRoot().render(
    <React.StrictMode>
      <ChatGPTIntegration config={config}>
        <PlaceGuitarRecommendation />
      </ChatGPTIntegration>
    </React.StrictMode>
  );
}

render();
