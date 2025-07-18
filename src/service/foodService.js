import axios from "axios";

const API_URL ='https://tastytrek.onrender.com/api/foods';

export const fetchFoodList = async () => {
    try {
        const response =await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching the food List:',error);
        throw error;
    }
}

export const fetchFoodDetails = async(id) => {
   try {
    const response = await axios.get(API_URL+"/"+id);
    return response.data;
   } catch (error) {
      console.log('Error fetching food details:');
      throw error;
   }
   
}