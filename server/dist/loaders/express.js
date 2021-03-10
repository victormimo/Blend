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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xvYWRlcnMvZXhwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF3QjtBQUN4QixtQ0FBOEQ7QUFDOUQsK0NBQTRCO0FBQzVCLHFEQUErQjtBQUMvQix1RUFBaUQ7QUFFakQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDN0MsOENBQXdCO0FBRXhCLG1CQUFlLFVBQUMsRUFBbUI7UUFBakIsR0FBRyxTQUFBO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBVSxFQUFFLEdBQWE7UUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNIOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQVUsRUFBRSxHQUFhO1FBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQU0sRUFBRSxDQUFDLENBQUM7SUFFckM7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBWSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxFQUFDIn0=