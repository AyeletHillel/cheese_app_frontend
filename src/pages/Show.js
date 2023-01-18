import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const c = useLoaderData()
  
    return (
      <div className="c">
        <h1>{c.name}</h1>
        <h2>{c.title}</h2>
        <img src={c.image} alt={c.name}/>

        <h2>Update {c.name}</h2>
      <Form action={`/update/${c._id}`} method="post">
        <input type="input" name="name" placeholder="cheese's name" />
        <input type="input" name="image" placeholder="cheese's picture" />
        <input type="input" name="origin" placeholder="pcheese's origin" />
        <input type="submit" value={`update ${c.name}`} />
      </Form>

      <h2>Delete Cheese</h2>
      <Form action={`/delete/${c._id}`} method="post">
      <input type="submit" value={`delete ${c.name}`} />
      </Form>
      </div>
    )
  }
  
  export default Show