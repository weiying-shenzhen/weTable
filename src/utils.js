export const renderAttribute = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key]
        return value ? acc.concat(`${key}="${value}"`) : acc
    }, []).join(' ')
}

export const renderClass = (className) => {
    return className ? `class="${className}"` : ""
}