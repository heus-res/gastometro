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
    </div>
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
searchDebits()
})

backDate.addEventListener('click',()=>{
 value--
 if(value < 0){
    value = 11;
    year--
 }
 updateDisplays()
 searchDebits()   
})

//SEARCH DEBITS
searchDebits()
}
App()

async function searchDebits(){
let totalValor = document.getElementById('total-valor')
let saldoValor = document.getElementById('saldo-valor')
    debitContainer.innerHTML = ''
    totalValor.innerHTML = 'R$ ' + '0,00'
    saldoValor.innerHTML = 'R$ ' + '0,00'

    const currentDate = year + '-' + (value + 1)
try{
const response = await fetch('http://heusapps.kinghost.net:21043/search-debits',{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({data_debito: currentDate})
})
const data = await response.json()
console.log(data.searchDebit[0].valor)

if(data.searchDebit.length > 0){
for(let i=0; i < data.searchDebit.length; i++){
    let dateArray = data.searchDebit[i].data_debito.split('-')
    debitContainer.insertAdjacentHTML('afterbegin', `
    <div class="debit-content" data-id="${data.searchDebit[i]._id}" onclick="searchToUpdateDebit(event)">
        <div class="debit-info">
        <span class="debit-name">${data.searchDebit[i].descricao}</span>
        <span class="debit-value">R$ ${parseFloat(data.searchDebit[i].valor).toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
        </div>
        <span class="debit-maturity">${dateArray[2]}/${dateArray[1]}/${dateArray[0]}</span>     
    </div>
`
    )
}

let debitValor = data.searchDebit.reduce((acc, item)=> acc + parseFloat(item.valor || 0),0).toLocaleString('pt-BR',{
    minimumFractionDigits: 2, maximumFractionDigits: 2})

totalValor.innerHTML = `
R$ ${debitValor}
`

saldoValor.innerHTML = `
R$ ${debitValor}
`

}
}catch(err){}
}

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
    <input id="iptdata-debit" class="hginput" type="date" style="border: solid 1px #000;background: none; height: 40px; font-size: 16px;">
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
    let repeat = false
    let fixo = false
    let parcelado = false


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
            repeat = true
            fixo = true
        
        } else {
            let Paymode = document.getElementById('Paymode')  
            Paymode.remove()
            sliderBall.style.marginLeft = '0px';
            checkRepetir.style.background = '#000';
            repeat = false
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
                        fixo = false
                        parcelado = true
                }else{
                    document.getElementById('ipt-parcelas').remove()
                    parcelado = false
                    fixo = true
                }
            });
        }}
        btnSaveDebit.addEventListener('click',()=>{
            
        async function saveDebit(){
            const depitDescription = document.getElementById('iptdesc-debit').value
            const valueDebit = document.getElementById('iptvalue-debit').value.replace(/[^0-9,]/g,'').replace(',','.')
            const dateDebit = document.getElementById('iptdata-debit').value
            const repeatValue = repeat
            const isFixo = fixo
            const isParcelado = parcelado
            const qtdeParcelasValue = document.getElementById('ipt-parcelas') ? document.getElementById('ipt-parcelas').value : "0" 
            let pago = false
            try{
            const response = await fetch('http://heusapps.kinghost.net:21043/save-debit',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({descricao: depitDescription, valor: valueDebit, data_debito: dateDebit, repeat: repeatValue, fixo: isFixo, parcelado: isParcelado, qtde_parcela: qtdeParcelasValue, pago: pago})
            })
            data = await response.json()
            console.log(data.msg)
        }catch(err){} 
        App()   
    }
        saveDebit()
        })
    }

