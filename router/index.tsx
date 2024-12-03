import Nav from "@/entrypoints/popup/Nav";
import { createHashRouter} from "react-router-dom";
import Layout from "@/entrypoints/Layout";
import {TOOL_MAP} from "@/constant/TOOL_MAP.tsx";


export default createHashRouter([
    {
        path: "/",
        element: <Nav/>,
    },
    ...TOOL_MAP.map(({name,path,element}, index) => {
        return {path,element:<Layout  title={name}>{element}</Layout>};
    }),
    {

        path:'*',
        element: <div>404</div>
    }
]);
