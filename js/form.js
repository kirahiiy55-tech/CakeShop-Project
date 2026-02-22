
document.querySelectorAll('.custom-select .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const value = this.getAttribute('data-value');
        const targetId = this.getAttribute('data-target');
        const text = this.querySelector('span') ? this.querySelector('span').textContent : this.textContent;
        
        const button = this.closest('.custom-select').querySelector('.select-button');
        const buttonSpan = button.querySelector('span');
        
        if (buttonSpan) {
            buttonSpan.textContent = text;
        }
        
        button.classList.add('selected');
        
        const hiddenInput = document.getElementById(targetId);
        if (hiddenInput) {
            hiddenInput.value = value;
        }
        
        const dropdownMenu = this.closest('.dropdown-menu');
        if (dropdownMenu) {
            const bsDropdown = bootstrap.Dropdown.getInstance(this.closest('.custom-select').querySelector('[data-bs-toggle="dropdown"]'));
            if (bsDropdown) {
                bsDropdown.hide();
            }
        }
    });
});

document.querySelector('.order-form').addEventListener('submit', function(e) {
    const productValue = document.getElementById('productHidden').value;
    const frostingValue = document.getElementById('frostingHidden').value;
    const spongeValue = document.getElementById('spongeHidden').value;
    const fillingValue = document.getElementById('fillingHidden').value;
    
    if (!productValue) {
        e.preventDefault();
        alert(
          currentLang === 'ua' ? 'Будь ласка, оберіть тип продукту' :
          currentLang === 'ru' ? 'Пожалуйста, выберите тип продукта' :
          'Please choose the product');
        return false;
    }

    if (!spongeValue) {
        e.preventDefault();
        alert (
          currentLang === 'ua' ? 'Будь ласка, оберіть тип коржу' :
          currentLang === 'ru' ? 'Пожалуйста, выберите тип коржа' :
          'Please choose the sponge');
        return false;
    }
    
    if (!frostingValue) {
        e.preventDefault();
        alert(
          currentLang === 'ua' ? 'Будь ласка, оберіть тип крему' :
          currentLang === 'ru' ? 'Пожалуйста, выберите тип крема' :
          'Please choose the frosting');
        return false;
    }

    if (!fillingValue) {
        e.preventDefault();
        alert (
          currentLang === 'ua' ? 'Будь ласка, оберіть тип начинки' :
          currentLang === 'ru' ? 'Пожалуйста, выберите тип начинки' :
          'Please choose the filling');
        return false;
    }
});

document.getElementById('fileInput').addEventListener('change', function() {
    const fileLabel = document.getElementById('fileLabel');
    if (this.files && this.files[0]) {
        fileLabel.textContent = this.files[0].name;
        fileLabel.style.opacity = '1';
    } else {
        fileLabel.textContent = 
            currentLang === 'ua' ? 'Виберіть файл' :
            currentLang === 'ru' ? 'Выберите файл' :
            'Choose file';
    }
});
