import styled, { keyframes } from 'styled-components';
const floating = keyframes`
    0% {
        transform: translate(0);
    }
    30% {
        transform: translate(10px,20px);
    }

    60% {
        transform: translate(-10px);
    }
    100% {
        transform: translate(0);
    }
`;
const headshake = keyframes`
0% {
    transform: translateX(0);
}
6.5% {
    transform: translateX(-6px) rotateY(
-9deg);
}
18.5% {
    transform: translateX(5px) rotateY(
7deg);
}
31.5% {
    transform: translateX(-3px) rotateY(
-5deg);
}
43.5% {
    transform: translateX(2px) rotateY(
3deg);
}
50% {
    transform: translateX(0);
}
`;
const floating_top_image = keyframes`
0%, 20%, 53%, 100%{
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
    transform: translateZ(0);
}
    40%, 43%{
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-30px,0) scaleY(1.1);
    }

    70% {
        animation-timing-function: cubic-bezier(.755,.05,.855,.06);
        transform: translate3d(0,-15px,0) scaleY(1.05);
    }
    80% {
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
        transform: translateZ(0) scaleY(.95);
    }
    90% {
        transform: translate3d(0,-4px,0) scaleY(1.02);
    }
`;
export const Header1 = styled.div`
padding:0;
@media (max-width: 850px){
    & {
           width:100vw;
           display:flex;
           justify-content:center;
           align-items:center;
       }
       
   }    
`

export const Content1 = styled.div`
@media (max-width: 850px){
    & {
            width:100vw;
        text-align:center;
           display:flex;
           justify-content:center;
           align-items:center;
       }
       
   }   
`

export const PudgyPres = styled.h1`
    font-size:60px;
    margin:0;
    line-height:60px;
    padding:0;
    font-family: Rammetto One;
    @media (max-width: 850px){
        & {
               width:70vw;
               margin-top:100px !important;
               font-size:50px;
               text-align:left;
               display:flex;
               justify-content:center;
               align-items:center;
           }
           
       } 
`

export const ContentP = styled.p`

    line-height: 30px;
    margin-bottom: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family:sans-serif;
    font-size:18px;
    @media (max-width: 850px){
        & {
                width:70%;
                text-align:left;
               display:flex;
               justify-content:center;
               align-items:center;
           }
           
       } 
`

export const BtnConnect = styled.div`
    height:45px;
    width:200px;
    background: #beedfd;
    color: #07081d;
    display:flex;
    justify-content:center;
    font-family:sans-serif;
    align-items:center;
    border-radius: 3px;
    font-size:18px;
    font-weight:700;
    transition:.3s;
    cursor: pointer;   
    &:hover{
            background: #172d42;
            color:#beedfd;
            
    }

`
export const Social = styled.div`

    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`

export const SocialA1 = styled.a`

    display: block;
    width: 40px;
    height: 40px;
    background-color: #beedfd;
    color: #172d42;
    border-radius: 3px;
    text-align: center;
    margin-right: 15px;
    line-height: 35px;
    transition: all .2s ease-in;
    &:hover{
        background:white;
    }
`
export const SocialImg1 = styled.img`

    vertical-align: middle;
    border: 0;
    src: ${(props) => props.src};
`

export const Contract = styled.div`

    margin-left: auto;
    text-align: center;
    margin-top: 35px;
    line-height:30px;
`
export const Footer = styled.div`
    margin:130px 0 0 0;
    position: relative;
    @media (max-width: 850px){
        & {
               margin-bottom:70px;
           }
           
       }
`
export const AContract = styled.a`

    color: #beedfd;
    transition: all .2s ease-in;
    background-color: transparent;
    margin:0 0 100px 0;
    font-size:20px;
    &:hover{
        color:white;
        text-decoration:none;
    }
    
`
export const Home = styled.div`
    position:relative;
    
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const Home_inner = styled.div`
    position:relative;
    
    max-width:1250px;
    @media (max-width: 800px){
        & {
               max-width:100%;
           }
           
       }

`;
export const Left_wave = styled.div`
    position: absolute;
    left: -280px;
    top: -90px;
    z-index: -1;
    @media (max-width: 800px){
        & {
               left:-320px;
           }
           
       }

`;
export const Wave_img = styled.img`
    src: ${(props) => props.src};
    width: 397px;
    height: 168px;
