const SELLER_KEY = '__seller__'

export function saveToLocal(id, key, val) {
  let seller = localStorage.getItem(SELLER_KEY)
  seller = seller ? JSON.parse(seller) : {}
  if (!seller[id]) {
    seller[id] = {}
  }
  seller[id][key] = val
  localStorage.setItem(SELLER_KEY, JSON.stringify(seller))
}

export function loadFromLocal(id, key, def) {
  let seller = localStorage.getItem(SELLER_KEY)
  seller = seller ? JSON.parse(seller) : {}
  if (!seller[id]) {
    return def
  }
  return seller[id][key] || def
}
