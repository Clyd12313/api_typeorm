"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const db_config_1 = require("../config/db.config");
const user_entity_1 = require("../entity/user.entity");
const userRepository = db_config_1.AppDataSource.getRepository(user_entity_1.User);
// Example controller methods (you'll need to implement the actual business logic)
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepository.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const user = yield userRepository.findOneBy({ id: id });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getById = getById;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = userRepository.create(req.body);
        const result = yield userRepository.save(user);
        res.status(201).json(result);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const user = yield userRepository.findOneBy({ id: id });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        userRepository.merge(user, req.body);
        const result = yield userRepository.save(user);
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield userRepository.delete(id);
        if (result.affected === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.remove = remove;
