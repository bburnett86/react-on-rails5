import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class QuotesDisplay extends React.Component{
    constructor(){
        super();
        // This will hold our quote once it receives the JSON from the api endpoint.
        this.state = {
            quote: {}
        };
    }



    fetchQuote(id){
        //Peform AJAX call with axios that pulls the corresponding quote from our databse
        axios.get(`api/quotes/${id}`)
        .then(response=>{
            //Update our state with the pulled quote information.
            this.setState({quote: response.data});
            console.log(response.data)
        })
        .catch(error=>{
            console.error(error);
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
                {previousQuoteId &&
                    <Link to = {`./?quote=${previousQuoteId}`}>
                        Previous
                    </Link>
                }{nextQuoteId &&
                    <Link to = {`./?quote=${nextQuoteId}`}>
                        Next
                    </Link>
                }
                <p>
                    {quote.text}
                </p>
                <p>
                    {quote.author}
                </p>
            </div>
        );
    }
}

export default QuotesDisplay;