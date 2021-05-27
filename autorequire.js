'use strict';

module.exports = function autorequire(_path){
    let required_files = {};

    const path = require('path');
    const fs = require('fs');

    const files = fs.readdirSync(_path);
    for(let file of files){
        let ext = path.extname(`${_path}/${file}`);
        
        if(
            ext == '.js' && 
            fs.readFileSync(`${_path}/${file}`, 'utf-8').indexOf('module.exports') !== -1
        ){
            let file_name = file.replace(ext, '');
            required_files[file_name] = require(`${_path}/${file}`);
        }
    }

    return required_files;
}