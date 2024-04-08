import { Realm } from "realm";

import { ColoredConsole } from "./coloredConsoleLog.ts";

export function getDeveloperInfo() {
  if (process.env.NODE_ENV === "development") {
    ColoredConsole.yellow("Development Info");
    ColoredConsole.green(`${Realm.defaultPath}`);
  }
}
