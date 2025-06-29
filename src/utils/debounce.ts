const debounce = (func: (...args: unknown[]) => unknown, delay: number): (() => void) => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return (...args): void => {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default debounce;