`;
export const Right_iceberg = styled.div`
    position: absolute;
    top: -640px;
    right: -890px;
    z-index: -1;
    animation:${floating} 10s infinite;
`;
export const Right_img = styled.img`
    src: ${(props) => props.src};
    width: 1070px;
    height: 1011px;
    @media (max-width: 850px){
        & {
               display:none;
           }
           
       }
`;
export const Main = styled.div`
    width:100%;
    height:100%;

    @media (max-width: 800px){
        & {
               width:100% !important;
           }
           
       }

`;
export const Main_Header = styled.div`
    width:97%;   
    height: 14vh;
    
    padding-top:35px;
    display: flex;
    justify-content: flex-end;
`;
export const DisBtn = styled.div``
export const Disconnect = styled.div`
// font-family: Lato;
font-size: 1.1rem;
outline: none;
background: #172d42;
color: #fff;
border-radius: 5px;
border: none;
padding: 3px 20px;
// margin-top: 35px;
height:40px;
width:125px;
transition: .3s;
display: flex;
cursor:pointer;
align-items: center;
&:hover{
    filter: brightness(1.3);
}
`
export const Spanred = styled.span`
    background-color: #fa5c7e;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-right: 10px;
    margin: 0 10px 0 0;
`
export const Pudgy_all = styled.div`
    display:flex;
    @media (max-width: 850px){
     & {
            flex-direction:column;
            width:100vw;
        }
        
    }

`
export const Pudgy_Left = styled.div`
    width:60%;
    padding:0 20px 0 110px;
    
    @media (max-width: 850px){
        & {
              order:2;
              padding:10px 0 0 0 !important;
              width:100%;
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
           }
           
       }
`
export const Pudgy_Right = styled.div`
    width:40%;    
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    padding:30px 50px 0 0;

    @media (max-width: 850px){
        & {
               order:1;
               width:100%;
               padding:0px !important;
               margin:0px !important;
                
           }
           
       }
`
export const Pudgy_Left_Img = styled.img`
    src: ${(props) => props.src};
    margin-bottom:60px;
    width:100%;
    @media (max-width: 850px){
        & {
            width:60vw !important;
                
           }
           
       }
`
export const Pudgy_Left_letter = styled.div`
    font-size:1.1rem;
    line-height:40px;
    font-family:sans-serif;
    color:white;
    @media (max-width: 850px){
        & {
               width:60vw !important;
                
           }
           
       }
`
export const WaveRight = styled.div`
    width: 397px;
    height: 168px;
    position: absolute;
    right: -100px;
    top:200px;
    z-index: -1;
    @media (max-width: 850px){
        & {
                
        }
           
       }
    
`
export const ChangeGIF_ALL = styled.div`
    position:relative;
    &:hover{

        animation:${floating_top_image} 1s;
    }
    
`
export const ChangeGIF_ALL1 = styled.div`
    position:relative;
    margin-bottom:50px;
    margin-left:120px;
    @media (max-width: 850px){
        & {
            margin:0 !important;
               display:flex;             justify-content:center;
               align-items:center;
                
           }
           
       }
    
`
export const Soldout_letter = styled.p`
    text-align: center;
    font-family: Rammetto One;
    font-size: 2.3vw;
    color: #beedfd;
    margin-top: 60px;
        display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (max-width: 800px){
        & {
            font-size: 5.3vw;
           }
           
       }
`
export const WaveRight_img = styled.img`
    src: ${(props) => props.src};
`
export const ChangeGIF = styled.img`
    src: ${(props) => props.src};
    border-radius:10px;

    width:321px;
    @media (max-width: 850px){
        & {
            width:400px;
            border-radius:25px;
           }
           
       }
  
`
export const Border = styled.div`
    background-image: url(/assets/img/meltedice.svg);
    background-repeat: no-repeat;
    background-size: 99%;
    width: 108%;
    height: 135%;
    display: block;
    position: absolute;
    top: -11px;
    left: -10px;
    `
export const Border1 = styled.div`
background-image: url(/assets/img/meltedice.svg);
background-repeat: no-repeat;
background-size: 99%;
width: 108%;
height: 135%;
display: block;
position: absolute;
top: -11px;
left: -10px;
@media (max-width: 850px){
    & {
          width:425px !important;
          
       }
       
   }
