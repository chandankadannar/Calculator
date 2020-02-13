import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        let {answer}=this.props;
        console.log(answer);
        console.log(result);
        return (
            <div className="result">
                <p style={{fontSize:"0.7em;"}}>{result}</p>
                <h6 style={{fontSize:"1.2em;"}}>{answer}</h6>
            </div>
    )
        ;
    }
}


export default ResultComponent;

