"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var api_1 = __importDefault(require("../api"));
var config_1 = __importDefault(require("../../config"));
var errorHandler_1 = __importDefault(require("../utils/errorHandler"));
var ioclient = require("socket.io-client");
exports.default = (function (_a) {
    var app = _a.app;
    app.use(express_1.urlencoded({ extended: true }));
    app.use(express_1.json());
    app.enable("trust proxy");
    app.use(cors_1.default());
    app.get("/", function (_, res) { });
    /**
     * Status Health check
     * Method get
     * returns 200 status code
     */
    app.get("/status", function (_, res) {
        res.status(200).end();
    });
    /**
     * Load up routers
     */
    app.use(config_1.default.api.prefix, api_1.default());
    /**
     * Error handling
     * returns the error's status code or general 500
     */
    app.use(errorHandler_1.default);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2FkZXJzL2V4cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBd0I7QUFDeEIsbUNBQThEO0FBQzlELCtDQUE0QjtBQUM1Qix3REFBa0M7QUFDbEMsdUVBQWlEO0FBRWpELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRzdDLG1CQUFlLFVBQUMsRUFBbUI7UUFBakIsR0FBRyxTQUFBO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBVSxFQUFFLEdBQWEsSUFBTSxDQUFDLENBQUMsQ0FBQztJQUVoRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFVLEVBQUUsR0FBYTtRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRXJDOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQyxDQUFDO0FBQ3hCLENBQUMsRUFBQyJ9