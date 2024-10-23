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
let value = new Date().getMonth()
let mounths = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
let year = new Date().getFullYear()

function App(){
  containerApp.innerHTML = `
  <div id="header-container">
    <div class="faixa">
        <span>GASTOMETRO</span>
    </div>
    <div class="nav-date">
        <div id="back-date">
<svg height="22px" width="22px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ef1e92;" d="M326.439,21.24L136.494,234.106c-11.131,12.474-11.131,31.315,0,43.789l189.945,212.866 c20.112,22.539,57.421,8.313,57.421-21.895V43.134C383.861,12.927,346.551-1.299,326.439,21.24z"></path> <g> <path style="fill:#ffffff;" d="M350.833,512c-11.992,0-23.618-5.049-32.004-14.448L128.885,284.687 c-14.593-16.353-14.593-41.019-0.001-57.372L318.829,14.449l0,0c12.005-13.455,30.65-17.998,47.497-11.572 c16.849,6.425,27.734,22.227,27.734,40.258v425.732c0,18.032-10.887,33.834-27.734,40.259C361.248,511.062,356.005,512,350.833,512 z M326.439,21.24l7.61,6.791L144.104,240.896c-7.683,8.61-7.683,21.597,0.001,30.207l189.944,212.865 c7.672,8.601,17.951,8.782,25.009,6.094c7.06-2.693,14.603-9.674,14.603-21.197V43.135c0-11.523-7.544-18.505-14.603-21.196 c-7.058-2.692-17.336-2.504-25.009,6.093L326.439,21.24z"></path> <path style="fill:#ffffff;" d="M277.259,395.739c-2.806,0-5.6-1.151-7.615-3.409l-4.67-5.234c-3.75-4.203-3.382-10.651,0.82-14.402 c4.205-3.75,10.653-3.381,14.402,0.82l4.669,5.234c3.75,4.203,3.382,10.651-0.82,14.402 C282.101,394.885,279.675,395.739,277.259,395.739z"></path> <path style="fill:#ffffff;" d="M249.125,364.21c-2.806,0-5.599-1.151-7.614-3.409l-85.937-96.307 c-3.752-4.203-3.383-10.651,0.819-14.401c4.204-3.752,10.651-3.383,14.401,0.819l85.937,96.307 c3.751,4.203,3.383,10.651-0.819,14.401C253.967,363.356,251.54,364.21,249.125,364.21z"></path> </g> </g></svg>        </div>
        <div id="mounth-name"><span id="display-month"></span>/<span id="display-year"></span></div>
        <div id="next-date">
<svg height="22px" width="22px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ef1e92;" d="M185.561,490.761l189.945-212.866c11.131-12.474,11.131-31.315,0-43.789L185.561,21.241 c-20.112-22.539-57.421-8.313-57.421,21.895v425.731C128.14,499.073,165.449,513.3,185.561,490.761z"></path> <g> <path style="fill:#ef1e92248A9C;" d="M161.167,512c-5.174,0-10.414-0.94-15.494-2.876c-16.848-6.425-27.734-22.226-27.734-40.258V43.135 c0-18.031,10.886-33.834,27.734-40.258c16.849-6.425,35.491-1.883,47.497,11.573l189.947,212.865 c14.592,16.353,14.592,41.019,0,57.372L193.171,497.552l0,0C184.785,506.951,173.158,512,161.167,512z M161.285,20.407 c-3.009,0-5.872,0.59-8.341,1.531c-7.059,2.693-14.603,9.674-14.603,21.196v425.732c0,11.523,7.544,18.505,14.603,21.196 c7.059,2.691,17.336,2.505,25.008-6.093l189.945-212.865c7.684-8.61,7.684-21.597,0-30.207L177.951,28.032 C172.964,22.442,166.874,20.407,161.285,20.407z"></path> <path style="fill:#ef1e92248A9C;" d="M239.419,141.895c-2.805,0-5.599-1.151-7.613-3.409l-4.669-5.233 c-3.75-4.202-3.384-10.65,0.819-14.401c4.202-3.752,10.65-3.384,14.401,0.819l4.669,5.233c3.75,4.202,3.384,10.65-0.819,14.401 C244.261,141.041,241.835,141.895,239.419,141.895z"></path> <path style="fill:#ef1e92248A9C;" d="M348.82,264.498c-2.806,0-5.599-1.151-7.614-3.409l-85.937-96.307 c-3.75-4.203-3.383-10.651,0.82-14.401c4.202-3.751,10.651-3.382,14.401,0.819l85.937,96.307c3.75,4.203,3.383,10.651-0.819,14.401 C353.663,263.645,351.237,264.498,348.82,264.498z"></path> </g> </g></svg>        </div>
    </div>
    <div id="debit-container">
    <div class="footer">
        <div id="btn-add" onclick="AddDebit()">
            <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#f787e1;" d="M256,512C114.839,512,0,397.161,0,256S114.839,0,256,0s256,114.839,256,256S397.161,512,256,512z"></path> <path style="fill:#ff6bfa;" d="M512,256C512,114.839,397.161,0,256,0v512C397.161,512,512,397.161,512,256z"></path> <path style="fill:#FFFFFF;" d="M389.594,239.301H272.699V122.406c0-9.225-7.475-16.699-16.699-16.699 c-9.225,0-16.699,7.475-16.699,16.699v116.895H122.406c-9.225,0-16.699,7.475-16.699,16.699c0,9.225,7.475,16.699,16.699,16.699 h116.895v116.895c0,9.225,7.475,16.699,16.699,16.699c9.225,0,16.699-7.475,16.699-16.699V272.699h116.895 c9.225,0,16.699-7.475,16.699-16.699C406.294,246.775,398.819,239.301,389.594,239.301z"></path> <path style="fill:#ffffff;" d="M389.594,239.301H272.699V122.406c0-9.225-7.475-16.699-16.699-16.699v133.594v33.399v133.594 c9.225,0,16.699-7.475,16.699-16.699V272.699h116.895c9.225,0,16.699-7.475,16.699-16.699 C406.294,246.775,398.819,239.301,389.594,239.301z"></path> </g></svg>        </div>
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
let nextDate = document.getElementById('next-date')
let backDate = document.getElementById('back-date')
debitContainer = document.getElementById('debit-container')
debitName = document.querySelectorAll('.debit-name')
debitValue = document.querySelectorAll('.debit-value')
debitMaturity = document.querySelectorAll('.debity-maturity')
btnAdd = document.getElementById('btn-add') 

function updateDisplays(){
    let displayMonth = document.getElementById('display-month')
    let displayYear = document.getElementById('display-year')

    displayMonth.innerText = getMonth()
    displayYear.innerText = year
}

updateDisplays()

function getMonth(){
    return mounths[value]
}

nextDate.addEventListener('click',()=>{
value++
if(value > 11){
    value = 0
    year++
}
updateDisplays()
})

backDate.addEventListener('click',()=>{
 value--
 if(value < 0){
    value = 11;
    year--
 }
 updateDisplays()   
})

}
App()

function AddDebit() {
    containerApp.innerHTML = `
    <div id="header-container">
    <div class="faixa">
    <span>GASTOMETRO</span>
    </div>
    <div style="height: 30px">
    <div id="back-button" onclick="App()" style="width: 60px; display: flex; align-items: center;">
    <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path>
    </svg>
    <span style="color: #fff; font-size: 16px;">Voltar</span>
    </div>
    </div>
    <div id="newdebit-container">
    <div id="teste-form">
    <form class="newdebit-form">
    <input id="iptdesc-debit" class="hginput" placeholder="Descrição" style="height: 40px; font-size: 16px;" autocomplete="off">
    <input id="iptvalue-debit" class="hginput" inputmode="numeric" placeholder="Valor" style="height: 40px; font-size: 16px;" autocomplete="off">
    <input id="iptdata-debit" class="hginput" type="date" style="boder: solid 1px #000;background: none; height: 40px; font-size: 16px;">
    <div>
    <label style="display: flex; font-size: 20px;">
    Repetir
    <div class="checkbox-slider">
    <div class="slider-ball"></div>
    </div>
    </label>
    </div>
    </form>
    </div>
    <div style="padding: 5px">
    <button id="btnsave-debit">Salvar</button>
    </div>
    </div>
    </div>
    `;

    let checkRepetir = document.querySelector('.checkbox-slider');
    let sliderBall = document.querySelector('.slider-ball');
    let debitType 
    let debitForm = document.querySelector('.newdebit-form')
    let btnSaveDebit = document.getElementById('btnsave-debit')
    let iptValueDebit = document.getElementById('iptvalue-debit')
    let iptDataDebit = document.getElementById('iptdata-debit')
    iptDataDebit.value = `${year}-${(parseInt(value)+1).toString().padStart(2, '0')}-${new Date().getDate()}`

    iptValueDebit.addEventListener('input', () => {
        let moeda = iptValueDebit.value.replace(/\D/g, '');
    
        moeda = (moeda / 100).toFixed(2);
    
        if (moeda > 0) {
            iptValueDebit.value = 'R$ ' + moeda.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        } else {
            iptValueDebit.value = '';
        }
});
    

    checkRepetir.addEventListener('click', () => {
        if (sliderBall.style.marginLeft === '0px' || sliderBall.style.marginLeft === '') {
            sliderBall.style.marginLeft = '30px'; 
            checkRepetir.style.background = 'var(--background-color)';
            debitForm.insertAdjacentHTML('beforeend',`
            <div id="Paymode" style="display: flex; flex-direction: column">
            <label style="font-size: 20px">
            <input type="radio" name="option" value="2" checked>
            Fixo
            </label>
            <label style="font-size: 20px">
            <input type="radio" name="option" value="3">
            Parcelado
            </label>
            </div>
            `)
            addDebitType()
        
        } else {
            let Paymode = document.getElementById('Paymode')  
            Paymode.remove()
            sliderBall.style.marginLeft = '0px';
            checkRepetir.style.background = '#000';
        }
    });

    // Adicionando eventos aos rádios
    function addDebitType(){
        debitType = document.getElementsByName('option');
        for (let i = 0; i < debitType.length; i++) {
            debitType[i].addEventListener('change', () => {
                if(debitType[i].value === '3'){
                    Paymode.insertAdjacentHTML('beforeend',`
                    <input id="ipt-parcelas" type="text" inputmode="numeric" style="height:30px; width: auto;" placeholder="N de Parcelas" autocomplete="off">                            
                        `)
                }else{
                    document.getElementById('ipt-parcelas').remove()
                }
            });
        }}
        btnSaveDebit.addEventListener('click',()=>{
            console.log(iptValueDebit.value.replace(/[^0-9,.]/g,''))
        })
    }
