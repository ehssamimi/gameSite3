import React, {Component} from 'react';
import { Row, Card, CardTitle, Form, Label, Input, Button , Collapse, CardBody,  } from "reactstrap";


class SecretPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: "",
            password: "",
            collapse:false,
            wrong:false,
            empty:false
        };
    }
    handelChange(event){
        let {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    onUserLogin() {
        if (this.state.password !== "") {
            // this.props.loginUser(this.state, this.props.history);
            const {password} = this.state;
            if (password === 'handmade_Publisher_SeCtion') {
                this.setState({
                    collapse: true
                })
            } else {
                this.setState({
                    empty: false,
                    wrong:true,
                    collapse:false,
                })
            }
        }else {
            this.setState({
                empty: true,
                wrong:false,
                collapse:false,
            })
        }
    }
    render() {
        let{collapse,empty,wrong}=this.state;
        return (
            <div id="SecretPage" className='col-12 d-flex justify-content-center align-items-center'>
                <div className='col-6'>
                    {
                        collapse?""
                            :
                        <Form className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <Label className="form-group  mb-3 d-flex flex-column align-items-center">
                                <span className='mb-2'> password</span>
                                <Input className='w-100' type="password"  name='password' onChange={this.handelChange.bind(this)} value={this.state.password}/>

                                {
                                    wrong ? <span className='wrongTxt'>password is wrong</span> : ''
                                }
                                {
                                    empty ? <span className='EmptyTxt'>password is Empty</span> : ''
                                }

                            </Label>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button
                                    color="primary"
                                    className="btn-shadow"
                                    size="lg"
                                    onClick={() => this.onUserLogin()}
                                >
                                    enter
                                 </Button>
                            </div>
                        </Form>

                    }
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <div className='w-100 d-flex flex-column justify-content-center align-items-center ' >
                                    <a href="http://thehandmade.io/Publishers_Section/Ticket_To_Heaven_Pitch_Document_and_Demo.rar" className='alink2 vh-5'>Pitch Document And Demos (Recommended)</a>
                                    <a href="http://thehandmade.io/Publishers_Section/Builds/Android/TicketToHeaven.apk" className='alink2 vh-5' >Android Version (Game Build)</a>
                                    <a href="http://thehandmade.io/Publishers_Section/Builds/PC/TicketToHeaven.rar" className='alink2 vh-5'>PC Version (Game Build)</a>
                                    <a href="http://thehandmade.io/Publishers_Section/Presentations/TTHGameCataloguePP.ppsx" className='alink2 vh-5'>Full Presentation (Document)</a>
                                    <a href="http://thehandmade.io/Publishers_Section/Presentations/TTHGameShortBrief.pdf" className='alink2 vh-5' >Quick Overview (Document)</a>
                                    <div className='h-5 d-flex justify-content-start align-items-start w-100'>
                                       <span className='h-100 FontSize05vw'>Last Updated: 2019/10/11</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>


                </div>
            </div>
        );
    }
}

export default SecretPage;