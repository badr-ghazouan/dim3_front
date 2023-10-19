import React from 'react'
import { useParams } from "react-router";
import data from '../Patients.json';


function PatientDetais({ }) {

  let { id } = useParams();
  let patient = data.filter(el => el.id == id)[0]


  const getAgefromBirthDay = (dateString) =>{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Patient Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Details of the selected patient</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">Id</dt>
              <dd className="text-gray-900">{patient.id}</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">firstName</dt>
              <dd className="text-gray-900">{patient.firstName}</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">lastName</dt>
              <dd className="text-gray-900">{patient.lastName}</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">age</dt>
              <dd className="text-gray-900">{getAgefromBirthDay(patient.birthDate)}</dd>
            </div>
            <div className="py-3 flex justify-between text-sm font-medium">
              <dt className="text-gray-500">sex</dt>
              <dd className="text-gray-900">{patient.sex}</dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}

export default PatientDetais