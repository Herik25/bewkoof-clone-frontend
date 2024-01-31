export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}

export function uploadProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/",{
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let queryString = ''
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/products?"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllMensProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("/products?gender=men");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchMenProductsByFilters(filter) {
  let queryString = ''
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/products?gender=men&"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllWomensProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("/products?gender=women");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchWomenProductsByFilters(filter) {
  let queryString = ''
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/products?gender=women&"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}