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
                    <table>
                        <tr>
                            <th>이름:</th>
                        <td><div>{this.props.name}</div></td>
                        </tr>
                        <tr>
                            <th>색깔:</th>
                            <td>{this.props.color}</td>
                        </tr>
                            <th>사고유무:</th>
                            <td>{this.props.accident}</td>
                        <tr>
                            <th>가격:</th>
                            <td>{this.props.price}만원</td>
                        </tr>
                        <tr>
                            <th>연식:</th>
                            <td>{this.props.produce_date}</td>
                        </tr>
                        <tr>
                            <th>제조사:</th>
                            <td>{this.props.provider}</td>
                        </tr>
                        <tr>
                            <th>변속기:</th>
                            <td>{this.props.transmission}</td>
                        </tr>
                        <tr>
                            <th>주행거리:</th>
                            <td>{this.props.distance_driven}</td>
                        </tr>
                        <tr>
                            <th>입고일:</th>
                            <td>{this.props.receiving_date}</td>
                        </tr>
                        <tr>
                            <th>배기량:</th>
                            <td>{this.props.displacement}CC</td>
                        </tr>
                        <tr>
                            <th>연료:</th>
                            <td>{this.props.fuel}</td>
                        </tr> 
                    </table>
                    <button onClick={this.deleteCarInfo}>삭제</button>
                    <button onClick={this.updataCarInfo}>수정</button>  
               </div>
            </div>
            )
        }
    }
}

export default Car;
