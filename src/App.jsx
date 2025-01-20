
import Tasklist from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App(){
  
 return (
   <main className="  h-screen"> 

      <div className="container mx-auto p-10">
      <h1>Hola mundo</h1>
      <TaskForm />
      <Tasklist /> 
      </div>
    </main>
  );
}

export default App;