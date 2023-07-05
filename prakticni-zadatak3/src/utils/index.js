export const constructFormValues = () => ({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    paymentMethod: "",
    acceptTerms: false,
});

export const generateRandomNumber = () => {
    return Math.floor(Math.random()*100) +1;
};