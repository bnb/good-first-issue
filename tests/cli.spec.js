const execa = require('execa')

const BIN_PATH = require.resolve('../bin/good-first-issue.js')

test('should display link to report bug if project not found', async () => {
  return expect(
    execa(process.execPath, [
      BIN_PATH,
      'marvin-k-mooney/would-you-please-go-now'
    ])
  )
    .resolves.toMatchObject({stderr: /The following unhandled rejection is likely a bug in good-first-issue/})
});
