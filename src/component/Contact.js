import React, { PureComponent } from "react";
import { Consumer } from "../Context";
export class Contact extends PureComponent {
    state = {
        showContantInfo: false,
    };


    haddlenDelete = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT' })
    }



    render() {
        const { id, name, email, phone } = this.props.Contact;
        const { showContantInfo } = this.state;


        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body  mb-3">
                          <h4>
                                {name}
                                <i
                                    onClick={() =>
                                        this.setState({ showContantInfo: !this.state.showContantInfo })
                                    }
                                    className="fas fa-sort-down" style={{ cursor: 'pointer' }}
                                ></i>


                                <i class="fas fa-times" style={{ float: "right", color: "red", cursor: 'pointer' }} onClick={this.haddlenDelete.bind(this, id, dispatch)}  ></i>

                            </h4>
                            {showContantInfo ? (
                                <ul className="list-group ">
                                    <li className="list-group-item">Email:{email}</li>

                                    <li className="list-group-item">phone:{phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>

        );
    }
}

export default Contact;
