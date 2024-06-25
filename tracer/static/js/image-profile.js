// document.addEventListener("DOMContentLoaded", function () {
//     const formContainer = document.querySelector('.form-container');
//     const fileInput = document.getElementById('fileInput');
//     const preview = document.getElementById('preview');
//     const uploadButton = document.getElementById('uploadButton');
//     const hideFormButton = document.getElementById('hideForm');
//     const profileForm = document.getElementById('profileForm');
//     const output = document.getElementById('output');
//     let cropper = null;
//     const crop = document.querySelector('.crop'); // تعريف زر القص داخل نطاق الحدث "DOMContentLoaded"

//     uploadButton.addEventListener('click', function () {
//         fileInput.click();
//     });

//     fileInput.addEventListener('change', function () {
//         const file = this.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 preview.src = e.target.result;
//                 preview.style.display = 'inline';
//                 if (cropper !== null) {
//                     cropper.destroy();
//                 }
//                 cropper = new Cropper(preview, {
//                     aspectRatio: 1,
//                     viewMode: 0
//                 });
//             }
//             reader.readAsDataURL(file);
//         }
//     });

//     crop.addEventListener('click', () => {
//         if (cropper !== null) {
//             const croppedImageDataURL = cropper.getCroppedCanvas().toDataURL();
//             output.src = croppedImageDataURL;
//         }
//     });

//     // hideFormButton.addEventListener('click', function () {
//     //     formContainer.style.display = 'none';
//     // });

//     // profileForm.addEventListener('submit', function (event) {
//     //     event.preventDefault();
//     //     alert('Image submitted!');
//     // });
// });


document.addEventListener("DOMContentLoaded", function () {
    var croppie = new Croppie(document.getElementById('croppie-container'), {
        viewport: { width: 70, height: 70, type: 'circle' },
        boundary: { width: 300, height: 300 }
    });

    // Load the default image or the user's current profile image
    var defaultImageUrl = document.getElementById('output').src;
    croppie.bind({
        url: defaultImageUrl
    });

    document.getElementById('uploadButton').addEventListener('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            croppie.bind({
                url: e.target.result
            });
        }
        reader.readAsDataURL(this.files[0]);
    });

    const userRole = document.querySelector('.role')
    const uniCode = document.querySelector('.unicode').innerHTML
    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('submit', function (event) {
        event.preventDefault();
        croppie.result('blob').then(function (blob) {
            var formData = new FormData();
            formData.append('file', blob, `${uniCode}.jpg`);
            let url = ""

            if (userRole.innerHTML == 0) {
                url = '/student-image-profile'
            }else if (userRole.innerHTML == 1) {
                url = '/instructor-image-profile'
            }else{
                url = '/admin/image-profile'
            }

            fetch(url, {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    if (userRole.innerHTML == 0) {
                        location.href = '/student/profile'
                    }else if (userRole.innerHTML == 1) {
                        location.href = '/instructor/profile'
                    }else{
                        location.href = '/admin/profile'
                    }
                    } else {
                    console.error('Image upload failed!');
                    }
            }).catch(error => {
                console.error('Error:', error);
            });
        });
    });
});