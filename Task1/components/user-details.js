import React from "react";

export class UserDetail extends React.Component {
    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div class="well profile">
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-8">
                                    <h1>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h1>
                                    <h2>Nicole Pearson</h2>
                                    <p><strong>About: </strong> Web Designer / UI. </p>
                                    <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
                                    <p><strong>Skills: </strong>
                                        <span class="tags">html5</span>
                                        <span class="tags">css3</span>
                                        <span class="tags">jquery</span>
                                        <span class="tags">bootstrap3</span>
                                    </p>
                                </div>
                                <div class="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg" alt="" class="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}