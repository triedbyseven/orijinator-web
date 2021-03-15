import { ConsoleLog } from "../types";

const log: ConsoleLog = {
    info: (message) => console.log(`%c${message}`, 'background-color: #2A212C; color: #9580FF;')
};

export default log;