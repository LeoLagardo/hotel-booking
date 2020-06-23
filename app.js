document.getElementById('loginformOpen').addEventListener('click',
    function () {
        document.querySelector('.login-modal').style.display = "flex";
    });

document.getElementById('registerformOpen').addEventListener('click',
    function () {
        document.querySelector('.register-modal').style.display = "flex";
    });

document.querySelector('.close-login').addEventListener('click',
    function () {
        document.querySelector('.login-modal').style.display = "none";
    });

document.querySelector('.close-register').addEventListener('click',
    function () {
        document.querySelector('.register-modal').style.display = "none";
    });

    
document.getElementById('hotel-login-form-link').addEventListener('click',
function () {
    let elementRemove = document.getElementById("customer-login-form-link");
    let elementAdd = document.getElementById("hotel-login-form-link");
    elementRemove.classList.remove('active');
    elementAdd.classList.add('active');
}); 

document.getElementById('customer-login-form-link').addEventListener('click',
function () {
    let elementRemove = document.getElementById("hotel-login-form-link");
    let elementAdd = document.getElementById("customer-login-form-link");
    elementRemove.classList.remove('active');
    elementAdd.classList.add('active');
});

document.getElementById('hotel-register-form-link').addEventListener('click',
function () {
    let elementRemove = document.getElementById("customer-register-form-link");
    let elementAdd = document.getElementById("hotel-register-form-link");
    elementRemove.classList.remove('active');
    elementAdd.classList.add('active');
}); 

document.getElementById('customer-register-form-link').addEventListener('click',
function () {
    let elementRemove = document.getElementById("hotel-register-form-link");
    let elementAdd = document.getElementById("customer-register-form-link");
    elementRemove.classList.remove('active');
    elementAdd.classList.add('active');
}); 