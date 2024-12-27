import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useContext, useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expense from "./Components/Expense/Expense";
import { GlobalContext } from "./Context/globalContext";

function App() {
  const [active, setActive] = useState(true);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };


  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>

        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url();
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 
  main {
    display: flex;
    flex-direction: column;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid rgb(17, 16, 16);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    height: 100v;
    width: 55vh;
    margin-left: 20px;
    
      @media (min-width:1031px){
        width: 90vw;
    }
      @media (min-width:767px){
        overflow-x: hidden;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    }
  }
`;
export default App;
