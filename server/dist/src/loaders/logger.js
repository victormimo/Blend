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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvYWRlcnMvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLHFEQUErQjtBQUUvQixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUU7SUFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Q0FDbkQ7S0FBTTtJQUNMLFVBQVUsQ0FBQyxJQUFJLENBQ2IsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDN0IsTUFBTSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQ3BCLGlCQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUN2QjtLQUNGLENBQUMsQ0FDSCxDQUFDO0NBQ0g7QUFFRCxJQUFNLGNBQWMsR0FBRyxpQkFBTyxDQUFDLFlBQVksQ0FBQztJQUMxQyxLQUFLLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztJQUN4QixNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU07SUFDakMsTUFBTSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxxQkFBcUI7S0FDOUIsQ0FBQyxFQUNGLGlCQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUN0QyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFDdEIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQ3RCO0lBQ0QsVUFBVSxZQUFBO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsY0FBYyxDQUFDIn0=