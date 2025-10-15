import chalk from 'chalk'
import { config } from 'dotenv'

const env = config({ path: ['./.env', './.env.development'] })
console.log(chalk.blue(`Hello ${env.parsed.HELLO}`))
