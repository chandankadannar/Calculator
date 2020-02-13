import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">

               
               <div className="keypadcomp" style={{display:'flex'}}>
               <button style={{background:'white',borderRadius:'1.8em',border:'1px solid white',color:'#55C2F1',margin:'0.5em',borderStyle:'solid'}} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="CE" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'white',margin:'0.5em',borderStyle:'solid',background:'#55C2F1',border:'1px solid white'}} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>

               </div>
              
             <div style={{display:'flex'}}>
             <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'white',margin:'0.5em',borderStyle:'solid',background:'#55C2F1',border:'1px solid white'}} name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

             </div>

<div style={{display:'flex'}}> 
<button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'white',margin:'0.5em',borderStyle:'solid',background:'#55C2F1',border:'1px solid white'}} name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
               
</div>
             

            <div style={{display:'flex'}}>
            <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'white',margin:'0.5em',borderStyle:'solid',background:'#55C2F1',border:'1px solid white'}} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
               
            </div>
              
           <div style={{display:'flex'}}>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'#55C2F1',margin:'0.5em',borderStyle:'solid',border:'1px solid white'}} name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button style={{background:'white',borderRadius:'1.8em',color:'white',margin:'0.5em',borderStyle:'solid',background:'#55C2F1',border:'1px solid white',width:'200px'}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
               
           </div> 
                <br/>
            </div>
        );
    }
}


export default KeyPadComponent;
