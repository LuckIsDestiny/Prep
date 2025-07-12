import environment from "./environments/environment.ts";
const API_URL = environment.apiUrl;

export const addPatient = async (patient) => {
 return fetch(`${API_URL}`,{
   method:'POST',
   body:JSON.stringfy(patient)
 }).then((res)=>res.json())
};

export const getPatients = async () => {
  return fetch(`${API_URL}`).then((res)=>res.json());
};



// let mockPatients = [];
// export const addPatient = async (patient) => {
//   const id = `P${(mockPatients.length + 1).toString().padStart(3, '0')}`;
//   mockPatients.push({ ...patient, patientID: id });
// };

// export const getPatients = async () => {
//   return [...mockPatients];
// };
