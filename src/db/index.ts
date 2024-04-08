import { createRealmContext } from "@realm/react";

import { config } from "./config.ts";

export const { RealmProvider, useRealm, useQuery, useObject } = createRealmContext(config);
