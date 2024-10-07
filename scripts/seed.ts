const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Photography" },
        { name: "Fitnness" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });

    console.log("Success🎉🥂");
  } catch (error) {
    console.log("Error seeding the database category", error);
  } finally {
    await database.$disconnect();
  }
}

main();