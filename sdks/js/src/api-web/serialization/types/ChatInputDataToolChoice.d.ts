/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const ChatInputDataToolChoice: core.serialization.Schema<
  serializers.ChatInputDataToolChoice.Raw,
  JulepApi.ChatInputDataToolChoice
>;
export declare namespace ChatInputDataToolChoice {
  type Raw = serializers.ToolChoiceOption.Raw | serializers.NamedToolChoice.Raw;
}
