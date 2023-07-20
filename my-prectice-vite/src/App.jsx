import React from "react";

import "./App.css";
// import StateFun from "./use_state/StateFun";
// import StateFun2 from "./use_state/StateFun2";
// import FunColor from "./use_state/FunColor";
// import StateClass from "./use_state/StateClass";
// import StateClass2 from "./use_state/StateClass2";
// import ClassComp from "./use_state/ClassComp";
// import PrecClass from "./Components/PrecClass";
// import PrecBody from "./Components/PrecBody";
// import FunFooter from "./Components/FunFooter";
import ProjectColor from "./use_state/ProjectColor";
import ProjectName from "./use_state/ProjectName";
import ProjectArr from "./use_state/ProjectArr";
import ConditionalRen from "./ConditionalRendaring/ConditionalRen";
import ProConditional from "./ConditionalRendaring/ProConditional";
import LoginOutrender from "./ConditionalRendaring/LoginOutrender";
import TableRendar from "./ConditionalRendaring/TableRendar";
import PlayButton from "./ConditionalRendaring/PlayButton";
import PropsFun from "./Props/PropsFun";
import PropsComp from "./Props/PropsComp";
import Render from "./ConditionalRendaring/Render";
import MixComp from "./ConditionalRendaring/MixComp";
import PropsProject1 from "./Props/PropsProject1";
import PropsProject2 from "./Props/PropsProject2";

export default function App() {
  return (
    <div className="con">
      {/* ================Component============= */}
      {/* <PrecClass/>
    <PrecBody/>
    <FunFooter/> */}

      {/* ================use state============= */}
      {/* <StateFun/>
    <StateFun2/>
    <FunColor/> */}
      {/* <StateClass/>
    <StateClass2/>
    <ClassComp/> */}
      {/* <ProjectColor/>
    <ProjectName/>
    <ProjectArr/>  */}

      {/* ========================Conditional Rendering=======================> */}

      {/* <ConditionalRen/>
    <ProConditional/> 
     <LoginOutrender/> 
     <TableRendar/>  */}
      {/* <PlayButton/> */}
      {/* <Render/>
      <MixComp/> */}

      {/* =============================props==========================================> */}
      {/* <PropsFun id={"1."} name={"jalpa"} age={23+" "} hobby={"student"}/>
      <PropsFun id={"2."} name={"chinmai"} age={26+" "} hobby ={"bussiness"} />
      <PropsFun id={"3."} name={"binal"} age={28+" "} hobby ={"house wife"} />
      <PropsFun id={"4."} name={"rupesh"} age={30+" "} hobby ={"diamond"} /> */}

      {/* ---------------------------------------------------------- */}

      <PropsComp
        img={
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        }
        name={"shooes"}
        description={"Non-Slip Fitness Leisure Running Sneakers"}
        price={"$29"}
      />

      <PropsComp
        img={
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
        }
        name={"adidas"}
        description={"Latest Men Sneakers -Black"}
        price={"$50"}
      />





      {/* ============project props========> */}

      {/* <PropsProject1 inputType ={"email"}/> */}
      {/* <PropsProject2 inputType ={"address"}/> */}
    </div>
  );
}
