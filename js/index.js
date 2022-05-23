// Will Execute This Javascript Code, after the Browser finishes rendering the HTML, CSS
window.onload = function () {

    // HTML ELEMENT VARIABLES ================================ //
    let emailState = false;
    // ^^^ This variable is going to stay as let, because we want to be able to change the value of this variable
    const emailModal = document.getElementsByClassName('email-modal')[0];
    const closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
    const notInterested = document.getElementsByClassName('email-modal__decline-offer')[0];
    const emailInput = document.getElementsByClassName('email-modal__input')[0];
    const emailButton = document.getElementsByClassName('email-modal__button')[0];
    const emailSentContainer = document.getElementsByClassName('email-thank')[0];

    const emailModalFormGroup = document.getElementsByClassName('email-modal__form-group')[0];
    const emailModalErrorMessage = document.getElementsByClassName('email-modal__error-message')[0];

    // EVENT LISTENERS FOR MODAL ============================================= //
    emailInput.addEventListener('click', () => {
        removeErrorMessages();
    })

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    notInterested.addEventListener('click', () => {
        closeModal();
    });

    document.body.addEventListener('mouseleave', () => {
        showModal();
    });

    emailButton.addEventListener('click', () => {
        // {IF} the email address is a real email address,
        // {THEN} display that the email was sent sucessfully
        // {ELSE} display the error messages / styling on the Modal

        if (validateEmail(emailInput.value)) {
            emailSentSuccess();
        } else {
            addErrorMessages();
        }
    });


    // MODAL POP UP FUNCTION ================================ //
    // If the variable {emailState} is false -->
    // Then add email-modal--visible to make the modal visible
    // Then change the {emailState} to true. This prevents the modal from popping up again.
    let showModal = () => {
        if (emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true;
        };
    }

    // CLEARING ERROR MESSAGE / ADDING ERROR MESSAGE ================================ //
    let removeErrorMessages = () => {
        emailModalFormGroup.classList.remove('email-modal__form-group--error');
        emailModalErrorMessage.classList.remove('email-modal__error-message--active');
        emailInput.classList.remove('email-modal__input-error--active');
    }

    let addErrorMessages = () => {
        emailModalFormGroup.classList.add('email-modal__form-group--error');
        emailModalErrorMessage.classList.add('email-modal__error-message--active');
        emailInput.classList.add('email-modal__input-error--active');
    }

    // EMAIL SENT SUCCESSFULLY FUNCTION ================================ //
    let emailSentSuccess = () => {
        emailSentContainer.classList.add('email-thank--success');
    }

    // CLOSE MODAL FUNCTIONS ================================ //
    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    }

    // EMAIL VALIDATION USING REGEX ================================ //
    function validateEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
}