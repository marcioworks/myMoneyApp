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
import { selectTab, showTabs } from '../commons/tabs/tabActions'
import {create} from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'


class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
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
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Remover</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }


}
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs,create }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)