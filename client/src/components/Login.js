import React ,{useState} from 'react'
import styled from "styled-components";
import { auth,provider1 } from "../firebase";
const Login = (props) => {
    // *using  states
    const [state1, setstate1] = useState("");
    const [state2, setstate2] = useState("");
    const [dataonclick,chgedataonclick]=useState([]);



    const chg1=(e)=>{
        setstate1(e.target.value)
    }
    const chg2=(e)=>{
        setstate2(e.target.value)
    }
    const register =(e)=>{
        if(state1.trim()==="" || state2.trim()===""){

        }
        else{
            chgedataonclick([state1,state2]);
            console.log(dataonclick)
        }
    }


    var name;
    var email;
    var photo;
    async function ram(){
        try{
            const res = await fetch("/sigin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email,photo
                })
            } 
            );
            const data = await res.json();
            if(res.status===422 || !data){
                 window.alert("Sorry our fault");
                console.log("Alert");
            }
            else{
                 window.alert("Thankyou");
            }
        }
        catch(e){
            console.log(e.message);
        }
    }
    
    const handleAuth1=()=>{
        
        auth.signInWithPopup(provider1).then((result)=>{
            console.log(result);
            name=result.user.displayName;
            email=result.user.email;
            photo=result.user.photoURL;
            ram();
        }).catch((e)=>{console.log(e.message)}) 
        
    }

    

    return (
        <Main>
            <BUTTON1 onClick={handleAuth1}>Sigin with Google</BUTTON1>
            <DIV1>or</DIV1>
            <DIV2>
                <INPUT1 type="text" required  placeholder="Enter Your username" value={state1} onChange={chg1}/>
                <INPUT1 type="email" required placeholder="Enter your email" value={state2} onChange={chg2}/>
                <BUTTON2 type="submit" onClick={register}  >Register</BUTTON2>
            </DIV2>
        </Main>
    )
}

const Main= styled.div`
    display:flex;
    color:black;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:400px;
    height:400px;
    background:white;
    border-radius:1rem;
    box-shadow:0px 0px 24px   rgba(255,255,255,0.3);

`;
const BUTTON1= styled.button`
    display:flex;
    align-items:center;
    width:60%;
    justify-content:space-around;
    height:40px;
    margin-top:1rem;
    border:1px solid transparent;
    border-radius:1rem;
    letter-spacing:2px;
    font-weight:bold;
    cursor:pointer;
    transition: width 0.5s  ease-in-out;
    &:hover{
        width:68%;
    }
    color:white;
    background-color:#040714;
`;

const DIV1=styled.div`
    margin-top:.5rem;
    border-radius:50%;
    border:0px;
    &:before{
        position:absolute;
        margin-top:10px;
        margin-left:-140px;
        content:"";
        width:8rem;
        height:1px;
        background-color: rgba(0,0,0,0.3);
        border:0px;
    }
    &:after{
        position:absolute;
        content:"";
        margin-top:10px;
        margin-left:10px;
        width:8rem;
        height:1px;
        background-color: rgba(0,0,0,0.3);
        border:0px;
    }
`;

const DIV2=styled.div`
    min-height:13rem;
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;
const INPUT1=styled.input`
    height:30px;
    margin-bottom:1px;
    border-radius:1rem;
    border:1px solid rgba(0,0,0,0.6);
    padding-left:10px;
    &:focus{
        outline:none;
    }
`;
const BUTTON2=styled.button`
        height:30px;
        width:100%;
        color:white;
        background-color:#040714;
        border-radius:1rem;
        border:0px;
        letter-spacing:2px;
        font-weight:bold;
        cursor:pointer;
        overflow:hidden;
        &:before{
                content:"";
                position:absolute;
                transform:rotate(45deg);
                width:70px;
                margin-left:0px;
                margin-top:10px;
                box-shadow: 0px 0px 3px 1.9px white;
                display:none;
                animation: anim 3s linear infinite;
            }
            @keyframes anim{
                0%{
                    margin-left:-90px;
                }
                100%{
                    margin-left:240px;
                }
            }

        &:hover{
            &:before{
                display:block;
            }
        }
`;

export default Login
