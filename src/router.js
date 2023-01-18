//Routes: A component that render when navigate to a particular URL

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"

import App from "./App"
import { cLoader, cheeseLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction, updateAction, deleteAction } from "./actions"


const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheeseLoader}/>
        <Route path=":id" element={<Show/>} loader={cLoader}/>
        <Route path="create" action={createAction} />
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
    </Route>
    )
)

export default router