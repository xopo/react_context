import React, { createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider  extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            language: 'french'
        }
        this.switchLanguage = this.switchLanguage.bind(this);
    }

    switchLanguage(e) {
        this.setState({language: e.target.value});
    }

    render() {
        return(
            <LanguageContext.Provider value={{...this.state, switchLanguage: this.switchLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

// Render props pattern, the language context component is created and is applied on the Component
export const withLanguageContext = AnyComponent => props => (
    <LanguageContext.Consumer>
        {value => <AnyComponent languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)

export default LanguageProvider;