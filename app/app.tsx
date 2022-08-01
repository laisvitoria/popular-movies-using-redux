import "./utils/ignore-warnings"
import React, { useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import * as storage from "./utils/storage"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ToggleStorybook } from "../storybook/toggle-storybook"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
    })()
  }, [])

  if (!isNavigationStateRestored) return null

  // otherwise, we're ready to render the app
  return (
    <ToggleStorybook>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
        </SafeAreaProvider>
    </ToggleStorybook>
  )
}

export default App
