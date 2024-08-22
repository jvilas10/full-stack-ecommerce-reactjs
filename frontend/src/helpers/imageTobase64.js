const imageTobase64 = (image) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // Ensure the input is a Blob or File
        if (!(image instanceof Blob)) {
            reject(new Error("Provided parameter is not of type Blob or File"));
            return;
        }

        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);

        // Read the image as DataURL
        reader.readAsDataURL(image);
    });
};

export default imageTobase64;
