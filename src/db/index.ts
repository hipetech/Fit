import { createRealmContext } from "@realm/react";
import Realm from "realm";

import { config } from "./config.ts";

export const { RealmProvider, useRealm, useQuery, useObject } = createRealmContext(config);

export const realm = new Realm(config);
