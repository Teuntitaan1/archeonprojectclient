import React from 'react';
import '../StyleSheets/App.css';

// image import
import CompletedQuestionsButton from '../Images/checklist-alt-svgrepo-com.svg';
import Logo from '../Images/Archeon logo.png';
import BackArrow from '../Images/PijlNaarLinks.svg';

class Header extends React.Component {
    render() {
        return (
            <>
               <div style={{backgroundColor : "#56a222", width : 100+"%", height : 10+"vh", position : 'absolute', top : 0+"%", left : 0+"%"}}>
					
					{/*Moves the program back into its previous state*/}
					{this.props.ProgramState === "AnswerScreen" || this.props.ProgramState === "DoneQuestionsScreen" || this.props.ProgramState === "ErrorScreen" || this.props.ProgramState === "InfoToAnswerScreen" ? 
					<img onClick={() => {this.props.BackToPreviousScreen(); navigator.vibrate(10);}} style={{height : 100+"%", position : 'absolute', left : 0+"%"}} src={BackArrow} alt="A backarrow"/> : null}
					{/*Archeon logo*/}
					<div style={{display : 'flex', justifyContent : 'center', height : 100+"%"}}>
						<img onClick={() => {window.open('https://www.archeon.nl/index.html', '_blank'); navigator.vibrate(10);}} style={{}} src={Logo} alt="Logo of the archeon website"/>
					</div>
					{/*Moves the program to the DoneQuestionsScreen state*/}
					{this.props.ProgramState === "SelectionScreen"  ? 
					<img onClick={() => {this.props.ToDoneQuestionsScreen(); navigator.vibrate(10);}} src={CompletedQuestionsButton} alt="CompletedQuestionsbutton" style={{height: 100+"%", position : 'absolute', right : 0+"%", bottom : 0+"%"}}/> : null}
				</div>
            </>
        );
    }
}

export default Header;