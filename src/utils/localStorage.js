export const loadInstalledList = () => {
    try {
        const data = localStorage.getItem('installedList')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}
export const updateList = (App) => {
    const appList = loadInstalledList()
    try {
        const isDuplicate = appList.some(p => p.id === string(App.id))
        if (isDuplicate)
            return
        // alert('Already added in Apps')
        const updatedAppList = [...appList, App]
        localStorage.setItem('installedList', JSON.stringify(updatedAppList))
    } catch (err) {
        console.log(err)
    }
}

export const removeFromAppsList = id => {
    const appList = loadInstalledList();
    try {
        const updatedAppsList = appList.filter(p => p.id !== id)
        localStorage.setItem('installedList', JSON.stringify(updatedAppsList))
    } catch (err) {
        console.log(err)
    }
}