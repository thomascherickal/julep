/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateSessionRequest = {
  description: `A valid request payload for creating a session`,
  properties: {
    user_id: {
      type: "string",
      description: `(Optional) User ID of user to associate with this session`,
      format: "uuid",
    },
    agent_id: {
      type: "string",
      description: `Agent ID of agent to associate with this session`,
      isRequired: true,
      format: "uuid",
    },
    situation: {
      type: "string",
      description: `A specific situation that sets the background for this session`,
    },
    metadata: {
      description: `Optional metadata`,
      properties: {},
    },
    render_templates: {
      type: "boolean",
      description: `Render system and assistant message content as jinja templates`,
    },
  },
} as const;