function searchToUpdateDebit(event){
let ID = event.currentTarget.dataset.id
let thumbsUp = `<svg width="60px" height="60px" viewBox="0 -19.04 329.523 329.523" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M320.059 159.554c16.697-16.622 11.538-50.242-17.372-50.242l-76.067.055c2.876-16.12 7.061-42.817 6.891-45.342-1.59-23.875-16.832-52.937-17.475-54.132-2.77-5.166-16.793-12.182-30.9-9.166-18.252 3.903-20.115 15.529-20.038 18.736 0 0 .8 31.829.876 40.309-8.712 19.155-38.781 69.482-47.911 73.36a13.894 13.894 0 0 0-7.217-2.025H14.725C6.592 131.107 0 137.698 0 145.83l.012 132.824c.569 7.166 6.648 12.781 13.842 12.781h86.296c7.652 0 13.88-6.226 13.88-13.877v-4.407s3.21-.22 4.658.698c5.55 3.525 12.417 7.961 21.358 7.961h128.832c48.137 0 42.972-42.74 38.583-48.586 8.132-8.867 13.166-24.48 6.296-36.832 5.319-5.582 14.613-20.941 6.302-36.838z" fill="#37393d"></path><path d="M300.508 123.249H209.68c3.506-13.917 9.975-58.275 9.975-58.275-1.467-21.533-15.869-48.553-15.869-48.553-17.117-7.204-24.811 2.678-24.811 2.678s.889 34.219.889 42.125c0 7.907-39.113 71.123-48.669 79.266-5.064 4.317-14.156 10.25-21.56 14.86v102.023l5.932.006c6.829 0 15.219 10.551 24.48 10.551l131.024-.057c26.333 0 30.526-29.662 13.148-32.51l.775-3.275c16.662-1.793 26.797-28.141 5.527-33.546l.781-3.286c15.902-1.674 27.714-27.246 5.521-33.552l.781-3.281c20.892-3.297 25.15-35.17 2.904-35.174z" fill="#ffffff"></path><path d="M296.824 161.704l.781-3.281c20.891-3.296 25.149-35.169 2.903-35.174h-43.877c22.251.004 17.992 31.878-2.899 35.174l-.337 1.948c22.194 6.305 9.934 33.211-5.968 34.885l-.337 1.954c21.273 5.404 10.689 33.085-5.971 34.878l-.329 1.941c17.381 2.847 12.737 33.844-13.597 33.844l-87.411.036c.089.003.178.021.264.021l131.024-.057c26.333 0 30.526-29.662 13.148-32.51l.775-3.275c16.662-1.793 26.797-28.141 5.527-33.546l.781-3.286c15.905-1.674 27.716-27.247 5.523-33.552z" fill="#eaebf5"></path><path fill="#42ff4f" d="M13.854 144.989h86.497v132.563H13.854z"></path><path d="M13.854 144.989v132.563h86.497V144.989H13.854zM94.78 271.99H19.421V162.125L94.78 162v109.99z" fill="#00ff1e"></path><path d="M122.701 260.007V146.846c-.192.133-12.115 7.913-13.066 8.503v102.023l5.932.006c2.221 0 4.604 1.125 7.134 2.629z" opacity=".5" fill="#d0d1d0"></path><path d="M191.609 13.794h-.006c.062.248 10.69 39.638 10.69 45.301 0 5.667-32.253 53.75-27.936 59.836 5.882 8.286 35.322 4.317 35.322 4.317 3.506-13.917 9.975-58.275 9.975-58.275-1.467-21.533-15.869-48.553-15.869-48.553-.573-.242-5.495-2.63-12.176-2.626z" fill="#eaebf5"></path></g></svg>` 
let thumbsDown = `<svg width="64px" height="64px" viewBox="0 -19.04 329.523 329.523" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M320.059 159.554c16.697-16.622 11.538-50.242-17.372-50.242l-76.067.055c2.876-16.12 7.061-42.817 6.891-45.342-1.59-23.875-16.832-52.937-17.475-54.132-2.77-5.166-16.793-12.182-30.9-9.166-18.252 3.903-20.115 15.529-20.038 18.736 0 0 .8 31.829.876 40.309-8.712 19.155-38.781 69.482-47.911 73.36a13.894 13.894 0 0 0-7.217-2.025H14.725C6.592 131.107 0 137.698 0 145.83l.012 132.824c.569 7.166 6.648 12.781 13.842 12.781h86.296c7.652 0 13.88-6.226 13.88-13.877v-4.407s3.21-.22 4.658.698c5.55 3.525 12.417 7.961 21.358 7.961h128.832c48.137 0 42.972-42.74 38.583-48.586 8.132-8.867 13.166-24.48 6.296-36.832 5.319-5.582 14.613-20.941 6.302-36.838z" fill="#37393d"></path><path d="M300.508 123.249H209.68c3.506-13.917 9.975-58.275 9.975-58.275-1.467-21.533-15.869-48.553-15.869-48.553-17.117-7.204-24.811 2.678-24.811 2.678s.889 34.219.889 42.125c0 7.907-39.113 71.123-48.669 79.266-5.064 4.317-14.156 10.25-21.56 14.86v102.023l5.932.006c6.829 0 15.219 10.551 24.48 10.551l131.024-.057c26.333 0 30.526-29.662 13.148-32.51l.775-3.275c16.662-1.793 26.797-28.141 5.527-33.546l.781-3.286c15.902-1.674 27.714-27.246 5.521-33.552l.781-3.281c20.892-3.297 25.15-35.17 2.904-35.174z" fill="#ffffff"></path><path d="M296.824 161.704l.781-3.281c20.891-3.296 25.149-35.169 2.903-35.174h-43.877c22.251.004 17.992 31.878-2.899 35.174l-.337 1.948c22.194 6.305 9.934 33.211-5.968 34.885l-.337 1.954c21.273 5.404 10.689 33.085-5.971 34.878l-.329 1.941c17.381 2.847 12.737 33.844-13.597 33.844l-87.411.036c.089.003.178.021.264.021l131.024-.057c26.333 0 30.526-29.662 13.148-32.51l.775-3.275c16.662-1.793 26.797-28.141 5.527-33.546l.781-3.286c15.905-1.674 27.716-27.247 5.523-33.552z" fill="#eaebf5"></path><path fill="#eb0000" d="M13.854 144.989h86.497v132.563H13.854z"></path><path d="M13.854 144.989v132.563h86.497V144.989H13.854zM94.78 271.99H19.421V162.125L94.78 162v109.99z" fill="#ff401f"></path><path d="M122.701 260.007V146.846c-.192.133-12.115 7.913-13.066 8.503v102.023l5.932.006c2.221 0 4.604 1.125 7.134 2.629z" opacity=".5" fill="#d0d1d0"></path><path d="M191.609 13.794h-.006c.062.248 10.69 39.638 10.69 45.301 0 5.667-32.253 53.75-27.936 59.836 5.882 8.286 35.322 4.317 35.322 4.317 3.506-13.917 9.975-58.275 9.975-58.275-1.467-21.533-15.869-48.553-15.869-48.553-.573-.242-5.495-2.63-12.176-2.626z" fill="#eaebf5"></path></g></svg>`
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
    <div id="updatedebit-container"><div style="margin-top: 20px;text-align: center;">
    <span>Santander Passagens</span>
    </div>
    <div style="margin-top: 10px;display: flex;border-top: solid 1px;border-bottom: solid 1px;padding: 5px;align-items: center; height: 60px;">
    <div style="width: 100%;text-align: center;display: flex;height: 100%;flex-direction: column;align-items: center;justify-content: space-evenly;">
        <span style="border-bottom: solid 1px; width: inherit;">R$ 241,84</span>
        <span style="width: inherit;m;">04/10/2024</span>
    </div>
    <div style="width: 100%;align-content: center;text-align: center;border-left: solid 1px;">
    ${thumbsDown}
    </div>
</div>
    </div>
    </div>
    </div>
    </div>
`
}

