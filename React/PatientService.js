export const addPatient = async (patient) => {
 return fetch("url",{
   method:'POST',
   body:JSON.Stringfy(patient)
 }).then((res)=>res.json)
};

export const getPatients = async () => {
  return fetch("url").then((res)=>res.json);
};



// let mockPatients = [];
// export const addPatient = async (patient) => {
//   const id = `P${(mockPatients.length + 1).toString().padStart(3, '0')}`;
//   mockPatients.push({ ...patient, patientID: id });
// };

// export const getPatients = async () => {
//   return [...mockPatients];
// };
