/* eslint-disable no-use-before-define */
enum LogLevel {
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}

class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private log(level: LogLevel, message: unknown, ...args: unknown[]): void {
        if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log(level, message, ...args);
        }
    }

    public debug(message: unknown, ...args: unknown[]): void {
        this.log(LogLevel.DEBUG, message, ...args);
    }

    public info(message: unknown, ...args: unknown[]): void {
        this.log(LogLevel.INFO, message, ...args);
    }

    public warn(message: unknown, ...args: unknown[]): void {
        this.log(LogLevel.WARN, message, ...args);
    }

    public error(message: unknown, ...args: unknown[]): void {
        this.log(LogLevel.ERROR, message, ...args);
    }
}

// Create a single instance of Logger
const logger = Logger.getInstance();

// Export the logger instance for global use
export default logger;
