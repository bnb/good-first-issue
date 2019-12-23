const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const dataSrc = path.resolve(__dirname, '..', 'data', 'projects.json')

const projects = JSON.parse(fs.readFileSync(dataSrc))

module.exports = async function () {
  let name
  const projectNames = Object.keys(projects).sort().map(key => {
    name = `${projects[key].name}${projects[key].description ? ' - ' + projects[key].description : ''}`
    return { value: key, name }
  })
  const { project } = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Choose a project:',
      choices: projectNames
    }
  ])
  return project
}
