'use strict';

import item from './item.js';


const items = [];
const hideCheckedItems = false;

function findById(id){
   const item = items.find(id);
   return item;
}
function addItem(name){
    try{
        item.validateName(name);
        const newItem = item.create(name);
        this.items.push(newItem);
    } 
    catch(e){
        console.log(e.message);
    }   
}
function findAndToggleChecked(id){
    const thisItem = this.findById(id)
    thisItem.check = !thisItem.check;
}
function findAndUpdateName(id,name){
    try{
        item.validateName(name);
        const thisItem = this.findById(id);
        thisItem.name = name;
    }
    catch(e){
        console.log('Cannot update name '+ e.message);
    }
}
function findAndDelete(id){
    this.item = this.items.filter(currentItem => currentItem.id !== id);
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
};