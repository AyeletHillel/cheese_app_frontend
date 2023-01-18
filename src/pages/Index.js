import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {

    const cheese = useLoaderData()

    return (
        <div>
          <h2>Create a Cheese</h2>
          <Form action="/create" method="post">
            <input type="input" name="name" placeholder="Cheese's name" />
            <input type="input" name="image" placeholder="Cheese's picture" />
            <input type="input" name="origin" placeholder="Cheese's origin" />
            <input type="submit" value="create person" />
          </Form>
    
          <h2>Cheese</h2>
          {cheese.map(c => (
            <div key={c._id} className="cheese">
              <Link to={`/${c._id}`}>
                <h1>{c.name}</h1>
              </Link>
              <img src={c.image} alt={c.name} />
              <h3>{c.origin}</h3>
            </div>
          ))}
        </div>
      )}

export default Index