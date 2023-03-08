import { sbtPrint } from "./sbt";

function isDev(): boolean {
  return process.env.NODE_ENV !== "production";
}

/**
 * Run Scala.js Link
 * @returns Linker output path
 */
export function linkJS(): string {
  let path: string;

  if (isDev()) {
    path = sbtPrint("fastLinkJSOutput");
  } else {
    path = sbtPrint("fullLinkJSOutput");
  }

  return path;
}
