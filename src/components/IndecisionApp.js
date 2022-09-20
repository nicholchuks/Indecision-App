import React from 'react'
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick =() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('option');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('option', json)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    
    render() {

        const subtitle = 'Put your life in the hands of a computer.'
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                    <div className='container'>
                        <Action
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        <div className='widget'>
                            <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}   
                        />
                    </div>
                        </div>
                <OptionModal
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

// class Header extends React.Component {
//     render() {
        
//         return (
//             <div>
                
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }


// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                  >
//                  What shoul i do?
//                  </button>
//             </div>
//         );
//     }
// }



// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }


