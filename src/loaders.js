//Loaders: A function to get data that runs before a route loads and can be used in a component with the useLoaderData hook

const URL = "http://localhost:4000"

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheese = await response.json()
    return cheese
}

export const cLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const c = await response.json()
    return c
}