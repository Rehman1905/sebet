const ad=document.querySelector('#ad')
const price=document.querySelector('#price')
const input1=document.querySelector('#input1')
const input2=document.querySelector('#input2')
const showBtn=document.querySelector('#show')
const ustDiv=document.querySelector('.ustDiv')
const arr=[]

document.querySelector("#add").addEventListener('click',function(e){
    e.preventDefault()
    if(input1.value=='' || input2.value==''){
        alert('Məhsulun adını və qiymətini eyni anda daxil edin')
    }else{
        let a={
            ad:input1.value,
            qiymet:input2.value,
            sebet:false,
            say:1
        }
        arr.push(a)
        show(arr)
}
})
let almaAgaci=true
function show(arr){
    ustDiv.innerHTML=''
    if(arr.length==0){
        showBtn.style.display='block'
    }
    for(let i in arr){
        
        const div1=document.createElement('div')
        const div2=document.createElement('div')
        const pAd=document.createElement('p')
        const divAd=document.createElement('div')
        const pPrice=document.createElement('p')
        const divPrice=document.createElement('div')
        const btn=document.createElement('button')
        const container=document.createElement('div')
        const artir=document.createElement('button')
        const azalt=document.createElement('button')
        const sil=document.createElement('button')
        const duyme=document.createElement('div')
        const say=document.createElement('p')
        const container2=document.createElement('div')
        container2.id='container2'
        say.id='say'
        say.innerHTML=arr[i].say
        artir.innerHTML='^'
        azalt.innerHTML='v'
        sil.innerHTML='X'
        artir.id='artir'
        azalt.id='azalt'
        sil.id='sil'
        ustDiv.id='ustDiv'
        divAd.innerHTML=arr[i].ad
        container.id='container'
        divPrice.innerHTML=`${arr[i].qiymet}AZE`
        pAd.textContent='Məhsulun adı:'
        pPrice.textContent='Məhsulun qiyməti:'
        div1.classList.add('div1')
        div2.classList.add('div2')
        divAd.id='ad'
        divPrice.id='price'
        btn.id='btn'
        duyme.id='duyme'
        if(arr[i].sebet){
            btn.textContent='səbətə əlavə olundu'
        }else{
            btn.textContent="Səbətə əlavə et"
        }
        duyme.append(artir,azalt)
        div1.append(pAd,divAd)
        div2.append(pPrice,divPrice)
        container2.append(say,duyme,sil)
        container.append(div1,div2,btn)
        ustDiv.append(container,container2)
        input1.value=''
        input2.value=''
        if(!almaAgaci){
            divPrice.innerHTML=`${(arr[i].qiymet)*arr[i].say} AZE`
            container2.style.display='flex'
            ustDiv.style.gap='20px'
            btn.style.display='none'
            showBtn.style.display='block'
        }else{
            btn.style.display='block'
            container2.style.display='none'
            ustDiv.style.gap='60px'
        }
        btn.addEventListener('click',function(e){
        e.preventDefault()
        sebeteElaveEt(i)
    })
    artir.addEventListener('click',function(e){
        e.preventDefault()
        arr[i].say++
        divPrice.innerHTML=`${(arr[i].qiymet)*arr[i].say} AZE`
        say.innerHTML=arr[i].say
    })
    azalt.addEventListener('click',function(e){
        e.preventDefault()
        if(arr[i].say>0){
            arr[i].say--
        }
        divPrice.innerHTML=`${(arr[i].qiymet)*arr[i].say} AZE`
        say.innerHTML=arr[i].say
    })
    sil.addEventListener('click',function(e){
        e.preventDefault()
        arr[i].sebet=false
        sebet(arr)
    })
    }
}
function sebeteElaveEt(index){
        arr[index].sebet=true
        show(arr)
}

function sebet(arr){
    const sebetdekiler=arr.filter(arr=>arr.sebet)
    almaAgaci=false
    show(sebetdekiler)
}
document.querySelector('#sebet').addEventListener('click',function(e){
    e.preventDefault()
    sebet(arr)
})
showBtn.addEventListener('click',function(e){
    e.preventDefault()
    showBtn.style.display='none'
    almaAgaci=true
    show(arr)
})