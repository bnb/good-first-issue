#!/usr/bin/env node

require('buggin')(module)
const cli = require('commander')
const chalk = require('chalk')
const opn = require('open')
const gfi = require('libgfi')

const packageJSON = require('../package.json')
const log = require('../lib/log')
const prompt = require('../lib/prompt')
const projects = require('../data/projects.json')

cli
  .version(packageJSON.version, '-v, --version')
  .description(packageJSON.description)
  .arguments('[project]')
  .option('-o, --open', 'Open in browser')
  .option('-f, --first', 'Return first/top issue')
  .option('-a, --auth <token>', 'Authenticate with the GitHub API (increased rate limits)')
  .action(async (project, cmd) => {
    const options = { // options for libgfi
      projects: projects
    }

    if (cmd.auth) {
      options.auth = cmd.auth
    }

    let input = project

    if (!project) {
      console.log('')
      input = await prompt()
    }

    try {
      const issues = await gfi(input, options)

      if (issues.length === 0) {
        process.exitCode = 0
        return console.log(chalk.yellow(`\nNo Good First Issues were found for the GitHub organization, repo, or project ${chalk.white(input)}.\n`))
      }

      const key = cmd.first ? 0 : Math.floor(Math.random() * Math.floor(issues.length - 1))

      // Call the log functionality, output the result to the console.
      const output = await log(issues[key], (input in projects) ? projects[input].name : project)

      // Log the issue!
      console.log(output.toString())

      if (cmd.open) {
        opn(issues[key].url)
        process.exitCode = 0
      }
    } catch (err) {
      if (err && typeof err === 'object') {
        if (/ENOTFOUND/.test(err.message)) {
          process.exitCode = 1
          return console.error(`${chalk.red('Problem!')} Unable to find api.github.com.\nPlease check your network connection and/or DNS configuration.`)
        }
        // add more cases here as they come up, and present user-friendly messages
      }

      // let buggin handle it if it's anything else
      throw err
    }
  })
  .parse(process.argv)
