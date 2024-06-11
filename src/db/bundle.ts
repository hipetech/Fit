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
      // Chest
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
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Dumbbell press",
            description: "Dumbbell press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим гантелей",
            description: "Опис жиму гантелей",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Push-ups",
            description: "Push-ups description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Віджимання",
            description: "Опис віджимань",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Flyes",
            description: "Flyes description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Розведення",
            description: "Опис розведень",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Pullover",
            description: "Pullover description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Пуловер",
            description: "Опис пуловера",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Dips",
            description: "Dips description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Віджимання на брусах",
            description: "Опис віджимань на брусах",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Cable crossover",
            description: "Cable crossover description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Кросовер",
            description: "Опис кросовера",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Incline bench press",
            description: "Incline bench press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим на ухилі",
            description: "Опис жиму на ухилі",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Decline bench press",
            description: "Decline bench press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим лежачи нахилом",
            description: "Опис Жим лежачи із нахилом",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Machine press",
            description: "Machine press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Машинний жим",
            description: "Опис машинного жиму",
          },
        },
        exerciseItems: [],
        category: newCategories[0],
      });

      // Arms
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Barbell curl",
            description: "Barbell curl description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом штанги",
            description: "Опис підйому штанги",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Dumbbell curl",
            description: "Dumbbell curl description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом гантелей",
            description: "Опис підйому гантелей",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Hammer curl",
            description: "Hammer curl description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Молот",
            description: "Опис молота",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Triceps pushdown",
            description: "Triceps pushdown description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Трицепс",
            description: "Опис трицепса",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Triceps extension",
            description: "Triceps extension description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Трицепс на блоку",
            description: "Опис трицепса на блоку",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Dips",
            description: "Dips description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Віджимання",
            description: "Опис віджимань",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Skull crusher",
            description: "Skull crusher description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим лежачи",
            description: "Опис жиму лежачи",
          },
        },
        exerciseItems: [],
        category: newCategories[1],
      });

      // Back
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Pull-ups",
            description: "Pull-ups description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Відтягування",
            description: "Опис відтягувань",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Deadlift",
            description: "Deadlift description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Станова тяга",
            description: "Опис станової тяги",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Bent-over row",
            description: "Bent-over row description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Тяга штанги в нахилі",
            description: "Опис тяги штанги в нахилі",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "T-bar row",
            description: "T-bar row description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Тяга Т-грифа",
            description: "Опис тяги Т-грифа",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Lat pulldown",
            description: "Lat pulldown description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Тяга верхнього блоку",
            description: "Опис тяги верхнього блоку",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Seated row",
            description: "Seated row description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Тяга вниз",
            description: "Опис тяги вниз",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Hyperextension",
            description: "Hyperextension description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Гіперекстензія",
            description: "Опис гіперекстензії",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Machine row",
            description: "Machine row description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Машинна тяга",
            description: "Опис машинної тяги",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Pulldown",
            description: "Pulldown description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Тяга зверху",
            description: "Опис тяги зверху",
          },
        },
        exerciseItems: [],
        category: newCategories[2],
      });

      // Shoulders
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Military press",
            description: "Military press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Військовий жим",
            description: "Опис військового жиму",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Dumbbell press",
            description: "Dumbbell press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Жим гантелей",
            description: "Опис жиму гантелей",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Lateral raise",
            description: "Lateral raise description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом гантелей в боки",
            description: "Опис підйому гантелей в боки",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Front raise",
            description: "Front raise description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом гантелей вперед",
            description: "Опис підйому гантелей вперед",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Reverse flyes",
            description: "Reverse flyes description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Розведення вперед",
            description: "Опис розведень вперед",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Shrugs",
            description: "Shrugs description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом плечей",
            description: "Опис підйому плечей",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Upright row",
            description: "Upright row description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом штанги вперед",
            description: "Опис підйому штанги вперед",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Arnold press",
            description: "Arnold press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Арнольд жим",
            description: "Опис Арнольд жиму",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Machine press",
            description: "Machine press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Машинний жим",
            description: "Опис машинного жиму",
          },
        },
        exerciseItems: [],
        category: newCategories[3],
      });

      // Core
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Crunches",
            description: "Crunches description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Прес",
            description: "Опис пресу",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Leg raises",
            description: "Leg raises description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом ніг",
            description: "Опис підйому ніг",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Plank",
            description: "Plank description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Планка",
            description: "Опис планки",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Russian twist",
            description: "Russian twist description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Російський оберт",
            description: "Опис російського оберту",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Side plank",
            description: "Side plank description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Бічна планка",
            description: "Опис бічної планки",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "V-sit",
            description: "V-sit description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "V-сід",
            description: "Опис V-сіду",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Hollow hold",
            description: "Hollow hold description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Пустота",
            description: "Опис пустоти",
          },
        },
        exerciseItems: [],
        category: newCategories[4],
      });

      // Legs
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Squats",
            description: "Squats description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Присідання",
            description: "Опис присідань",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Leg press",
            description: "Leg press description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Прес ніг",
            description: "Опис пресу ніг",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Lunges",
            description: "Lunges description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Випади",
            description: "Опис випадів",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Leg curl",
            description: "Leg curl description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Згинання ніг",
            description: "Опис згинання ніг",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Leg extension",
            description: "Leg extension description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Розгинання ніг",
            description: "Опис розгинання ніг",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Calf raise",
            description: "Calf raise description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом на носки",
            description: "Опис підйому на носки",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Glute bridge",
            description: "Glute bridge description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Міст",
            description: "Опис мосту",
          },
        },
        exerciseItems: [],
        category: newCategories[5],
      });

      // Crossfit
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Burpees",
            description: "Burpees description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Берпі",
            description: "Опис берпі",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Kettlebell swing",
            description: "Kettlebell swing description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Махи гирею",
            description: "Опис махів гирею",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Box jump",
            description: "Box jump description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Стрибки на ящик",
            description: "Опис стрибків на ящик",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Wall ball",
            description: "Wall ball description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "М'яч на стіну",
            description: "Опис м'яча на стіну",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Double under",
            description: "Double under description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Подвійний оберт",
            description: "Опис подвійного оберту",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Handstand push-ups",
            description: "Handstand push-ups description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Віджимання від стіни",
            description: "Опис віджимань від стіни",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Rope climb",
            description: "Rope climb description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом по канату",
            description: "Опис підйому по канату",
          },
        },
        exerciseItems: [],
        category: newCategories[6],
      });

      // Cardio
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Running",
            description: "Running description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Біг",
            description: "Опис бігу",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Cycling",
            description: "Cycling description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Велосипед",
            description: "Опис велосипеду",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Swimming",
            description: "Swimming description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Плавання",
            description: "Опис плавання",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Jumping rope",
            description: "Jumping rope description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Стрибки на скакалці",
            description: "Опис стрибків на скакалці",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Rowing",
            description: "Rowing description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Гребля",
            description: "Опис греблі",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Stair climbing",
            description: "Stair climbing description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Підйом по сходах",
            description: "Опис підйому по сходах",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Jumping jacks",
            description: "Jumping jacks description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Стрибки в сторони",
            description: "Опис стрибків в сторони",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
      realm.create("Exercise", {
        _id: new Realm.BSON.ObjectId(),
        createdAt: new Date(),
        lastEdit: new Date(),
        copies: {
          en: {
            _id: new Realm.BSON.ObjectId(),
            title: "Boxing",
            description: "Boxing description",
          },
          uk: {
            _id: new Realm.BSON.ObjectId(),
            title: "Бокс",
            description: "Опис боксу",
          },
        },
        exerciseItems: [],
        category: newCategories[7],
      });
    });
  }

  realm.close();
}

export { bundleRealm };
