import React, { createContext, useState } from "react"

export const LanguageContext = createContext({
  state: {
    language: '',
  },
  actions: {
    setLanguage: () => {},
  },
})

export const LanguageProvider = (props: React.Component) => {
  const [language, setLanguage] = useState("en")

  const value = {
    state: { language },
    actions: { setLanguage },
  }

  return (
    <LanguageContext.Provider value={[value.state, value.actions]}>
      {props.children}
    </LanguageContext.Provider>
  )
}
