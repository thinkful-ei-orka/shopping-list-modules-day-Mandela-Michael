'use strict';

function validateName (name) {
    if (name === '') {
        throw new TypeError('Name must not be blank');
}}

function create (name) {
    const item = {
        id: cuid(),
        name,
        check: false
    };
    return item;
}

export default {
    validateName,
    create
};

