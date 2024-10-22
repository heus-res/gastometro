/*
    <div class="debit-content">
        <div class="debit-info">
        <span class="debit-name"></span>
        <span class="debit-value"></span>
        </div>
        <span class="debit-maturity"></span>     
    </div>
*/
const containerApp = document.getElementById('container-app')

let debitContainer
let debitName
let debitValue
let debitMaturity
let btnAdd

function App(){
  containerApp.innerHTML = `
  <div id="header-container">
    <div class="faixa">
        <span>GASTOMETRO</span>
    </div>
    <div class="nav-date">
        <div id="back-date">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.7672 7.5431C11.0672 7.25744 11.0788 6.78271 10.7931 6.48276C10.5074 6.18281 10.0327 6.17123 9.73276 6.4569L10.7672 7.5431ZM4.48276 11.4569C4.18281 11.7426 4.17123 12.2173 4.4569 12.5172C4.74256 12.8172 5.21729 12.8288 5.51724 12.5431L4.48276 11.4569ZM5.51724 11.4569C5.21729 11.1712 4.74256 11.1828 4.4569 11.4828C4.17123 11.7827 4.18281 12.2574 4.48276 12.5431L5.51724 11.4569ZM9.73276 17.5431C10.0327 17.8288 10.5074 17.8172 10.7931 17.5172C11.0788 17.2173 11.0672 16.7426 10.7672 16.4569L9.73276 17.5431ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM9.73276 6.4569L4.48276 11.4569L5.51724 12.5431L10.7672 7.5431L9.73276 6.4569ZM4.48276 12.5431L9.73276 17.5431L10.7672 16.4569L5.51724 11.4569L4.48276 12.5431ZM5 12.75H19V11.25H5V12.75Z" fill="#ffffff"></path> </g></svg>
        </div>
        <div id="mounth-name"><span>JANEIRO</span>/<span>2024</span></div>
        <div id="next-date">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#ffffff"></path> </g></svg>        </div>
    </div>
    <div id="debit-container">
    <div class="footer">
        <div id="btn-add" onclick="AddDebit()">
            <svg width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -1089.000000)" fill="#000000"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
        </div>
        <div class="total-container">
        <span id="total-text">Total</span>
        <span id="total-valor">R$ 4.000,00</span>
        </div>
        <div class="saldo-container">
        <span id="saldo-text">Saldo a pagar</span>
        <span id="saldo-valor">R$ 4.000,00</span>
        </div>
    </div>
 </div>
  `
debitContainer = document.getElementById('debit-container')
debitName = document.querySelectorAll('.debit-name')
debitValue = document.querySelectorAll('.debit-value')
debitMaturity = document.querySelectorAll('.debity-maturity')
btnAdd = document.getElementById('btn-add') 
}
App()

function AddDebit(){
containerApp.innerHTML = `
  <div id="header-container">
    <div class="faixa">
        <span>GASTOMETRO</span>
    </div>
    <div style="height: 30px">
    <div style="height: 30px;">
    <div id="back-button" onclick="App()" style="width: 60px;display: flex;align-items: center;">
<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path></g></svg>
<span style="color: #fff;font-size: 16px;">Voltar</span>
</div>
    </div>
    </div>
    <div id="newdebit-container">
    <div>
    <form class="newdebit-form">
    <input id="iptdesc-debit" class="hginput" placeholder="Descrição" style="height: 40px; font-size: 16px"">
    <input id="iptvalue-debit" class="hginput" inputmode="numeric" placeholder="Valor" style="height: 40px; font-size: 16px"">
    <input id="iptdata-debit" class="hginput" type="date" style="background: none; height: 40px; border: solid 1px #000; font-size: 16px">
    <div>
    <label>
    Repetir
    <input type="checkbox" name="example" value="1">
    </label>
    </div>
    <div>
    <label>
    <input type="radio" name="fixo" value="2" fixo="" <="" label="">
    </label>
    <label>
    <input type="radio" name="parcelado" value="3">
    Parcelado
    </label>
    <label>
    <input id="ipt-parcelas" type="text" style="width: auto" placeholder="N de Parcelas">
    </label>
    </div>
    </form>
    </div>
 </div>
`
}
