#! /user/bin/env node
import inquirer from "inquirer";
 import chalk from "chalk";

 let todos : string[] = ["Tehmina", "Alishba","Arisha","Kiran"
 ];

 async function creatTodo (todos:string[]){
        let ans = await inquirer.prompt(
            {
                name : "select",
                type : "list",
                message : "Select an opreation ",
                choices : ["Add", "Update", "View", "Delete"]
            }
        )
        if(ans.select == "Add"){
        let addTodo = await inquirer.prompt(
            {
                name : "adto",
                type : "input",
                message : "add item in the list",

            }
        )

         console.log(todos.push(addTodo.adto))   

        }
        if(ans.select == "Update"){
            let updatetodo = await inquirer.prompt({
                name : "uptodo",
                message: "update item from list",
                type: "list",
                choices: todos.map(item => item)
            });
            let addTo = await inquirer.prompt(
                {
                    name : "addto",
                    type : "input",
                    message : "add item in the list",
    
                }
            );
            let newtodo = todos.filter(val => val !== updatetodo.uptodo)
            todos = [...newtodo,addTo.addto]


        }
        if(ans.select == "View"){
            console.log("***** TO DO LIST *****")
            console.log(todos)
            console.log("***********************")
        }
        if(ans.select == "Delete"){
            let deleteTodo = await inquirer.prompt({
                name : "deletdo",
                message: "Delete your item",
                type: "list",
                choices: todos.map(item => item)
            });
            let newtodo = todos.filter(val => val !== deleteTodo.deletdo)
            todos = newtodo
        }
 }

 creatTodo(todos);