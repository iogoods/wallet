import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { IBlock } from "./components/types";
import type { ToasterInstance } from "@blueprintjs/core";

export interface IFormatOptions {
  decimals: number;
  chainSS58: number;
  unit: string;
}

// RPC API (use `_v{X}` suffix to have possibility to change default atom value in future)
export const defaultEndpoint = "wss://rpc.iowallet.de";
export const apiEndpointAtom = atomWithStorage<string>("apiEndpoint_v5", defaultEndpoint);
export const formatOptionsAtom = atom<IFormatOptions | false>(false);
export const apiAdvancedModeAtom = atomWithStorage<boolean>("apiAdvancedMode_v1", false);
export const poolIdsAtom = atomWithStorage<string[]>("poolIds_v1", []);

// Explorer GraphQL API
export const apiExplorerEndpointAtom = atomWithStorage<string>("apiExplorerEndpoint_v2", "https://explorer-api.iowallet.de/graphql/");

export const toasterAtom = atom<ToasterInstance | undefined>(undefined);
export const blocksAtom = atom<IBlock[]>([]);
export const bestNumberFinalizedAtom = atom<bigint>(BigInt(0));
