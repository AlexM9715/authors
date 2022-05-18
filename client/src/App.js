import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateForm from "./components/CreateForm";
import UpdateAuthor from "./components/UpdateAuthor";
import Main from "./views/Main";

function App() {
  return (
    <div>
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<CreateForm />} />
          <Route path="/edit/:id" element={<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
