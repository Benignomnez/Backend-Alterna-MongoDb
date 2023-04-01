"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personajeModel = void 0;
const mongoose_1 = require("mongoose");
const PersonajeSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    alte: { type: String, require: true },
    role: { type: String, require: true },
});
/* UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
   return user;
}; */
exports.personajeModel = (0, mongoose_1.model)('Personaje', PersonajeSchema);
