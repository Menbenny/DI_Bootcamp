import chalk from 'chalk';
export const message = (text) => {
    return chalk.cyanBright(text.toUpperCase())
}

export const ErrMessage = (err) => {
    return chalk.white.bgRed(err)
}

