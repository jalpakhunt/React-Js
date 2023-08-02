import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Stack from 'react-stack';
// Your code using Stack here

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
import PropsCard from "./Props/PropsCard";
import TodoForm from "./Project/TodoForm";
import FormProject1 from "./Project/FormProject1";
import PassWord from "./Project/PassWordGenrater/PassWord";
import InputComp from "./Input/InputComp";
import InputAddEmail from "./Input/InputAddEmail";
import InputAddNumbers from "./Input/InputAddNumbers";
import InputAddAddress from "./Input/InputAddAddress";
import Button from "./use_state/React BootStrap/Button";
import NewNavbar from "./use_state/React BootStrap/NewNavbar";
import BmiCalculator from "./use_state/React BootStrap/BMICalculator/BmiCalculator";
import ToDo1 from "./use_state/React BootStrap/RectTo-DoApp/ToDo1";
import RegistrationForm from "./Project/UserRegistrationForm/RegistrationForm";
import MultipalInput from "./Input/MultipalInput";
import CarInput from "./Input/CarInput";
import InputClass from "./Input/InputClass";
import DeletInput from "./Input/DeletInput";
import UserInput from "./Input/UserInput";
import DeleteCar from "./Input/DeleteCar";
import ClassInDelete from "./Input/ClassInDelete";
import LifeCycleMethod from "./Life_CycleMethod/LifeCycleMethod";
import Header from "./Udemy/Layout/Headers";
import MultiDelete from "./Input/MultiDelete";
import Update from "./Input/Update";
import Crud from "./NewUpdate/Crud";
import MultiCrud from "./NewUpdate/MultiCrud";
import Headers from "./Udemy/Layout/Headers";
import Home from "./FoodCourt/Home";
import Layout from "./FoodCourt/Layout";

export default function App() {
  let data = [
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "shose",
      description: "Non-Slip Fitness Leisure Running Sneakers",
      price: 29,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "shose",
      description: "Non-Slip Fitness Leisure Running Sneakers",
      price: 29,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "shose",
      description: "Non-Slip Fitness Leisure Running Sneakers",
      price: 29,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "shose",
      description: "Non-Slip Fitness Leisure Running Sneakers",
      price: 29,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      name: "shose",
      description: "Non-Slip Fitness Leisure Running Sneakers",
      price: 29,
    },
  ];
  let [arr, setArr] = useState(data);
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

      {/* ---  ------------------------------------------------------- */}

      {arr.map((e) => {
        return (
          <PropsComp
            img={e.img}
            name={e.name}
            description={e.description}
            price={e.price}
          />
        );
      })}

      {/* <PropsComp
        img={
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
        }
        name={"adidas"}
        description={"Latest Men Sneakers -Black"}
        price={"$50"}
      /> */}

      {/* ============project props========> */}

      {/* <PropsProject1 inputType ={"email"}/> */}
      {/* <PropsProject2 inputType ={"address"}/> */}
      {/* <PropsCard
     
        name={"Card Demo"}
        title={"Input card"}
        text={
          "this is a props this is a card.this is a demo. this is a copy rightthis is a example"
        }
      /> */}

      {/* ================================newproject=============================== */}

      {/* <TodoForm/>
      <TodoItems/> */}

      {/* <h1>User Form</h1>
      <FormProject1/> */}
      {/* <PassWord /> */}
      {/* <RegistrationForm/> */}

      {/* ========================InputComp====================== */}
      {/* <InputComp/> */}

      {/* <h1>Input and Add Email in React</h1>
       <InputAddEmail/>
       <hr/>
       <h1>Input and Add Numbers in React</h1>
       <InputAddNumbers/>
       <hr/>
       <h1>Input and Add Address in React</h1>
       <InputAddAddress/> */}

      {/* ===============================Multipul Input=================== */}
      {/* <MultipalInput/> */}
      {/* <CarInput/> */}

      {/* <InputClass/> */}
      {/* <DeletInput/> */}
      {/* <UserInput/> */}
      {/* <DeleteCar/> */}
      {/* <ClassInDelete/> */}
      {/* <MultiDelete/> */}

      {/* ============================update input============================= */}
      {/* <Update/> */}
      {/* <Crud/> */}
      {/* <MultiCrud/> */}

      {/* ============================React Bootstrap=================================== */}
      {/* <Button/> */}
      {/* <NewNavbar/> */}
      {/* <BmiCalculator/> */}
      {/* <ToDo1/> */}

      {/* ===============================Life-Cycle-Method=============== */}

      {/* <LifeCycleMethod/> */}

      {/* =======================Udemy============================================ */}

      {/* <Headers/> */}

      {/* ===============================FoodCourt======================================= */}
      {/* <Home/> */}
      {/* <Layout/> */}
    </div>
  );
}
