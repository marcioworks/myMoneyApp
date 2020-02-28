import React,{Component} from 'react'
import ContentHeader from '../commons/template/contetHeader'
import Content from '../commons/template/content'


class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='version 1.0'/>
                    <Content>
                        Dashboard
                    </Content>
               
            </div>
        )
    }
}
export default Dashboard
   