import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

const App = (props) =>(
    <Router>
        <div>
            <Route
                path = '/'
                startingQuoteId={props.startingQuoteId}
                // Passes props to the component rendered by from the Route
                render={(routeProps) => <QuotesDisplay {...props}{...routeProps} />}
            />
        </div>
    </Router>
)

//This is needed at the bottom of every component file to make it available via ES6 'import' statements
export default App