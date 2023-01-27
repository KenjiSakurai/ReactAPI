   
   
   
   var Search = React.createClass({

        getInitialState: function () {
            return {
                apiData:""
            };
        },

        submitted:function(event){
            event.preventDefault();
            let searchinput = event.target.input.value;
            getData(searchinput).then(data=> this.setState({apiData:data.data},()=> this.helloworld()));
        },

        helloworld(){
            ReactDOM.render(<Cards gif={this.state.apiData}/>,document.getElementById("view"));
        },

        render:function(){
            return(
                <form action="#" id="form-search" onSubmit={this.submitted}>
                    <input id="searchinput" type="text" name="input" placeholder="Search for a GIF..."/>
                    <button id="search" type="submit"><img src="../images/search.png" id="searchicon" alt="search"/></button>
                </form>
            )
        }
    });



    var Cards = React.createClass({
        render:function(){
            return(
                <div className="cards">
                    {this.props.gif.map(function(gif, index) {
                        return (
                            <Card gif={gif} index={index}/>
                        )
                    })}
                </div>
            )
        }
    })



    var Card = React.createClass({
        render:function(){
            console.log(this.props.gif);
            return(
                        <div key={this.props.gif.index} className="card">
                            <img className="gifs" src={this.props.gif.images.original.url} alt={this.props.gif.id}/>
                        </div>
                )
        }
    });

    ReactDOM.render(<Search/>,document.getElementById("root"));