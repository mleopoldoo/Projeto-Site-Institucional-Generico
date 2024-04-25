//Modal Header
function handleModalHeader(){
    const buttonRegister = document.querySelector(".header__btn");
    const modalHeader = document.querySelector("#modalControllerHeader");

    buttonRegister.addEventListener('click', function(){
        modalHeader.showModal();
        closeModalHeader();
    });
}

function closeModalHeader(){
    const buttonClose = document.querySelector("#btnRegisterHeader");
    const modalHeader = document.querySelector("#modalControllerHeader");

    buttonClose.addEventListener('click', function(){
        modalHeader.close();
    });
}
handleModalHeader();

//Modal FAQ
function handleModalFaq(){
    const buttonRegister = document.querySelector(".frequent__btn");
    const modalFaq = document.querySelector("#modalControllerFaq");

    buttonRegister.addEventListener('click', function(){
        modalFaq.showModal();
        closeModalFaq();
    });
}

function closeModalFaq(){
    const buttonClose = document.querySelector("#btnRegisterFaq");
    const modalFaq = document.querySelector("#modalControllerFaq");

    buttonClose.addEventListener('click', function(){
        modalFaq.close();
    });
}
handleModalFaq();