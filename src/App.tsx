import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {Home} from "@/pages/Home.tsx";
import NoteDetail from "@/pages/NoteDetail.tsx";
import Signin from "@/pages/Signin.tsx";
import Signup from "@/pages/Signup.tsx";

function App() {
    return <BrowserRouter>
        <div className="h-full">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path={"/notes/:id"} element={<NoteDetail/>}></Route>
                </Route>
                <Route path={"/signin"} element={<Signin />}></Route>
                <Route path={"/signup"} element={<Signup />}></Route>
            </Routes>
        </div>
    </BrowserRouter>;
}

export default App;
