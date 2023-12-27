const createTheme = (colors) => {
    const {
        background,
        shadow,
        border,
        accent,
        accentHover,
        starSecondary,
        textSecondary,
        textPrimary,
        starPrimary
    } = colors;
    return {
        "--background": background,
        "--shadow": shadow,
        "--border": border,
        "--accent": accent,
        "--accent-hover": accentHover,
        "--star-secondary": starSecondary,
        "--text-secondary": textSecondary,
        "--text-primary": textPrimary,
        "--star-primary": starPrimary,
    }
}

const applyTheme=(colors)=>{
    const theme = createTheme(colors);
    const root = document.documentElement;
    Object.entries(theme).forEach(([key,value])=>{
        root.style.setProperty(key,value)
    })
}


export {
    applyTheme,
}