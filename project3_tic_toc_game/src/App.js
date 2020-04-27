import React,{useState, useEffect} from "react";
import "./App.css";

const initMatrix=[];

function App(){

    const [matrix,setMatrix]=useState(initMatrix);
    const [matrixSize,setMatrixSize]=useState(3);
    const [currPlayer,setCurrPlayer]=useState("O");
    const [selR,setSelR]=useState(null);
    const [selC,setSelC]=useState(null);
    const [winner,setWinner]=useState(false);
    const [reset,setReset]=useState(false);

    useEffect(()=>{

        setWinner(false);
        setSelR(null);
        setSelC(null);

        const row=new Array(matrixSize).fill(null);

        const tempMatrix=[];

        for (let i = 0; i < matrixSize; i++) {
            tempMatrix.push([...row]);
        }

        setMatrix(tempMatrix);

    },[reset]);

    function squareClick(r,c){
        //console.log(r,c);
        if(!matrix[r][c] && !winner){
            setSelC(c);
            setSelR(r);
            const nextPlayer=currPlayer === "O" ? "X" :"O";
            setCurrPlayer(nextPlayer);

            const copyMatrix=[...matrix];
            copyMatrix[r][c]=nextPlayer;
            setMatrix(copyMatrix);
        }
    }

    function isWinner(){
        let vertical=true;
        let horizontal=true;
        let d1=true;
        let d2=true;

        if(selC === null || selR === null){
            return;
        }

        for (let i = 0; i < matrixSize; i++) {
            if(matrix[i][selC] !== currPlayer){
                vertical=false;
            }
            
            if(matrix[selR][i] !== currPlayer){
                horizontal=false;
            }


            if(matrix[i][i] !== currPlayer){
                d1=false;
            }

            if(matrix[i][matrixSize-i-1] !== currPlayer){
                d2=false;
            }   

        }
        if(vertical || horizontal || d1 || d2){
            setWinner(true);
        }

    }

    useEffect(()=>{
        if(!winner){
            isWinner();
        }
    });


    function resetGame(){
        setReset(!reset);
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1>Tic Tok Toe Game Using React</h1>
            {
                matrix.map((val,c)=>(
                    <div className="c">
                        {
                            val.map((val1,r)=>(
                                <div className="r" onClick={()=> {squareClick(r,c)}}>
                                    {matrix[r][c]}
                                </div>
                                
                            ))
                        }
                    </div>
                ))
            }
            <h3>
                {
                    winner ? `Player ${currPlayer} is a Winner`: ''
                }
            </h3>

            <button className="remove-button" onClick={resetGame}>Reset</button>


        </header>
        </div>    
    );
}

export default App;
