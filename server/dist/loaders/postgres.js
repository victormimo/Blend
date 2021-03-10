"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var api_1 = __importDefault(require("../api"));
var config_1 = __importDefault(require("../config"));
var errorHandler_1 = __importDefault(require("../utils/errorHandler"));
var ioclient = require("socket.io-client");
var path_1 = __importDefault(require("path"));
exports.default = (function (_a) {
    var app = _a.app;
    app.use(express_1.urlencoded({ extended: true }));
    app.use(express_1.json());
    app.enable("trust proxy");
    app.use(cors_1.default());
    app.get("/", function (_, res) {
        res.sendFile(path_1.default.join(__dirname, "../..", "/index.html"));
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sb2FkZXJzL3Bvc3RncmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXdCO0FBQ3hCLG1DQUE4RDtBQUM5RCwrQ0FBNEI7QUFDNUIscURBQStCO0FBQy9CLHVFQUFpRDtBQUVqRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM3Qyw4Q0FBd0I7QUFFeEIsbUJBQWUsVUFBQyxFQUFtQjtRQUFqQixHQUFHLFNBQUE7SUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7SUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFVLEVBQUUsR0FBYTtRQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0g7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBVSxFQUFFLEdBQWE7UUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVIOztPQUVHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBTSxFQUFFLENBQUMsQ0FBQztJQUVyQzs7O09BR0c7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUMsQ0FBQztBQUN4QixDQUFDLEVBQUMifQ==