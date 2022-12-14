import React, { useState, useEffect } from "react"
import { DevSettings } from "react-native"
import { loadString, saveString } from "../app/utils/storage"

export function ToggleStorybook(props) {
  const [showStorybook, setShowStorybook] = useState(false)
  const [StorybookUIRoot, setStorybookUIRoot] = useState(null)

  useEffect(() => {
    if (!__DEV__) {
      return undefined
    }

    // Load the setting from storage if it's there
    loadString("devStorybook").then((storedSetting) => {
      // Set the initial value
      setShowStorybook(storedSetting === "on")

      if (DevSettings) {
        // Add our toggle command to the menu
        DevSettings.addMenuItem("Toggle Storybook", () => {
          setShowStorybook((show) => {
            // On toggle, flip the current value
            show = !show

            // Write it back to storage
            saveString("devStorybook", show ? "on" : "off")

            // Return it to change the local state
            return show
          })
        })
      }

      // Load the storybook UI once
      setStorybookUIRoot(() => require("./storybook").StorybookUIRoot)
    })
  }, [])

  if (showStorybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : null
  } else {
    return props.children
  }
}
