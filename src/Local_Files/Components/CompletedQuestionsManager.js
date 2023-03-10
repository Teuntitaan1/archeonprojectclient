import React from 'react';
import '../StyleSheets/App.css';

class CompletedQuestionsManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ActiveQuestion : null
        }
    }

    SetActiveQuestion(index) {
        if (index !== null) {
            if (this.state.ActiveQuestion !== index) {
                this.setState({ActiveQuestion : index});
            }
            else {
                this.setState({ActiveQuestion : null});
            }
        }
        else {
            this.setState({ActiveQuestion : null});
        }
    }
    render() {
        return(
            <>
                <div style={{display : 'flex', flexWrap : 'wrap'}}>
                    {this.props.QuestionList.map((Question, index) => 
                        <button key={index} onClick={() => {Question.Completed ? this.SetActiveQuestion(index) : this.SetActiveQuestion(null);}} style={{borderRadius : 360+"rem", width : 3+"rem", height : 3+"rem", backgroundColor : Question.Completed ? "#7ed957" : "#a6a6a6", textAlign : 'center', color : "#ffffff"}}>{index+1}</button> 
                    )}
                </div>

                <div style={{marginTop : -5+"%"}}>
                    {this.state.ActiveQuestion !== null ? 
                        <>
                            <h2 style={{textAlign : 'center'}}>{this.props.QuestionList[this.state.ActiveQuestion].Description}</h2>
                            <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'center'}}>
                                {this.props.QuestionList[this.state.ActiveQuestion][this.props.QuestionMode].Options.map((Option, index) => 
                                    <div key={index} style={
                                        {
                                            backgroundColor : Option === this.props.QuestionList[this.state.ActiveQuestion][this.props.QuestionMode].CorrectAnswer ? "#7ed957" : "#e14747",
                                            width : 2.5+"rem",
                                            height : 2.5+"rem",
                                            borderRadius : 15+"px",
                                            textAlign : 'center'
                                        }}><p style={{position : 'relative', bottom : 15+"%"}}>{index+1}</p></div>)
                                }
                                
                            </div>
                            <p>{this.props.QuestionList[this.state.ActiveQuestion][this.props.QuestionMode].CorrectAnswer} was het goede antwoord!</p>
                            <h2 style={{textAlign : 'center'}}>Wist je dat?</h2>
                            <p>{this.props.QuestionList[this.state.ActiveQuestion].ExtraInfo}</p>
                        </>
                        :
                        null
                    }
                </div>
            </>
        );
    }
}

export default CompletedQuestionsManager;