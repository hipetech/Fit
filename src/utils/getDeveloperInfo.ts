import { realm } from "../db";
import { ColoredConsole } from "./coloredConsoleLog.ts";

export function getDeveloperInfo() {
  if (process.env.NODE_ENV === "development") {
    ColoredConsole.yellow("Development Info");
    ColoredConsole.blue(`Realm path: ${realm.path}`);
  }
}
