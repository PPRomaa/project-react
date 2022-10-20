import {Route, Routes,Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MovieDetailsPage, MoviesPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'movies'}/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
            <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
