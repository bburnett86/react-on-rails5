import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import QuoteText from './QuoteText'
import QuoteNavigation from './QuoteNavigation'
import QuoteFooter from './QuoteFooter'

class QuotesDisplay extends React.Component{
    constructor(){
        super();
        // This will hold our quote once it receives the JSON from the api endpoint.
        this.state = {
            quote: {},
            fireRedirect: false
        };
    }



    fetchQuote(id){
        //Peform AJAX call with axios that pulls the corresponding quote from our databse
        axios.get(`api/quotes/${id}`)
        .then(response=>{
            //Update our state with the pulled quote information.
            this.setState({quote: response.data});
        })
        .catch(error=>{
            console.error(error);
            this.setState({fireRedirect: true})
        });
    }

    setQuoteFromQueryString(qs){
        this.qsParams = queryString.parse(qs);
        if (this.qsParams.quote){
            // Assign Quote id to an instance using the query string from the URL
            this.quoteId = Number(this.qsParams.quote);
        } else {
            this.quoteId = this.props.startingQuoteId;
            // Update URL in browser to reflect quoteId 1 if the query string doesn't meet set params
            this.props.history.push(`/?quote=${this.quoteId}`);
        }
    }

    componentDidMount(){
        this.setQuoteFromQueryString(this.props.location.search);
        this.fetchQuote(this.quoteId)
    }

    componentWillReceiveProps(nextProps){
        this.setQuoteFromQueryString(nextProps.location.search);
        this.fetchQuote(this.quoteId);
    }

    render(){
        const quote = this.state.quote
        const nextQuoteId = quote.next_id
        const previousQuoteId = quote.previous_id

        return(
            <div>
                <div className = 'quote-container'>
                    {/* If fire direct is true redirect to root */}
                    {this.state.fireRedirect &&
                        <Redirect to = {'/'} />
                    }
                    {/* Displays icon / link for previous quote */}
                    {previousQuoteId &&
                        <QuoteNavigation directions = 'previous' otherQuoteId= {previousQuoteId} />
                    }
                    {/* Information for our quote */}
                    <QuoteText quote = {this.state.quote} />
                    {/* Displays icon / link for previous quote */}
                    {nextQuoteId &&
                        <QuoteNavigation directions = 'next' otherQuoteId = {nextQuoteId} />
                    }
                </div>
                {this.state.quote.id != parseInt(this.props.startingQuoteId, 10)}
                <QuoteFooter startingQuoteId = {this.props.startingQuoteId} />
            </div>
        );
    }
}

export default QuotesDisplay;