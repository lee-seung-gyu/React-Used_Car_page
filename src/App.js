import React, { PureComponent } from 'react';
import axios from 'axios';
import Car from './Components/Car.js';
import Header from './Components/Header.js';

import './App.css';

let result;
let filterResult;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      render:true,
      name:'',
      carList:[],
      totalcount:0,
      search:'',
      currentPage:1,
      carPerPage:4
    }
  }


  _getCarInfo = async() => {
    const res = await axios.get('/api/getcarInfo');   
    const carData = res.data.car_res;
    
    let carObj = null;
    this.setState({totalcount:carData.length})
    
    for(var i=0 ; i<carData.length; i++){
      carObj = new Object();
      carObj.id = carData[i].id;
      carObj.name = carData[i].car_name;
      carObj.color = carData[i].color;
      carObj.accident = carData[i].accident;
      carObj.displacement = carData[i].displacement;
      carObj.fuel = carData[i].fuel;
      carObj.price = carData[i].price;
      carObj.produce_date = carData[i].produce_date;
      carObj.provider = carData[i].provider;
      carObj.transmission = carData[i].transmission;
      carObj.distance_driven = carData[i].distance_driven;
      carObj.receiving_date = carData[i].receiving_date;
      this.setState({carList:this.state.carList.concat(carObj)});
      carObj= null;
    }
  }

  _delCar = async(name)=>{
    const res = await axios.delete('/api/del_carInfo/'+name);
  }

  _updatecarParams=async(name,color,accident,provider,produce_date,receiving_date,price,displacement,distance_driven,fuel,transmission)=>{
    const res = await axios.put('/api/update_carInfo/'+name+"&"+color+"&"+accident+"&"+provider+
    "&"+produce_date+"&"+receiving_date+"&"+price+"&"+displacement+"&"+distance_driven+"&"+fuel+"&"+transmission);
  }

  deleteCarInfo=(name)=>{
    const {carList} =this.state;
    this.setState({
      carList:carList.filter(data => data.name != name)
    })
    this._delCar(name);
  }

  updataCarInfo=(name,color,accident,provider,produce_date,receiving_date,price,displacement,distance_driven,fuel,transmission)=>{
    const {carList}=this.state;
    const data = {name:name,color:color,accident:accident, provider:provider,produce_date:produce_date,receiving_date:receiving_date,price:price,
      displacement:displacement,distance_driven:distance_driven,fuel:fuel,transmission:transmission};
    const modifiedArray = carList.map(item => item.name === name? ({...item,...data}):item);
    this.setState({
      carList:modifiedArray
    })
    this._updatecarParams(name,color,accident,provider,produce_date,receiving_date,price,displacement,distance_driven,fuel,transmission);
  }

  dataAllRendering=()=>{
    const {carList} = this.state;
    const carRender = carList.map((data,i)=>
      <Car key={data.id} name={data.name} color={data.color} accident={data.accident}
        displacement={data.displacement} fuel={data.fuel} price={data.price} produce_date={data.produce_date}
        provider={data.provider} transmission={data.transmission} receiving_date={data.receiving_date} distance_driven={data.distance_driven}
        deleteCarInfo={this.deleteCarInfo} updataCarInfo={this.updataCarInfo}></Car>)
    result=carRender;
    this.setState({render:true})
  }

  dataFilterRendering=()=>{
    result=null;
    this.setState({ render:false,search:''})

    const {carList} = this.state;
    const carListFiltered = carList.filter((data)=>{
      return data.name === this.state.name;
    });

    this.setState({
      search:carListFiltered[0].name,
    })
    
    const carListFilteredRender = carListFiltered.map((data,i)=>
    <Car key={data.id} name={data.name} color={data.color} accident={data.accident}
        displacement={data.displacement} fuel={data.fuel} price={data.price} produce_date={data.produce_date}
        provider={data.provider} transmission={data.transmission} receiving_date={data.receiving_date} distance_driven={data.distance_driven}
        deleteCarInfo={this.deleteCarInfo} updataCarInfo={this.updataCarInfo}></Car> 
    )
    filterResult = carListFilteredRender
   
  }

  componentDidMount() {
    this._getCarInfo();
  }

  nameChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }


  render() {
    const {carList, render, search} = this.state;
    const carRender = carList.map((data,i)=>
      <Car key={data.id} id={data.id} name={data.name} color={data.color} accident={data.accident}
        displacement={data.displacement} fuel={data.fuel} price={data.price} produce_date={data.produce_date}
        provider={data.provider} transmission={data.transmission} receiving_date={data.receiving_date} distance_driven={data.distance_driven}
        deleteCarInfo={this.deleteCarInfo} updataCarInfo={this.updataCarInfo}></Car>)
    result=carRender;
    
    if(render ===true){
      return(
        <div className="wrap">
        <header className="header">
          <Header nameChange={this.nameChange} dataFilterRendering={this.dataFilterRendering} dataAllRendering={this.dataAllRendering} > </Header>
        </header>
        
        <section className="section">
          <div>{result}</div>
        </section>
      </div>
      );
    }else if(render === false){
      if(search===this.state.name){
        return(
          <div className="wrap">
            <header className="header">
            
              <Header nameChange={this.nameChange} dataFilterRendering={this.dataFilterRendering} dataAllRendering={this.dataAllRendering} > </Header>
              
            </header>
            
            <section className="section">
              <div>{filterResult}</div>
            </section>
           
          </div>
        );
      }else if(this.state.search !== this.state.name){
        return(
        <div className="wrap">
        <header className="header">
          <Header nameChange={this.nameChange} dataFilterRendering={this.dataFilterRendering} dataAllRendering={this.dataAllRendering} > </Header>
        </header>
        
        <section className="section">
          <div>{result}</div>
        </section>
       
        </div>
        );
      }
    }
  }
}

export default App;