const fs = require("fs");

const lines = fs
    .readFileSync("day2.txt", { encoding: "utf-8"})
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => {
        const [direction, int] = x.split(" ");
        return {
            direction,
            int: parseInt(int)
        };
    });

    let submarine = {
        position: 0,
        depth: 0
    };

    for (const line of lines) {
        switch(line.direction) {
            case "forward":
                submarine.position += line.int;
                break;
            case "down":
                submarine.depth += line.int;
                break;
            case "up":
                submarine.depth -= line.int;
                break;
        }
    }

    console.log(submarine.position * submarine.depth);

    submarine = {
        position: 0,
        depth: 0,
        aim: 0
    };

    for (const line of lines) {
        switch(line.direction) {
            case "forward":
                submarine.position += line.int;
                submarine.depth += submarine.aim * line.int;
                break;
            case "down":
                submarine.aim += line.int;
                break;
            case "up":
                submarine.aim -= line.int;
                break;
        }
    }

    console.log(submarine.position * submarine.depth);