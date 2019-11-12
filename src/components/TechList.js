import React, { Component } from 'react';

import TechItem from './Techitem';

class TechList extends Component {


    // Teste
    // static defaultProps = {
    //     tech: 'Oculto'
    // };

    state = {
        newTech: '',
        techs: [
            // 'Node.js',
            // 'ReacjJS',
            // 'React Native',
            // 'Lucas JS'
        ]
    };

    // Execita assim que o componente aparece na tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if(techs){
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    // Executa sempre que houver alterações nas props ou estado 
    componentDidUpdate(prevProps, prevState) {

        if(prevState.techs !== this.state.techs){
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }

    }

    // Executa quando o componente deixa de existir 
    componentWillMount() {

    }

    handleInputChange = e => {
        // console.log(e.target.value);
        this.setState({ newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        //console.log(this.state.newTech);

        this.setState({ 
            techs: [... this.state.techs, this.state.newTech],
            newTech: ''
        });
    }

    handleDelete = (tech) => {
        // console.log(tech);
        this.setState({techs: this.state.techs.filter(t => t !== tech)});
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <h1>{this.state.newTech}</h1> */}
                <ul>
                    {this.state.techs.map(tech => ( <TechItem 
                    key={tech} 
                    tech={tech} 
                    onDelete={ () => this.handleDelete(tech)} />
                        // <li key={tech}>
                        //     {tech}
                        //     <button onClick={ () => this.handleDelete(tech)} type="button">Remover</button>
                        // </li>
                    ))}
                    <TechItem />
                </ul>  
                <input 
                type="text" 
                onChange={this.handleInputChange} 
                value={this.state.newTech} />
                <button type="submit" >Enviar</button>   
            </ form>
        );
         
        
        // console.log(this.state);
        // return (
        //     <ul>
        //         <li>Node.js</li>
        //         <li>ReactJS</li>
        //         <li>React Native</li>
        //     </ul>
        // );
    }
}

export default TechList;