// export interface QuoteFormData {
//     loginDetails: {
//         username: string;
//         password: string;
//     };
//     firstName: string;
//     lastName: string;
//     suburb: string;
//     email: string;
//     phone: string;
//     comments?: string;
// }

export interface QuoteFormData {
    loginDetails: {
        username: string;
        password: string;
    };
    firstName: string;
    lastName: string;
    suburb: string;
    email: string;
    phone: string;
    comments?: string;
    dimensionData?: {
        width: string;
        height: string;
    };
}