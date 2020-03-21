import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    backgroundImage: "none",
  },
})
const typography = new Typography(fairyGatesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
