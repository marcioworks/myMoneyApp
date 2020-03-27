import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Tabs from '../commons/tabs/tabs'
import TabsHeader from '../commons/tabs/tabsHeader'
import TabsContent from '../commons/tabs/tabsContent'
import TabHeader from '../commons/tabs/tabHeader'
import TabContent from '../commons/tabs/tabContent'
import { init,create, update,remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'


class BillingCycle extends Component {
    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Listar' icon='bars' target='tabList' />
                            <TabHeader label=' Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label=' Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label=' Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitClass='primary'
                                submitLabel='Incluir'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitClass='info' 
                                submitLabel='Alterar'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                submitClass='danger' submitLabel='Excluir'/>
                                </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }


}
const mapDispatchToProps = dispatch => bindActionCreators({init, create, update,remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)