import React, { Component } from 'react';

class NationData extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            IndData: null
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.covid19india.org/v4/data.json");
        const data = await response.json();
        this.setState({IndData: data.TT, loading: false})
        console.log(this.state.IndData)
    }

    render(){
        return (
            <div className="container-fluid">
                <div>
                {this.state.loading || !this.state.IndData.total ? (
                    <div>loading ...</div>
                ) :

            <div>
                <div className='row justify-content-center' style={{background: ""}}>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "red", marginLeft: 10, marginRight:10, marginTop: 5, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Confirmed</h6>
                        <p>+{this.state.IndData.delta.confirmed}</p>
                        <h2>{this.state.IndData.total.confirmed}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "blue", marginLeft: 10, marginRight:10, marginTop: 5, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Active</h6>
                        <h2 style={{marginTop: 50}}>{this.state.IndData.total.confirmed - this.state.IndData.total.recovered - this.state.IndData.total.deceased - this.state.IndData.total.other}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "green", marginLeft: 10, marginRight:10, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Recovered</h6>
                        <p>+{this.state.IndData.delta.recovered}</p>
                        <h2>{this.state.IndData.total.recovered}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "grey", marginLeft: 10, marginRight:10, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Deceased</h6>
                        <p>+{this.state.IndData.delta.deceased}</p>
                        <h2>{this.state.IndData.total.deceased}</h2>
                    </div>
                </div>
            </div>
            }
                </div>
 
            </div>
        );

        }
    }


export default NationData;