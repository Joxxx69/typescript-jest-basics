"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'Jane Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);
    return (!user) ? callback(`User not found with id ${id}`) : callback(undefined, user);
}
exports.getUserById = getUserById;
