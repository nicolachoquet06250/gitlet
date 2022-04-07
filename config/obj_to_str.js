export const objToStr = configObj => Object.keys(configObj)
    .reduce((arr, section) => arr.concat(
        Object.keys(configObj[section]).map(subsection => ({ section: section, subsection: subsection }))
    ), [])
    .map(entry => {
        const subsection = entry.subsection === "" ? "" : " \"" + entry.subsection +"\"";
        const settings = configObj[entry.section][entry.subsection];

        return `[${entry.section}${subsection}]\n` +
            Object.keys(settings).map(k => `  ${k} = ${settings[k]}`).join("\n") + "\n";
    }).join("");