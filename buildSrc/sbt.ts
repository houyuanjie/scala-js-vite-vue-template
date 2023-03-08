import {
  spawnSync,
  SpawnSyncOptionsWithStringEncoding,
  SpawnSyncReturns,
} from "child_process";

/**
 * Run SBT print task
 * @param taskName sbt task name
 * @returns sbt print out
 */
export function sbtPrint(taskName: string): string {
  const args = ["--error", "--batch", `print ${taskName}`];
  const spawnSyncOptions: SpawnSyncOptionsWithStringEncoding = {
    stdio: [
      "pipe",
      "pipe",
      "inherit", // StdErr.
    ],
    encoding: "utf-8",
  };

  let result: SpawnSyncReturns<string>;

  if (process.platform === "win32") {
    result = spawnSync(
      "sbt",
      args.map((arg) => `"${arg}"`),
      {
        shell: true,
        ...spawnSyncOptions,
      }
    );
  } else {
    result = spawnSync("sbt", args, spawnSyncOptions);
  }

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`sbt process failed with exit code ${result.status}`);
  }

  return result.stdout.trim();
}
