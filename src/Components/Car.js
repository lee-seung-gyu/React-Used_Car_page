import React, {Component} from 'react';
import '../css/Car.css';

class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            edit:false,
            name:this.props.name,
            color:this.props.color,
            accident:this.props.accident,
            provider:this.props.provider,
            produce_date:this.props.produce_date,
            receiving_date:this.props.receiving_date,
            price:this.props.price,
            displacement:this.props.displacement,
            distance_driven:this.props.distance_driven,
            fuel:this.props.fuel,
            transmission:this.props.transmission
        }
    }
    deleteCarInfo=()=>{
        alert('정보 삭제(car)');
        const {name} = this.props;
        this.props.deleteCarInfo(name);
    }
    
    
      updataCarInfo=()=>{
        alert('정보 수정(car)');
        this.setState({edit:!this.state.edit});
        if(this.state.edit===true){
            const {name,color,accident,provider,produce_date,receiving_date,price,displacement,distance_driven,fuel,transmission} = this.state;
            this.props.updataCarInfo(name,color,accident,provider,produce_date,receiving_date,price,displacement,distance_driven,fuel,transmission);
        }
      }
      
      handleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
    render(){
        const {edit} =this.state;
        if(edit === true){
            return(
                <div className='wrap' >  
                    <div>              
                        <div className="img"><img src={require(`../images/${this.props.name}.jpg`).default} className="img" /></div>
                        <div>이름:{this.props.name}</div>
                        <div>색깔:<input defaultValue={this.props.color} onChange={this.handleChange} name="color" /></div>
                        <div>사고유무:<input defaultValue={this.props.accident} onChange={this.handleChange} name="accident" /></div>
                        <div>배기량:<input defaultValue={this.props.displacement} onChange={this.handleChange} name="displacement" />CC</div>
                        <div>사용연료:<input defaultValue={this.props.fuel} onChange={this.handleChange} name="fuel" /></div>
                        <div>가격:<input defaultValue={this.props.price} onChange={this.handleChange} name="price" /></div>
                        <div>연식:<input defaultValue={this.props.produce_date} onChange={this.handleChange} name="produce_date" /></div>
                        <div>제조사:<input defaultValue={this.props.provider} onChange={this.handleChange} name="provider" /></div>
                        <div>변속기:<input defaultValue={this.props.transmission} onChange={this.handleChange} name="transmission" /></div>
                        <div>주행거리:<input defaultValue={this.props.distance_driven} onChange={this.handleChange} name="distance_driven" /></div>
                        <div>입고일:<input defaultValue={this.props.receiving_date} onChange={this.handleChange} name="receiving_date" /></div>
                        <button onClick={this.deleteCarInfo}>삭제</button>
                        <button onClick={this.updataCarInfo}>수정</button>
                    </div>
                </div>
            )
        }else if(edit===false){
            return(
            <div className='wrap'>
                <div className="let">
                    <div className="img"> <img src={require(`../images/${this.props.name}.jpg`).default}/> </div>
                    <div>이름:{this.props.name} </div>
                    <div>색깔:{this.props.color}</div>
                    <div>사고유무:{this.props.accident}</div>
                    <div>가격:{this.props.price}만원</div>
                    <div>연식:{this.props.produce_date}</div>
                    <div>제조사:{this.props.provider}</div>
                    <div>변속기:{this.props.transmission}</div> 
                    <div>주행거리:{this.props.distance_driven}</div>
                    <div>입고일:{this.props.receiving_date}</div>
                    <div>배기량:{this.props.displacement}CC</div>
                    <div>연료:{this.props.fuel}</div>
                    <button onClick={this.deleteCarInfo}>삭제</button>
                    <button onClick={this.updataCarInfo}>수정</button>  
               </div>
            </div>
            )
        }
    }
}

export default Car;