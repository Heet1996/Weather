import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index';
class Search extends Component
{   constructor(props)
    {   super(props);
        this.state={term:''};
        this.inputChange=this.inputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);

        
    }
    inputChange(event)
    {   console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormSubmit(event)
    {
        event.preventDefault();
        this.props.getWeather(this.props.term);
        this.setState({term:''});        

    }
    render()
    {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                className="form-control"
                value={this.state.term}
                onChange={this.inputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-light">Search</button>
                </span>
            </form>
        )
    }
} 
const mapDispatchToProps = (dispatch)=>{
    
    return bindActionCreators({getWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(Search);