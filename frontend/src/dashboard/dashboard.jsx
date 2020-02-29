import React, { Component } from 'react'
import ContentHeader from '../commons/template/contetHeader'
import Content from '../commons/template/content'
import ValueBox from '../commons/widget/valueBox'
import Row from '../commons/layout/row'



class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value='R$ 10' text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value='R$ 10' text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value='R$ 0' text='Saldo' />
                    </Row>
                </Content>

            </div>
        )
    }
}
export default Dashboard
