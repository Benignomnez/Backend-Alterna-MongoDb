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
exports.remove = exports.update = exports.create = exports.retrieveById = exports.retrieve = void 0;
const personaje_entity_1 = require("../models/personaje.entity");
const retrieve = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personajes = yield personaje_entity_1.personajeModel.find();
        res.json({ success: true, data: personajes });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Failed to retrieve characters" });
    }
});
exports.retrieve = retrieve;
const retrieveById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const personaje = yield personaje_entity_1.personajeModel.findById(id);
        if (!personaje) {
            return res.status(404).json({ success: false, error: "Character not found" });
        }
        res.json({ success: true, data: personaje });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Failed to retrieve character" });
    }
});
exports.retrieveById = retrieveById;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, alte, role } = req.body;
    if (!name || !alte || !role) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }
    try {
        const personaje = yield personaje_entity_1.personajeModel.create({ name, alte, role });
        res.status(201).json({ success: true, data: personaje });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Failed to create character" });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, alte, role } = req.body;
    if (!name || !alte || !role) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }
    try {
        const updatedPersonaje = yield personaje_entity_1.personajeModel.findByIdAndUpdate(id, { name, alte, role }, { new: true });
        if (!updatedPersonaje) {
            return res.status(404).json({ success: false, error: "Character not found" });
        }
        res.json({ success: true, data: updatedPersonaje });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Failed to update character" });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedPersonaje = yield personaje_entity_1.personajeModel.findByIdAndDelete(id);
        if (!deletedPersonaje) {
            return res.status(404).json({ success: false, error: "Character not found" });
        }
        res.json({ success: true, data: deletedPersonaje });
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Failed to delete character" });
    }
});
exports.remove = remove;
