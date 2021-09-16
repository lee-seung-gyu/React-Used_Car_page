import React,{Component} from 'react';
import '../css/Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    nameChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        });
        this.props.nameChange(e);
      }
      dataFilterRendering=()=>{
          this.props.dataFilterRendering();
      }
      dataAllRendering=()=>{
          this.props.dataAllRendering();
      }
      
      onClick=()=>{
          alert('클릭');
          this.setState({
              value:'그랜저'
          })
          console.log(this.state.value);
          this.props.dataFilterRendering(this.state.value);
      }
      onClick;
    render(){
        return(
            <div>
                <h1>중고차 검색 페이지</h1>
                <br />
                <input className="input" type="text" placeholder="검색하고 싶은 차 이름을 입력하세요" onChange={this.nameChange} name="name" ></input>
                <button className="btn" onClick={this.dataFilterRendering} >검색</button>
                <button className="btn2" onClick={this.dataAllRendering} >모두조회</button>
                <br />
                <br />
            </div>
        )
    }
}

export default Header;