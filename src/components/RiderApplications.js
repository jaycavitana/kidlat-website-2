import React, {Fragment, useState} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/kidlatLogo.png";
import Swal from 'sweetalert2'
import {storage} from "../firebase/firebase"
// import googleIconImageSrc from "images/google-icon.png";
// import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import axios from 'axios'
const Container = tw(ContainerBase)`min-h-screen bg-yellow-500 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`max-w-screen-xl p-3 `;
const LogoLink = tw.a`mt-5 flex flex-col items-center`;
const LogoImage = tw.img`h-20 mx-auto`;
// const MainContent = tw.div` items-center border-solid border-4 border-gray-600 `;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const Subheading = tw.h2`text-xl xl:text-2xl font-bold `;
const Form = tw.form``;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-yellow-500 text-black w-full py-4 rounded-lg hover:bg-black hover:text-primary-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const RiderApplications = ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Kidlat Rider Application",
  submitButtonText = "Apply as Rider",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "terms",
  privacyPolicyUrl = "/privacy",
  backtohome = "/"
}) => {

  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  var image = ""
 console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }

  var imageRequirement = imageAsUrl.imgUrl;
  console.log(imageRequirement)
  const [formData, setFormData] = useState({
    is_owner: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    house_unit: "",
    barangay: "",
    city_province: "",
    birthday: "",
    birthplace: "",
    gender: "",
    mobile_number: "",
    email: "",
    sss: "",
    tin: "",
    brand: "",
    motorcycleModel: "",
    yr_model: "",
    engine_model: "", //this should be engine model (change na lang sa form - this is initially engine_number)
    plate_number: "",
    licenseNumber: "",
    licenseExpiry: "",
    emergencyContactPerson: "",
    emergencyContactNumber: "",
    currentWork: "",
    bikerGroup: "",
    referrer: "",
    gcashNumber: "",
    is_biker: '',
    will_attend_seminar : "",
    is_professional : "",
    agree1 : "",
    agree2 : "",
    agree3 : "",
    agree4 : "",
    agree5 : "",
    agree6 : "",
    agree7 : "",
    nbi_clearance_url: "",
    police_clearance_url:"",
    drivers_license_url: "",
    or_url: "",
    cr_url: "",
    government_id_url: ""
    // is_owner: "1",
    // first_name: "Josiah",
    // middle_name: "Perez",
    // last_name: "Cavitana",
    // house_unit: "x",
    // barangay: "x",
    // city_province: "x",
    // birthday: "1998-04-15",
    // birthplace: "x",
    // gender: "x",
    // mobile_number: "09075967827",
    // email: "jaypcavitana@gmailxxxxsss.com",
    // sss: "x",
    // tin: "x",
    // brand: "x",
    // motorcycleModel: "x",
    // yr_model: "x",
    // engine_model: "x", //this should be engine model (change na lang sa form - this is initially engine_number)
    // plate_number: "x",
    // licenseNumber: "x",
    // licenseExpiry: "2020-01-01",
    // emergencyContactPerson: "x",
    // emergencyContactNumber: "x",
    // currentWork: "x",
    // bikerGroup: "x",
    // referrer: "x",
    // gcashNumber: "x",
    // is_biker: '1',
    // will_attend_seminar : "1",
    // is_professional : "1",
    // agree1 : "1",
    // agree2 : "1",
    // agree3 : "1",
    // agree4 : "1",
    // agree5 : "1",
    // agree6 : "1",
    // agree7 : "1",
    // nbi_clearance_url: imageRequirement,
    // police_clearance_url:imageRequirement,
    // drivers_license_url: imageRequirement,
    // or_url: imageRequirement,
    // cr_url: imageRequirement,
    // government_id_url: imageRequirement
    });

    const {
      is_owner,
      first_name,
      middle_name,
      last_name,
      house_unit,
      barangay,
      city_province,
      birthday,
      birthplace,
      gender,
      mobile_number,
      email,
      sss,
      tin,
      brand,
      motorcycleModel,
      yr_model,
      engine_model,
      plate_number,
      licenseNumber,
      licenseExpiry,
      emergencyContactPerson,
      emergencyContactNumber,
      currentWork,
      bikerGroup,
      referrer,
      gcashNumber,
      is_biker,
      will_attend_seminar,
      is_professional,
      agree1,
      agree2,
      agree3,
      agree4,
      agree5,
      agree6,
      agree7,
      nbi_clearance_url,
      police_clearance_url,
      drivers_license_url,
      or_url,
      cr_url,
      government_id_url
      } = formData;


      const checkboxHandler = (e) => {

      }
      const onChange = (e) =>
      setFormData ({...formData, [e.target.name] : e.target.value});

      const onChangeCheckbox = (e) => {
        var value = ""
      if(e.target.checked){
                var value = "1"
      }

      else{
                var value = "0"
      }

      setFormData ({...formData, [e.target.name] : value});
     }

     const onSubmit = async (e) => {
       e.preventDefault();

       if(imageAsFile === '' ) {
         console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
         Swal.fire({
           title: 'Something is wrong!',
           text: "You need to upload the documents",
           icon: 'error',
           confirmButtonText: 'OK'
         })
       }

       const uploadTask = storage.ref(`/images/requirements/${imageAsFile.name}`).put(imageAsFile)
       uploadTask.on('state_changed',
       (snapShot) => {
         //takes a snap shot of the process as it is happening
         console.log(snapShot)
       }, (err) => {
         //catches the errors
         console.log(err)
       }, () => {
         // gets the functions from storage refences the image storage in firebase by the children
         // gets the download url then sets the image from firebase as the value for the imgUrl key:
         storage.ref('images/requirements').child(imageAsFile.name).getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
                    // console.log(fireBaseUrl)
                    const urls = {

                    }
                    setFormData({...formData,
                      nbi_clearance_url: fireBaseUrl,
                          police_clearance_url: fireBaseUrl,
                          drivers_license_url: fireBaseUrl,
                          or_url: fireBaseUrl,
                          cr_url: fireBaseUrl,
                          government_id_url: fireBaseUrl})
                    try{
                      axios.post('http://kidlat-api.herokuapp.com/Riders/', formData)
                      .then(res => {
                           if (res.data.message == 'Mobile number is already used.'){
                               Swal.fire({
                                   title: 'Validation!',
                                   text: res.data.message,
                                   icon: 'warning',
                                   confirmButtonText: 'OK'
                                 })
                           }
                           else if (res.data.message == 'Email address is already used.'){
                               Swal.fire({
                                   title: 'Validation!',
                                   text: res.data.message,
                                   icon: 'warning',
                                   confirmButtonText: 'OK'
                                 })
                           }
                           else {
                               Swal.fire({
                                   title: 'Success!',
                                   text: res.data.message,
                                   icon: 'success',
                                   confirmButtonText: 'OK'
                                 }).then(() => {
                                   window.location.reload();
                                 })
                           }

                      }
                    )
                      .catch(err =>
                        // Swal.fire({
                        //   title: 'Something is wrong!',
                        //   text: err,
                        //   icon: 'error',
                        //   confirmButtonText: 'OK'
                        // }),
                        console.log(err)
                        // var errorMsg = error;
                      );
                      // console.log(formData);
                    }catch (error){
                      console.log(error.response);
                    }
          })
       })



     }

      console.log(formData);

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
              <Heading>{headingText}</Heading>
              <p tw="text-sm text-gray-600 text-center">
                    Applicants must be 21 - 55 years old only
                  </p>
                  <p tw="mb-6 text-sm text-gray-600 text-center">
                    For 51-55 years old, please attached a medical certificate, proving that you are fit to drive
                  </p>
            </LogoLink>



                <Form onSubmit={(e) => onSubmit(e)}>
                <Subheading>Requirements</Subheading>
                <p tw="mb-6 text-sm text-gray-600">
                   Please note that expired copy of REQUIREMENTS is NOT VALID.
                  </p>

                  {/* NBI CLEARANCE - BRGY/POLICE CR;EARANCE - LISCENSE  */}
                  <div tw="flex flex-wrap -mx-3 mb-2">
                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              NBI Clearance
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="nbiclearance" required/>

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Police/Brgy. Clearance
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="police-brgyclearance" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Professional Driver's License
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="DriversLiscense" required/>

                      </div>

                  </div>
                  {/* MOTOR CR- MOTOR OR;EARANCE - 2 GOV ID  */}
                  <div tw="flex flex-wrap -mx-3 mb-2">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-xs ">
                             Motorcyle's CR
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="motorcr" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-xs ">
                              Motorcyle's OR
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="motoror" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                             Goverment ID
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" onChange={handleImageAsFile} name="govid" required/>

                      </div>

                  </div>

                  {/* R U D OWNER  */}
                  <div tw="flex flex-wrap -mx-3 mb-6">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2" />


                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2 text-center">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Are you the registered owner of the motorcycle?
                          </label>
                          <div onChange={(e) => onChange(e)}>
                          <input  type="radio" value="1" name ="is_owner" required/> YES
                          <input tw="ml-3"type="radio" value="0" name ="is_owner"  /> NO
                          </div>

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2" />



                  </div>

                  <Subheading>Personal Information</Subheading>
                  <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     NAME  <i tw="text-xs">Note: if you have a name extension, please input it the last name (example: Dela Cruz, jr) </i>
                  </p>
                  {/* NAME */}
                  <div tw="flex flex-wrap -mx-3 mb-6">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  onChange={(e) => onChange(e)} value={first_name} type="text" placeholder="First Name" name="first_name" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  onChange={(e) => onChange(e)} value={middle_name} type="text" placeholder="Middle Name" name="middle_name" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  onChange={(e) => onChange(e)} value={last_name} type="text" placeholder="Last Name" name="last_name" required />

                      </div>
                  </div>

                  {/* ADDRESS  */}

                  <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     ADDRESS
                  </p>
                  <div tw="flex flex-wrap -mx-4 mb-6">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  onChange={(e) => onChange(e)} value={house_unit} placeholder="House/Unit  Number, Street" name="house_unit" required  />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" onChange={(e) => onChange(e)} value={barangay} placeholder="Barangay" name="barangay" required/>

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="City, Province" onChange={(e) => onChange(e)} value={city_province} name="city_province" required/>

                      </div>

                  </div>

                  {/* AGE - BIRTHDAY - BIRTHPLACE  */}

                  <div tw="flex flex-wrap -mx-4 mb-6">
                    {/*
                  //
                  //     <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                  //
                  //         <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  onChange={(e) => onChange(e)} value={age} placeholder="Age" name="age"/>
                  //
                  //     </div> */}

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 -mt-4">
                      <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Birthday
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date" onChange={(e) => onChange(e)} value={birthday} placeholder="Birthday" name="birthday" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" onChange={(e) => onChange(e)} value={birthplace} placeholder="Birthplace" name="birthplace" required/>

                      </div>

                  </div>

                  {/* GENDER - MOBNUM - EMAIL  */}

                  <div tw="flex flex-wrap -mx-4 mb-6">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                      <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Gender
                          </label>
                          <div onChange={(e) => onChange(e)}>
                          <input  type="radio" value="Male" name ="gender" required/> Male
                          <input tw="ml-3"type="radio" value="Female" name ="gender"  /> Female
                          </div>
                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Mobile Number" onChange={(e) => onChange(e)} value={mobile_number} name="mobile_number" required />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="email" placeholder="Email" onChange={(e) => onChange(e)} value={email} name="email" required/>

                      </div>

                  </div>

                  {/*CIVIL STAT- SSS - TIN   */}

                  <div tw="flex flex-wrap -mx-4 mb-6">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="SSS" onChange={(e) => onChange(e)} value={sss} name="sss" required  />

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="TIN No" onChange={(e) => onChange(e)} value={tin} name="tin" required/>

                      </div>



                  </div>

                  <Subheading>Motorcycle & License Information</Subheading>
                  <i tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     Note: Motorcycle information is found in your ORCR and CR
                  </i>
                   {/* BRAND - MODEL - yr model - ENGINE NUMBER */}
                  <div tw="flex flex-wrap -mx-4 mb-2">

                      <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Brand" onChange={(e) => onChange(e)} value={brand} name="brand" required />

                      </div>

                      <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcylcle Model" onChange={(e) => onChange(e)} value={motorcycleModel} name="motorcycleModel" required/>

                      </div>

                      <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Year Model" onChange={(e) => onChange(e)} value={yr_model} name="yr_model" required />

                      </div>

                      <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Engine Number" onChange={(e) => onChange(e)} value={engine_model} name="engine_model" required/>

                      </div>

                  </div>
                  <i tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     Note: Motor OR should not expire in one month
                  </i>
                   {/* Plate no- piston displacement  - chasis - or expiry */}
                  <div tw="flex flex-wrap -mx-4 mb-2">

                      <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Plate Number or MV FILE Number" onChange={(e) => onChange(e)} value={plate_number} name="plate_number" required/>

                      </div>

                      {/* <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">
                      //
                      //     <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Piston Displacement" onChange={(e) => onChange(e)} value={piston_displacement} name="piston_displacement"/>
                      //
                      // </div>

                      // <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">
                      //
                      //     <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Chasis Number" onChange={(e) => onChange(e)} value={chasis_number} name="chasis_number" />
                      //
                      // </div>

                      /* <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 -mt-4">
                      // <label tw="block  tracking-wide text-gray-700 text-sm ">
                      //         Motor OR Expiry
                      //     </label>
                      //     <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date" placeholder="Motorcycle Engine Number" onChange={(e) => onChange(e)} value={or_expiry} name="or_expiry"/>
                      //
                      // </div> */}

                  </div>

                  {/* License - license number - license expiry  */}
                  <i tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     Note: License should not expire in one month
                  </i>
                  <div tw="flex flex-wrap -mx-3 mb-2">

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                                  Driver's License
                              </label>
                              <div onChange={(e) => onChange(e)}>
                              <input  type="radio" value="1" name ="is_professional" required/> Professional
                              <input tw="ml-3"type="radio" value="0" name ="is_professional"  /> Non-professional
                              </div>
                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" onChange={(e) => onChange(e)} value={licenseNumber} placeholder="License Number" name="licenseNumber" required/>

                      </div>

                      <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 -mt-4">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              License Expiry
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date" onChange={(e) => onChange(e)} value={licenseExpiry} name="licenseExpiry" required />

                      </div>

                  </div>

                  {/*CONTACT PERSONS*/}

                  <Subheading>Emergency Contact Person</Subheading>
                  <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                     Contact Person:
                  </p>
                  <div tw="flex flex-wrap -mx-2 mb-6">

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Full Name" onChange={(e) => onChange(e)} value={emergencyContactPerson} name="emergencyContactPerson" required/>

                      </div>

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Contact Number" onChange={(e) => onChange(e)} value={emergencyContactNumber} name="emergencyContactNumber" required />

                      </div>
                  </div>


                  {/*APPLICATION INFORMATION*/}

                  <Subheading>Application Information</Subheading>

                  <div tw="flex flex-wrap -mx-2 mb-6">

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              What is your current work?
                          </label>
                          <input  type="radio" value="no other work" name="nowork"  onChange={(e) => onChange(e)}/> I don't have work
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="What is your work?" onChange={(e) => onChange(e)} value={currentWork} name="currentWork" />

                      </div>

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Are you a member of a biker group?
                          </label>
                          <div onChange={(e) => onChange(e)}>
                          <input  type="radio" value="0" name="is_biker" required/> NO
                          <input tw="ml-3"type="radio" value="1" name="is_biker" /> YES
                          </div>




                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="What is the name of your group?" onChange={(e) => onChange(e)} value={bikerGroup} name="bikerGroup" />

                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-2 mb-6">

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              Who's your referrer?
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Name of Referrer" onChange={(e) => onChange(e)} value={referrer} name="referrer" />

                      </div>

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              What is your Gcash Kidlat Phone Number?
                          </label>
                          <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Gcash Mobile Number" onChange={(e) => onChange(e)} value={gcashNumber} name="gcashNumber" required />

                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-2 mb-6">

                      <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                          <label tw="block  tracking-wide text-gray-700 text-sm ">
                              When and Where you can attend Kidlat Seminar?
                          </label>
                          <input  type="radio" value="1" name="will_attend_seminar" required/> When Kidlat texted me
                          <input tw="ml-3"type="radio" value="0" name="will_attend_seminar" /> Not yet sure

                      </div>

                  </div>


                  <Subheading>Declarations</Subheading>

                  <div tw="flex flex-wrap -mx-3 mb-3 mt-6">
                      <div tw="w-full px-3 text-xs" >
                          <input tw="ml-3" type="checkbox"  value="1" onChange={(e) => onChangeCheckbox(e)} value={agree1} name="agree1" /> In addition to the national licensing policy or the requirements of any authority, this company may conduct a background check.
                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs">
                          <input tw="ml-3"type="checkbox" value="1" onChange={(e) => onChangeCheckbox(e)} value={agree2} name="agree2" /> I declare that I have personally read and completed the Kidlat application and that the information I have written is true to the best of my knowledge.
                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs" >
                          <input tw="ml-3"type="checkbox" value="1" onChange={(e) => onChangeCheckbox(e)} value={agree3} name="agree3" /> This company reserves the right to remove the biker if it fails the credit and community investigation or does not comply with company standards.
                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs">
                          <input tw="ml-3"type="checkbox" value="1" onChange={(e) => onChangeCheckbox(e)} value={agree4} name="agree4" /> I understand that this company may share information with other agencies or individuals to assist in crime prevention as needed.
                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs">
                          <input tw="ml-3"type="checkbox" value="1"onChange={(e) => onChangeCheckbox(e)} value={agree5} name="agree5" /> I agree and I will abide by such guidelines of this company.
                      </div>

                  </div>

                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs">
                          <input tw="ml-3"type="checkbox" value="1" onChange={(e) => onChangeCheckbox(e)} value={agree6} name="agree6" /> I agree to be responsible for the tax service or commission that the company or the government may charge. This can be deducted from the money I receive.
                      </div>

                  </div>


                  <div tw="flex flex-wrap -mx-3 mb-3">
                      <div tw="w-full px-3 text-xs">
                          <input tw="ml-3"type="checkbox" value="1" onChange={(e) => onChangeCheckbox(e)} value={agree7} name="agree7" /> I understand that my personal information may be shared with third party service providers, business partners, and affiliated companies, or if requested by the authorities for legal purposes.
                      </div>

                  </div>





                  <SubmitButton type="submit"  name="submit">

                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Kidlat's{" "}
                    <a href={tosUrl} target={"_blank"} tw="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>{" "}
                    and its{" "}
                    <a href={privacyPolicyUrl} target={"_blank"}  tw="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>

                  <p tw="mt-8 text-sm text-gray-600 text-center">

                    <a href={backtohome} tw="border-b border-gray-500 border-dotted">
                      Back to home
                    </a>
                  </p>
                </Form>


          </MainContainer>

        </Content>
      </Container>
    </AnimationRevealPage>
  );
}

export default RiderApplications
