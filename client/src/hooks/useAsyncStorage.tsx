export const __storeStorage = async (key: string, items: any) => {
  try {
    return await localStorage.setItem(key, JSON.stringify(items))
  } catch {
    console.log('did not store')
  }
}

export const __loadStorage = async (key: string) => {
  try {
    return await localStorage.getItem(key)
  } catch {
    console.log('there is no item')
  }
}
