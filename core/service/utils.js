const colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    gray: '\x1b[90m',
    reset: '\x1b[0m'
};

export function colorLog(color, ...log) {
    if (colors[color]) {
        console.log(`${colors[color]}%s${colors.reset}`, ...log);
    } else {
        console.log('Invalid color');
    }
}


export function makeSize(bytes) {
    if (bytes === 0) return "0 B";

    const units = ["B", "KB", "MB", "GB", "TB"];
    const factor = 1024;
    let unitIndex = 0;

    while (bytes >= factor && unitIndex < units.length - 1) {
        bytes /= factor;
        unitIndex++;
    }

    return `${bytes.toFixed(2)} ${units[unitIndex]}`;
}