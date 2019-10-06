import * as Express from "express";

const app = Express();
app.get("/",(req,res) => {
    res.send("Hello VS Code!!!!!");
});
app.get("/foo",(req,res) => {
    res.send("竹森");
});
export {app};

interface Task{
    category:string;
    title:string;
    done:boolean;
}
const tasks:Task[] = [
    {
        category:"Private",
        title:"買い物",
        done:false,
    },
];
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});
