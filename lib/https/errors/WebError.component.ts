import chalk from "chalk";

export = class WebError {
    
    static create(content: string[]) {
        return new Error(chalk.red(content.join(" ")));
    }
}