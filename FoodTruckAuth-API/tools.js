//npm install --save express body-parser mongoose
//npm install --save-dev nodemon eslint babel-cli babel-core babel-eslint babel-preset-es2015 babel-preset-stage-0
//In package.json change "main" : "index.js" to "main":"dist"
//In package.json add on scripts
//    "dev":"NODE_ENV=development nodemon -w src --exec \"babel-node src --presets es2015,stage-0\"",
//     "build":"babel src -s -D -d dist --presets es2015,stage-0",
//    "prestart": "npm start",
//     "start":"NODE_ENV=production pm2 start dist",
//      "lint":"eslint src",
//In package.json add 
/*
"eslintConfig":{
    "parserOptions":{
        "ecmaVersion":7,
        "sourceType":"module"
    },
    "env":{
        "node":true
    },
    "rules":{
        "no-console":0,
        "no-unused-vars":1
    }
},

*/
/*
add .babelrc file
in it add code
{
    "presets":[
        "es2015",
        "stage-0"
    ]
}
*/


//for Authentication
// npm install --save express-jwt jsonwebtoken passport passport-local passport-local-mongoose

