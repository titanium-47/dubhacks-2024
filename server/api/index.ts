import { getRecipe } from './recipeFinder';

export const maxDuration = 50;
const express = require("express");
const app = express();

app.get("/", async(req, res) => {
    try{
        const meal : string = req.query.meal as string;
        const recipe = await getRecipe(meal);
        console.log(JSON.stringify(recipe));
        res.status(201).json(recipe);
    } catch (error) {
        res.status(201).json({
            ingredients: ["Try Again"],
            steps: ["We were unable to fulfil your request. Please try again."]
        });
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;