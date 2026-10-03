import { cv } from "./cv";
import { exhibition } from "./exhibition";
import { settings } from "./settings";

export const schemaTypes = [settings, exhibition, cv];

// Documents that exist exactly once
export const singletonTypes = new Set(["settings", "cv"]);
