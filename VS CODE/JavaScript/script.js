function loadFile(event) {
    var image = document.getElementById('photoPreview');
    image.style.backgroundImage = 'url(' + URL.createObjectURL(event.target.files[0]) + ')';
  }
  
  document.getElementById('inputDisability').addEventListener('change', function() {
      const disabilityStatus = document.getElementById('inputDisabilityStatus');
      const selectedDisability = this.value;
  
      // Clear existing options
      disabilityStatus.innerHTML = '';
  
      // Create a default "Select" option
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select';
      defaultOption.value = '';
      defaultOption.selected = true;
      disabilityStatus.appendChild(defaultOption);
  
      if (selectedDisability === 'yes') {
          const disabilityOptions = [
              'Amputee',
              'Kyphosis',
              'Paralytic',
              'Visually Impaired',
              'Low vision',
              'Hearing Impaired',
              'Intellectual Disability',
              'Autism',
              'Albinism',
              'Little People',
              'Epilepsy',
              'Leprosy'
          ];
  
          disabilityOptions.forEach(function(disability) {
              const option = document.createElement('option');
              option.text = disability;
              option.value = disability;
              disabilityStatus.appendChild(option);
          });
  
      } else if (selectedDisability === 'no') {
          const option = document.createElement('option');
          option.text = 'Not Disabled';
          option.value = 'Not Disabled';
          disabilityStatus.appendChild(option);
      }
  });
  