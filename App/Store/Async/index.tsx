import RNAsyncStorage from '@react-native-community/async-storage'
import Item from './items'

export type AsyncItem = string

class AsyncStorage {
  Item = Item

  async setItem(item: AsyncItem, data: JSON | boolean) {
    let parsedData = JSON.stringify(data)
    await RNAsyncStorage.setItem(item, parsedData)
    console.debug(`Async:\nItem "${item}" set to ${data}`)
  }

  async getItem(item: AsyncItem) {
    try {
      const data = await RNAsyncStorage.getItem(item)
      return data ? JSON.parse(data) : null
    } catch (e) {
      return null
    }
  }

  async removeItem(item: AsyncItem) {
    return await RNAsyncStorage.removeItem(item)
  }
}

let Async = new AsyncStorage()

export default Async
