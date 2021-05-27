'use strict';

module.exports = function autorequire(_path){
    let required_files = {};

    const path = require('path');
    const fs = require('fs');

    const files = fs.readdirSync(_path);
    for(let file of files){
        let file_name = file.replace(path.extname(`${_path}/${file}`), '');
        required_files[file_name] = require(`${_path}/${file}`);
    }

    return required_files;
}