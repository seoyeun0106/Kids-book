import './App.css';
import {useDebugValue, useState} from 'react';

function App() {
  let [name,setName]=useState("");
  let [truee,setTruee]=useState(false);
  let [click,setClicking]=useState(Array(4).fill(false));
  let copy=[...click];
  let [count,setCount]=useState(0);
  let changeClick=((a)=>{
    copy[a]=true;
    return copy;
  })
  //버튼을 없애고, enter 키 누르면 넘어가게 하고 싶었는데,, ㅠ input:text를 다 치고 더 이상 변화가 없을 때 쓸 수 있는 이벤트는 없나?
  return (
    <div className="App">
      <div className="book">
        
        <div className={click[0]&&truee?"turn firstcover":"firstcover"} onClick={()=>{setTruee(true)}}>
          <div className='frontPage'>
          <form onSubmit={(e)=>{
                e.preventDefault();
                name.length>0?setClicking(changeClick(0)):alert("이름을 입력해주세요");}}>
            <div>
              <input type="text" maxLength="3" size="9" onChange={(e)=>{setName(e.target.value); console.log(name);}}>
              </input>
              <span style={{color:'white'}}>이꺼</span>
            </div>
            <button className='firstButton'></button>
          </form>
          </div>
          <div className='backCover'></div>
        </div>
        
        <div className={click[1]?"turn firstpage":"firstpage"} >
          <div className='frontPage'>
            <form  method="get" onSubmit={(e)=>{e.target[0].checked&&setCount(count+1);e.preventDefault();}}>
            <h1>이 색은 무슨 색인가요?</h1>
            <div className="img"></div>
            <div>
            <label><input type="radio" name="color" value="분홍"></input> 분홍 </label>
            <label><input type="radio" name="color" value="노랑"></input> 노랑 </label>
            <label><input type="radio" name="color" value="파랑"></input> 파랑 </label>
            </div>
            <br />
            <button onClick={(e)=>{setClicking(changeClick(1));}}>다음</button>
            </form>
            </div>
            <div className='backPage'></div>
        </div>

        <div className={click[2]?"turn lastpage":"lastpage"}>
          <div className='frontPage'>
          <form method="get" onSubmit={(e)=>{e.target[1].checked&&setCount(count+1);e.preventDefault();}}>
          <h1>이 동물의 이름은 무엇일까요?</h1>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/13/56/tiger-161802_1280.png"></img>
          <div>
          <label><input type="radio" name="동물" value="고양이"></input> 고양이 </label>
          <label><input type="radio" name="동물" value="호랑이"></input> 호랑이 </label>
          <label><input type="radio" name="동물" value="사자"></input> 사자 </label>
          </div>
          <br />
          <button onClick={(e)=>{setClicking(changeClick(2));}}>다음</button>
          </form>
          </div>
        <div className='backPage'></div>
        </div>
        {/*<Page props={}></Page>*/}
        
        <div className="countpage">
          <h1>축하합니다!🎉</h1>
          <h3> {name}은 {count}문제를 맞추셨습니다!</h3>
          <h4></h4>
          </div>
        
        <div className="cover"></div>
      </div>
    </div>
  );
}
/*
function Page({click,setCount,setClicking,count,changeClick}){
  return(
  <div className={click[1]?"turn firstpage":"firstpage"} >
          <div className='frontPage'>
            <form  method="get" onSubmit={(e)=>{e.target[0].checked&&setCount(count+1);e.preventDefault();}}>
            <h1>이 색은 무슨 색인가요?</h1>
            <div className="img"></div>
            <div>
            <label><input type="radio" name="color" value="분홍"></input> 분홍 </label>
            <label><input type="radio" name="color" value="노랑"></input> 노랑 </label>
            <label><input type="radio" name="color" value="파랑"></input> 파랑 </label>
            </div>
            <br />
            <button onClick={(e)=>{setClicking(changeClick(1));}}>다음</button>
            </form>
            </div>
            <div className='backPage'></div>
  </div>)
}*/
export default App;
