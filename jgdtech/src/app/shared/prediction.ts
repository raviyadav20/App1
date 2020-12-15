export class Prediction {
    salesUnit: string;
    quantity: number;
    productCode: number;
    liveitemnumber: number;
    materialnumber: boolean;
    billingDate: string;
    districts: string;
    states: string;
    plants: string;
    freeQuantity:number;
};

export const SalesUnit = ['none'];
export const States = ['Karnataka', 'Telangana', 'Uttar Pradesh', 'Andhra Pradesh',
'Delhi', 'Haryana', 'Maharashtra', 'Goa', 'Punjab', 'Kerala',
'Tamil Nadu', 'Rajasthan', 'Chhattisgarh', 'Assam',
'Madhya Pradesh', 'Chandigarh', 'Jharkhand', 'West Bengal',
'Puducherry', 'Bihar', 'Gujarat', 'Himachal Pradesh', 'Manipur',
'Orissa', 'Jammu and Kashmir', 'Tripura', 'Uttarakhand'];
export const Districts = ['Azamgarh','Jaunpur', 'Mirzapur', 'Lucknow','Agra','Mathura','PrayagRaj','Gorakhpur','Khalilabad','Basti',
'Baliya','Mau','Sultanpur','Bareli','Lakhimpur Khiri','Ayodhya','Gaziabad', 'Banaras','Kanpur',];
export const Plants = ['Bangalore', 'Hydrabad', 'Mangalore'];