`
export const Presents_ALL = styled.div`
    display:flex;
    position:relative;
    margin-top:150px;

    @media (max-width: 850px){
        & {
               flex-direction:column;
               margin-bottom:100px;
               justify-content:center;
               align-items:center;
           }
           
       }
       @media (max-width: 1100px){
        & {
            // width:90%;
            display:flex;
            justify-content:center;
            //    flex-direction:column;
               margin-bottom:100px;
           }
           
       }

`
export const Presents_Left = styled.div`
    width:35%;
    height:470px;
    position:relative;
    padding:0 0 0 50px;
    @media (max-width: 850px){
        & {
                width:80%;
               display:flex;
               justify-content:center;
               align-items:center;
           }
           
       }    
`
export const Presents_Right = styled.div`
    width:65%;

    padding:0 30px 0 50px;
    color:white;
    @media (max-width: 850px){
        & {
                width:90%;
               display:flex;
               flex-direction:column;
               justify-content:center;
               align-items:center;
           }
           
       }    
`
export const Presents_Left_GIF = styled.img`
    src: ${(props) => props.src};
    border-radius:10px;
    width:321px;
    @media (max-width: 850px){
        & {
                // width:100vw;
               display:flex;
               justify-content:center;
               align-items:center;
           }
           
       }    
`
export const Present_Border = styled.div`
background-image: url(/assets/img/meltedice.svg);
background-repeat: no-repeat;
background-size: 99%;
width: 100%;
height: 100%;
display: block;
position: absolute;
top: -20px;
left: 10px;
    @media (max-width: 850px){
        & {
            display:flex;
            top:60px;
            left:175px;
            justify-content:center;
            align-items:center;
           }
           
       }    
`
export const PudgyLeft_Ice = styled.div`
    position: absolute;
    top: 850px;
    z-index: -1;
    transform: scaleX(-1);
    left: -800px;
    animation:${floating} 10s infinite;
    @media (max-width: 850px){
        & {
               top:2000px;
               left:-800px;
           }
           
       }
`
export const PudgyRight_Ice = styled.div`
    position: absolute;
    top: 1150px;
    right:-80px;
    z-index: -1;
    animation:${floating} 10s infinite;
`
export const PudgyRight_Ice_right = styled.img`  
@media (max-width: 850px){
    & {
        display:none; 
       }
       
   }
`
export const CollHeader_cover = styled.div`
display:flex;
justify-content:center;
margin-top:70px;
`
export const CollHeader = styled.h1`   
// padding:0 0 0 40px;
font-size:70px;
margin:0;
display:flex;
margin-bottom:80px;
width:85%;
justify-content:space-between;
@media (max-width: 850px){
    & {
           flex-direction:column;
           justify-content:center;
           align-items:center;
           font-size:50px;
       }
       
   }
   @media (max-width: 1110px){
    & {
           flex-direction:column;
           width:90%;
           justify-content:center;
           align-items:center;
       }
       
   }
`
export const CollLeft = styled.div`   
line-height:50px;
font-size:70px;
margin:0;
color:white;
line-height:60px;
padding:0;
font-family: Rammetto One;
@media (max-width: 850px){
    & {
           font-size:50px;
       }
       
   }
`
export const CollRIght_Btn = styled.div`  
font-size:20px;
height:45px;
width:130px;
background: #beedfd;
color: #07081d;
display:flex;
justify-content:center;
align-items:center;
// padding: 3px 20px;
font-family:sans-serif;
border-radius: 3px;
// text-decoration: none;
transition: .3s;
// display: inline-block;
font-weight: bold;
font-size:18px;
cursor: pointer;
&:hover{
    background: #172d42;
    color:#beedfd;
    
}
`
export const CollRight = styled.div`   
display:flex;
align-items:center;
@media (max-width: 850px){
    & {
           margin-top:50px;
       }
       
   }
   @media (max-width: 1100px){
    & {
           flex-direction:column;
           margin-top:30px;
           justify-content:center;
           align-items:center;
       }
       
   }
`
export const CollIMGS_cover = styled.div`   
    display:flex;

    align-items:center; 
    justify-content:center;
   }
`
export const CollIMGS = styled.div`  
display:flex;
width:85%;
// flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 1050px){
    & {
           width:100%;
           flex-direction:column;
           justify-content:center;
           align-items:center;
       }
       
   }
