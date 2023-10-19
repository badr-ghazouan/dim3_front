import axios from "axios"
const URL = "https://nutrow.nutrow-2120.staging.apps.dim3.com/api/"
const token = localStorage.getItem('token')
export const getToken = async (username, password) => {

    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }

    // TODO remove hard coded credentials console log 
    await axios.post('https://nutrow.nutrow-2120.staging.apps.dim3.com/api/token-auth', 
    JSON.stringify({ 'username': 'test', 'password': 'Dim3-test' }), headers)
      .then(res => {
        console.log(res.data);
      }).catch (err => {
        console.log("err: ", err)
      }).finally( ()=> {
        localStorage.setItem('token', token)
      } )

} 

export const getPatients = async (page = 0)=> {
    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token     
    }

    return await axios.get("https://nutrow.nutrow-2120.staging.apps.dim3.com/api/patient-list?page=" + page +  "&pageSize=10", headers)
}