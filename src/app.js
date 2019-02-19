import React, { Component } from 'react';
import { connect } from 'react-redux'
import { moviesList, directorsList } from './actions'
import { bindActionCreators } from 'redux'

class App extends Component {


    componentWillMount(){

    }



    render() {
        console.log(this.props)
        return (
            <div>
                Hello
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        moviesList,directorsList
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);