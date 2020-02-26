import '../commons/template/dependencies'
import React from 'react'
import Header from '../commons/template/header'
import Sidebar from '../commons/template/sidebar'
import Footer from '../commons/template/rodape'

export default props => (
    <div className="wrapper">
       <Header />
       <Sidebar />
       <div className='content-wrapper'>
           <h1>Conteudo</h1>
       </div>
       <Footer />

    </div>
)