`

export const CollCard = styled.div`  
position:relative;
width:321px;
height:380px;
overflow:block;
&:hover{
    animation:${headshake};
    animation-duration: .5s;
}
`
export const CollCard1 = styled.div`  
position:relative;
width:321px;
height:380px;
overflow:block;
margin-left:100px;
`
export const CollIMG_img = styled.img`  
width:321px;
border-radius:10px;
`
export const CollIMG_border = styled.div`  
    background-image: url(/assets/img/meltedice.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 108%;
    height: 100%;
    display: block;
    position: absolute;
    top: -11px;
    left: -15px;
`
export const CollRow = styled.div` 
@media (max-width: 1050px){
    & {
           width:80%;
           display:flex;
           flex-direction:row;
           justify-content:space-between;
           align-items:center;
       }
       
   } 
   @media (max-width: 850px){
    & {
           width:100%;
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           align-items:center;
       }
       
   } 
`
export const CollRow1 = styled.div`  
@media (max-width: 850px){
    & {
            display:flex;
           flex-direction:column;
       }
       
   }
   @media (max-width: 1100px){
    & {
        display:flex;
        flex-direction:ro;
           justify-content:center;
           align-items:center;
       }
       
   }
`
export const TeamHeader = styled.div`  
margin:200px 0 50px 0;
display:flex;
justify-content:center;
color:white;
align-items:center;
@media (max-width: 850px){
    & {
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
           flex-direction:column;
       }
       
   }
`
export const TeamHeader_content = styled.h1`  
text-align: center;
font-family: Rammetto One;
font-size: 70px;
    display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
@media (max-width: 850px){
    & {
        font-size:60px;
       }
       
   }
`
export const TeamBody = styled.div`  
display:flex;
flex-direction:column;
justify-content:center;
color:white;
align-items:center;
@media (max-width: 850px){
    & {
            width:100%;
       }
       
   }
`
export const TeamBody_img = styled.img`  
width:180px;
border-radius:10px;
`
export const TeamBody_border = styled.div`  
    background-image: url(/assets/img/meltedice.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 108%;
    height: 100%;
    display: block;
    position: absolute;
    top: -8px;
    left: -5px;
`
export const TeamRow = styled.div` 
display:flex; 
padding-left:50px;
@media (max-width: 850px){
    & {
        display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
       }
       
   }
`
export const TeamSubRow = styled.div`  
display:flex;
width:88%;
@media (max-width: 670px){
    & {
           width:100%;
           margin-left:70px;
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
       }
       
   }
`
export const TeamBodyCard = styled.div`  
position:relative;
width:180px;
height:300px;
overflow:block;
margin:0 60px 0 0;
&:hover{
    animation:${headshake};
    animation-duration: .5s;
}
`
export const TeamLetter = styled.div`  
display:flex;
margin:50px 0 0 0;
`
export const TeamLetter_img = styled.img`  
    width:25px;
    height:25px;
    margin:0 20px 0 0;
`
export const TeamLetter_letter = styled.div`  
    line-height:16px;
    font-size:20px;
    font-weight:bold;
    font-family: Rammetto One;

`
export const TeamLetter_letter1 = styled.div`  
    line-height:16px;
    font-size:16px;
    font-weight:bold;
    font-family: Rammetto One;

`
export const Team_Ice = styled.div`
    position: absolute;
    top: 2300px;
    z-index: -1;
    left: -70px;
    animation:${floating} 10s infinite;
    @media (max-width: 850px){
        & {
               display:none;
           }
           
       }
`
export const Team_img = styled.img`
    
`
export const Team_Ice_right = styled.div`
    position: absolute;
    top: 1850px;
    z-index: -1;
    right: -980px;
    animation:${floating} 10s infinite;
    @media (max-width: 850px){
        & {
               display:none;
           }
           
       }
`
export const Team_img_right = styled.img`
    
`;

export const End_Ice = styled.div`
    position: absolute;
    bottom: -130px;
    z-index: -1;
    left: -750px;
    width: 1070px;
    background: url("assets/img/ice2.svg");
    height: 650px;
    background-repeat: no-repeat;
    animation: ${floating} 10s infinite;
    @media (max-width: 850px){
        & {
               display:none !important;
           }
           
       }
`
export const End_img = styled.img`
  
`
