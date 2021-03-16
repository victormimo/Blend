"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        name: "default",
        type: "postgres",
        port: Number(process.env.POSTGRES_PROD_PORT) || 5432,
        host: process.env.POSTGRES_PROD_HOST || "localhost",
        username: "postgres",
        password: process.env.POSTGRES_PROD_PASS || "postgres",
        database: process.env.POSTGRES_PROD_DB || "scraper",
        logging: false,
        synchronize: true,
        entities: ["**/entities/**/*.js"],
        dropSchema: false,
    },
    {
        name: "test",
        type: "postgres",
        port: Number(process.env.POSTGRES_TEST_PORT) || 5432,
        host: process.env.POSTGRES_TEST_HOST || "localhost",
        username: "postgres",
        password: process.env.POSTGRES_TEST_PASS || "postgres",
        dropSchema: false,
        database: process.env.POSTGRES_TEST_DB || "test",
        logging: false,
        synchronize: true,
        entities: ["**/entities/**/*{.ts,.js}"],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0JBQWU7SUFDYjtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSTtRQUNwRCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxXQUFXO1FBQ25ELFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLFVBQVU7UUFDdEQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksU0FBUztRQUNuRCxPQUFPLEVBQUUsS0FBSztRQUNkLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFFBQVEsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2pDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUk7UUFDcEQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksV0FBVztRQUNuRCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxVQUFVO1FBQ3RELFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLE1BQU07UUFDaEQsT0FBTyxFQUFFLEtBQUs7UUFDZCxXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN4QztDQUNGLENBQUMifQ==