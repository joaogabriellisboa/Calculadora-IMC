const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height / 10000)).toFixed(2)

    const value = document.getElementById('value');

    let descrição = '';

    document.getElementById('infos').classList.remove('sumir');

    if (bmi < 18.5) {
        descrição = 'Você está abaixo do peso ideal!'
        value.innerHTML = bmi.replace('.', ',')         /* TROCAR O . PELA , */
        document.getElementById('descrição').innerHTML = descrição;
        value.classList.add('atenção')
    } else if (bmi < 24.9) {
        let descrição = 'Você está com o Peso Ideal!'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição
        value.classList.add('certo')

    } else if (bmi < 29.9) {
        let descrição = 'Você está com execesso de peso!'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição
        value.classList.add('cuidado')

    } else if (bmi < 34.9) {
        let descrição = 'Você está com obesidade classe I'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição
        value.classList.add('atenção')

    } else if (bmi < 39.9) {
        let descrição = 'Você está com obesidade classe II'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição
        value.classList.add('atenção')
    }else if(bmi <50 ){
        let descrição = 'Você está com obesidade classe III'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição
        value.classList.add('atenção')
    }else{
        let descrição = 'OBESIDADE MORBIDA'
        value.innerHTML = bmi.replace('.', ',')
        document.getElementById('descrição').innerHTML = descrição;
        value.classList.add('atenção')
    }

})


