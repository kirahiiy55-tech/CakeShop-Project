$(document).ready(function() {
    const $phone = $('#tel');
    
    $phone.mask('+380(00)000-00-00', {
        placeholder: "+380(__) ___-__-__"
    });
    
    $phone.on('focus', function() {
        if ($(this).val() === '' || $(this).val() === '+380(__) ___-__-__') {
            $(this).val('+380(');
        }
    });
    
    $phone.on('blur', function() {
        if ($(this).val() === '+380(' || $(this).val() === '+380(__) ___-__-__') {
            $(this).val('');
        }
    });
});

$(document).ready(function() {
    const $tg = $('#nickname');
    
    $tg.mask('@AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
        translation: {
            'A': {pattern: /[A-Za-z0-9_]/}
        },
        placeholder: "@username"
    });
    
    $tg.on('focus', function() {
        if ($(this).val() === '') {
            $(this).val('@');
        }
    });
    
    $tg.on('blur', function() {
        if ($(this).val() === '@') {
            $(this).val('');
        }
    });
});

const input = document.getElementById('delivery-date');
const error = document.getElementById('delivery-date-error');

const today = new Date();
today.setDate(today.getDate() + 3);

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');

input.min = `${yyyy}-${mm}-${dd}`;

if (!input.value) {
    input.classList.add('empty');
}

input.addEventListener('change', () => {
  const selected = new Date(input.value);
  const day = selected.getDay();

  if (input.value) {
        input.classList.remove('empty');
    } else {
        input.classList.add('empty');
    }
});
