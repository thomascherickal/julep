/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgentDefaultSettings = {
  /**
   * (OpenAI-like) Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
   */
  frequency_penalty?: number | null;
  /**
   * (Huggingface-like) Number between 0 and 2.0. 1.0 is neutral and values larger than that penalize number of tokens generated.
   */
  length_penalty?: number | null;
  /**
   * (OpenAI-like) Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
   */
  presence_penalty?: number | null;
  /**
   * (Huggingface-like) Number between 0 and 2.0. 1.0 is neutral and values larger than that penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
   */
  repetition_penalty?: number | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * Defaults to 1 An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;
  /**
   * Minimum probability compared to leading token to be considered
   */
  min_p?: number;
  /**
   * Generation preset name (one of: problem_solving, conversational, fun, prose, creative, business, deterministic, code, multilingual)
   */
  preset?:
    | "problem_solving"
    | "conversational"
    | "fun"
    | "prose"
    | "creative"
    | "business"
    | "deterministic"
    | "code"
    | "multilingual";
};
