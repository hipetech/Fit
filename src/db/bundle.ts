import Realm from "realm";

import { config } from "./config.ts";

async function bundleRealm() {
  const realm = await Realm.open(config);

  // bundle categories
  const categories = realm.objects("Category");

  if (!categories.length) {
    realm.write(() => {
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Chest",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Груди",
          },
        },
        exercises: [],
        color: "#20F20E",
        image: "chest",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Arms",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Руки",
          },
        },
        exercises: [],
        color: "#F20E1C",
        image: "arms",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Back",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Спина",
          },
        },
        exercises: [],
        color: "#0EBCF2",
        image: "back",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Shoulders",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Плечі",
          },
        },
        exercises: [],
        color: "#D20EF2",
        image: "shoulders",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Core",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Прес",
          },
        },
        exercises: [],
        color: "#EEF20E",
        image: "core",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Legs",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Ноги",
          },
        },
        exercises: [],
        color: "#F20E0E",
        image: "legs",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Crossfit",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Кросфіт",
          },
        },
        exercises: [],
        color: "#0EF2AE",
        image: "crossfit",
      });
      realm.create("Category", {
        _id: new Realm.BSON.ObjectId(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Cardio",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Кардіо",
          },
        },
        exercises: [],
        color: "#F20E89",
        image: "cardio",
      });
    });
  }

  // bundle exercises
  const exercises = realm.objects("Exercise");
  const newCategories = realm.objects("Category");

  if (!exercises.length) {
    realm.write(() => {
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Bench press",
            description: "Bench press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим лежачи",
            description: "Опис жиму лежачи",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
    });
  }

  realm.close();
}

export { bundleRealm };
