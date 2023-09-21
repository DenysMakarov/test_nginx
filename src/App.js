import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Form} from "./modules/form/Form";
import {createContext, lazy, Suspense, useEffect, useState} from "react";
import {Calc} from "./modules/form/Form";
import {FL} from "./modules/list/FL";
// import List from "./shared/cmps/List";

const List = lazy(() => import("./modules/list/List"))
export const MyContext = createContext(null)

function App() {

    const test = {text: "TEST"}

    return (
        <MyContext.Provider value={test}>

            <div className="App">
                {/*{*/}
                {/*    (*/}
                {/*        <Suspense fallback={<div>LOADING...</div>}>*/}
                {/*            <List/>*/}
                {/*        </Suspense>*/}
                {/*    )*/}

                {/*}*/}

                {/*<Form/>*/}
                {/*<Calc/>*/}
                {/*<FL/>*/}
                <ScoreBoard/>
            </div>
        </MyContext.Provider>

    );
}

const ScoreBoard = () => {

    const [score, setScore] = React.useState(0);

    const [goal, setGoal] = React.useState(0);

    const newScore = (event) => {
        setScore(score + 1);
        setGoal(goal + 1);
    }


    return (

        <div>

            <p>Score: {score}</p> <p>Goal: {goal}</p>

            <ScoreManager newScore={newScore} score={score} goal={goal}/>

        </div>
    )

}


const ScoreManager = (props, {score, goal}) => {

    const resetScore = (event) => {
        score = 0
        goal = 0
    }

        return (

            <div>
                <button onClick={props.newScore}> Add Score</button>
                <button onClick={resetScore}> Reset Score</button>
            </div>
        )
    }
export default App;
