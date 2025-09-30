import Demo1 from "./basic/Demo1";
import Demo2 from "./basic/Demo2";
import Demo4 from "./basic/Demo4";
import Test1 from "./basic/Test1";

const App = () => {
  return (
    <>
      <div>
        <Test1/>
        <Demo1 name={'Savean Raksmey'}/>
        <Demo1 name={"Savean Socheata"}/>
        <Demo2 name={"Savean Raksmey"} gender={"Male"}/>
        <Demo4 data={{
          "id" : 1,
          "name" : "Chhum Savean",
          "gender" : "Male",
          "Address" : "Prey Veng"
        }}/>
      </div>
    </>
  );
}

export default App;