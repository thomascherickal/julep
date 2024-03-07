/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const NamedToolChoice: core.serialization.ObjectSchema<
  serializers.NamedToolChoice.Raw,
  JulepApi.NamedToolChoice
>;
export declare namespace NamedToolChoice {
  interface Raw {
    type: "function";
    function: serializers.NamedToolChoiceFunction.Raw;
  }
}
