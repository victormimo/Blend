"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var config_1 = __importDefault(require("../config"));
var transports = [];
if (process.env.NODE_ENV !== "development") {
    transports.push(new winston_1.default.transports.Console());
}
else {
    transports.push(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.cli(), winston_1.default.format.splat()),
    }));
}
var LoggerInstance = winston_1.default.createLogger({
    level: config_1.default.logs.level,
    levels: winston_1.default.config.npm.levels,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
    transports: transports,
});
exports.default = LoggerInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbG9hZGVycy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBOEI7QUFDOUIscURBQStCO0FBRS9CLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRTtJQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztDQUNuRDtLQUFNO0lBQ0wsVUFBVSxDQUFDLElBQUksQ0FDYixJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUM1QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFDcEIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQ3ZCO0tBQ0YsQ0FBQyxDQUNILENBQUM7Q0FDSDtBQUVELElBQU0sY0FBYyxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDO0lBQzFDLEtBQUssRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0lBQ3hCLE1BQU0sRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTTtJQUNqQyxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUM1QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkIsTUFBTSxFQUFFLHFCQUFxQjtLQUM5QixDQUFDLEVBQ0YsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ3RDLGlCQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUN0QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FDdEI7SUFDRCxVQUFVLFlBQUE7Q0FDWCxDQUFDLENBQUM7QUFFSCxrQkFBZSxjQUFjLENBQUMifQ==