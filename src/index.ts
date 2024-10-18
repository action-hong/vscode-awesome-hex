import { defineExtension, useActiveTextEditor, useCommand } from 'reactive-vscode'
import { window } from 'vscode'
import { commands } from './generated/meta'
import { prettierHex } from './core'

const { activate, deactivate } = defineExtension(() => {

  const textEditor = useActiveTextEditor()
  useCommand(commands.prettierHex, () => {

    if (textEditor.value) {
      const selection = textEditor.value.selection
      const selectedText = textEditor.value.document.getText(selection)

      const res = prettierHex(selectedText)

      if (res) {
        textEditor.value.edit(editBuilder => {
          editBuilder.replace(selection, res)
        })
      }
    }
  })
})

export { activate, deactivate }
