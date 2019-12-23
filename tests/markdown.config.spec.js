const fs = require('fs')
const path = require('path')
const README_PATH = path.join(__dirname, '..', 'README.md')
const DATA_FILE_PATH = path.join(__dirname, '..', 'data', 'projects.json')

test('should have all the same projects as data/project.json', () => {
    const projectsFromDatafile = require(DATA_FILE_PATH)
    const projectsFromReadme = getProjectsFromReadme()

    const readMeKeys = Object.keys(projectsFromReadme)
    const dataFileKeys = Object.keys(projectsFromDatafile)

    // ensure both contain all the same top-level projects
    expect(readMeKeys).toEqual(dataFileKeys)
})

test('data/project.json should have uniform data shape', () => {
    const projects = require(DATA_FILE_PATH)
    const dataFileKeys = Object.keys(projects)

    dataFileKeys.forEach(key => {
        expect(typeof projects[key]).toBe('object')
        expect(projects[key]).toHaveProperty('name')
        expect(projects[key]).toHaveProperty('q')
        expect(projects[key]).toHaveProperty('description')
    })
})

// The below function is influenced by all-contributers-cli, Thanks to @jfmengels and @kentcdodds
// https://github.com/jfmengels/all-contributors-cli/blob/master/src/generate/index.js
function getProjectsFromReadme() {
    const fileContent = fs.readFileSync(README_PATH, "UTF-8")

    const tagToLookFor = '<!-- AUTO-GENERATED-CONTENT:'
    const closingTag = '-->'
    const startOfOpeningTagIndex = fileContent.indexOf(
        `${tagToLookFor}START`,
    )
    const endOfOpeningTagIndex = fileContent.indexOf(
        closingTag,
        startOfOpeningTagIndex,
    )
    const startOfClosingTagIndex = fileContent.indexOf(
        `${tagToLookFor}END`,
        endOfOpeningTagIndex,
    )

    const table = fileContent.slice(endOfOpeningTagIndex + closingTag.length,
        startOfClosingTagIndex)

    const regex = /\d+\.\|(.*)\|`(.*)`\|/gm;
    let match = regex.exec(table)

    const projects = {};
    while (match != null) {
        const [, name, project] = match
        projects[project] = { name }

        match = regex.exec(table)
    }

    return projects
}
