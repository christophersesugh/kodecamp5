import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class TaskManager {
	constructor() {
		this.commands = new Map()
	}

	async registerCommands() {
		const commandModules = {
			add: (await import('./commands/add.js')).default,
			// list: '',
			// complete: '',
			// delete: '',
			// help: '',
		}

		Object.entries(commandModules).forEach((name, CommandClass) => {
			this.commands.add(name, new CommandClass())
		})
	}

	parseArguments(args) {
		if (args.length === 0) {
			return { command: 'help', args: [], options: {} }
		}
		const command = args[0].toLowerCase()
		const commandArgs = args.slice(1)
		const { args: parsedArgs, options } = this.parseOptions(commandArgs)

		return {
			command,
			args: parsedArgs,
			options,
		}
	}

	parseOptions(args) {
		const parsedArgs = []
		const options = {}
		for (let i = 0; i < args.length; i++) {
			const arg = args[i]
			if (arg.startsWith('--')) {
				const optionName = arg.slice(2)
				const nextArg = args[i + 1]
				if (nextArg && nextArg.startsWith('--')) {
					options[optionName] = nextArg
					i++
				} else {
					options[optionName] = true
				}
			} else {
				parsedArgs.push(arg)
			}
		}
		return { args: parsedArgs, options }
	}

	async run() {
		try {
			await this.loadCommands()
			const { command, args, options } = this.parseArguments()

			if (!command) {
				console.log('CLI Task Manager')
				console.log("Use 'help' to see available commands.")
				return
			}

			const CommandClass = this.commands[command]

			if (!CommandClass) {
				console.error(`Unknown command: ${command}`)
				console.log("Use 'help' to see available commands")
				process.exit(1)
			}

			const commandInstance = new CommandClass()
			commandInstance.execute(args, options)
		} catch (error) {
			console.error(`Error: ${error.message}`)
			process.exit(1)
		}
	}
}

const taskManager = new TaskManager()
taskManager.run()
