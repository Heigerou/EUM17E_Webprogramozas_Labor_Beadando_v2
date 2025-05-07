const imagePaths = [
                    "../kepek/skin1.jpg",
                    "../kepek/skin2.jpg",
                    "../kepek/skin3.jpg",
                    "../kepek/skin4.jpg",
                    "../kepek/skin5.jpg",
                    "../kepek/skin6.jpg",
                    "../kepek/skin7.jpg",
                    "../kepek/skin8.jpg",
                    "../kepek/skin9.jpg",
                    "../kepek/skin10.jpg",
                    "../kepek/skin11.jpg",
                    "../kepek/skin12.jpg"
                ];
            
                let currentIndex = 0;
            
                // Fő kép cseréje adott elérési út alapján
                function changeImage(imagePath) {
                    const mainImage = document.getElementById('mainImage');
                    mainImage.src = imagePath;
                    const newIndex = imagePaths.indexOf(imagePath);
                    if (newIndex !== -1) {
                        currentIndex = newIndex;
                    }
                }
            
                // Előző kép
                function previousImage() {
                    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
                    document.getElementById('mainImage').src = imagePaths[currentIndex];
                }
            
                // Következő kép
                function nextImage() {
                    currentIndex = (currentIndex + 1) % imagePaths.length;
                    document.getElementById('mainImage').src = imagePaths[currentIndex];
                }