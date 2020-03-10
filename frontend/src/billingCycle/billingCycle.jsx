import React, { Component } from 'react'
import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Tabs from '../commons/tabs/tabs'
import TabsHeader from '../commons/tabs/tabsHeader'
import TabsContent from '../commons/tabs/tabsContent'
import TabHeader from '../commons/tabs/tabHeader'
import TabContent from '../commons/tabs/tabContent'



class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Listar' icon='bars' target='tabList'/>
                            <TabHeader label=' Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label=' Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label=' Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>Listar</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Remover</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }


}

export default BillingCycle