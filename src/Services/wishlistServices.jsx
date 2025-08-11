export async function fetchWishlist() {
      const res = await fetch('http://localhost:4000/wishlist')
      if(!res.ok) throw new Error('failed to fetch')
      return res.json()
}

export async function addToWishlist (product) {
    const res = await fetch(`http://localhost:4000/wishlist/`, {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    if(!res.ok) throw new Error('Failed to add to wishlist')
    return res.json()
}

export async function removeFromWishlist (id) {
    const res = await fetch(`http://localhost:4000/wishlist/${id}`, {
        method: 'DELETE', 
    })
    if(!res.ok) throw new Error('Failed to remove to wishlist')
    return true
}

