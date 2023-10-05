import React from "react";

export default props => [

    <h1 key='h1'>Bom dia {props.nome}, voce já tem {props.idade} anos</h1>,

    <h2 key='h2'>vc é demais {props.nome}</h2>

]



//-----------------usando React.Fragment---------------
/*
export default props =>

    <React.Fragment>

        <h1>Bom dia {props.nome}, voce já tem {props.idade} anos</h1>

        <h2>vc é demais {props.nome}</h2>

    </React.Fragment>
*/
//-----------------usando div-------------------------
/*
export default props =>

    <div>

        <h1>Bom dia {props.nome}, voce já tem {props.idade} anos</h1>

        <h2>vc é demais {props.nome}</h2>

    </div>
*/