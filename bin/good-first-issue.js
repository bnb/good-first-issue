#!/usr/bin/env node

var cli = require('commander')
var chalk = require('chalk')
var opn = require('open')

var pJson = require('../package.json')

const log = require('../lib/log')
const projects = require('../data/projects.json')
const goodFirstIssue = require('..')

const prompt = require('./prompt')

cli
  .version(pJson.version, '-v, --version')
  .description(pJson.description)
  .arguments('[project]')
  .option('-o, --open', 'Open in browser')
  .option('-f, --first', 'Return first/top issue')
  .action(async (project, cmd) => {
    let input = project

    if (!project) {
      console.log('')
      input = await prompt()
    }

    try {
      const issues = await goodFirstIssue(input)

      if (issues.length === 0) {
        console.log('')
        console.log(chalk.yellow(`No Good First Issues were found for the GitHub organization, repo, or project ${chalk.white(input)}.`))
        console.log('')
        process.exit(0)
      }

      let key = Math.floor(Math.random() * Math.floor(issues.length - 1))
      if (cmd.first) {
        key = 0
      }

      // Call the log functionality, output the result to the console.
      let projectName = project
      if (input in projects) {
        projectName = projects[input].name
      }
      let output = await log(issues[key], projectName)

      // Log the issue!
      console.log(output.toString())

      if (cmd.open) {
        opn(issues[key].url)
        process.exit(0)
      }
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  })
  .parse(process.argv)
