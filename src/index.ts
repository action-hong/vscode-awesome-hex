import { defineConfigObject, defineExtension, useActiveTextEditor, useCommand } from 'reactive-vscode'
import { type ScopedConfigKeyTypeMap, commands, scopedConfigs } from './generated/meta'
import { prettierHex } from './core'

const { activate, deactivate } = defineExtension(() => {
  const textEditor = useActiveTextEditor()

  const config = defineConfigObject<ScopedConfigKeyTypeMap>(
    scopedConfigs.scope,
    scopedConfigs.defaults,
  )

  useCommand(commands.prettierHex, () => {
    if (textEditor.value) {
      const selection = textEditor.value.selection
      const selectedText = textEditor.value.document.getText(selection)

      const res = prettierHex(selectedText, config)

      if (res) {
        textEditor.value.edit((editBuilder) => {
          editBuilder.replace(selection, res)
        })
      }
    }
  })
})

export { activate, deactivate }
