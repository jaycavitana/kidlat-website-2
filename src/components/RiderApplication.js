import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/kidlatLogo.png";
// import googleIconImageSrc from "images/google-icon.png";
// import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`min-h-screen bg-yellow-500 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`max-w-screen-xl p-3 `;
const LogoLink = tw.a`mt-5 flex flex-col items-center`;
const LogoImage = tw.img`h-20 mx-auto`;
// const MainContent = tw.div` items-center border-solid border-4 border-gray-600 `;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const Subheading = tw.h2`text-xl xl:text-2xl font-bold `;


// const SocialButtonsContainer = tw.div`flex flex-col items-center`;
// const SocialButton = styled.a`
//   ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
//   .iconContainer {
//     ${tw`bg-white p-2 rounded-full`}
//   }
//   .icon {
//     ${tw`w-4`}
//   }
//   .text {
//     ${tw`ml-4`}
//   }
// `;

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
// const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
// const IllustrationImage = styled.div`
//   ${props => `background-image: url("${props.imageSrc}");`}
//   ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
// `;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Kidlat Rider Application",
  submitButtonText = "Apply as Rider",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "terms",
  privacyPolicyUrl = "/privacy",
  backtohome = "/"
}) => (
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



              <Form>
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
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="nbiclearance"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Police/Brgy. Clearance
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="police-brgyclearance" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Professional Driver's License
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="DriversLiscense" />

                    </div>

                </div>
                {/* MOTOR CR- MOTOR OR;EARANCE - 2 GOV ID  */}
                <div tw="flex flex-wrap -mx-3 mb-2">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-xs ">
                           Motorcyle's CR
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="motorcr" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-xs ">
                            Motorcyle's OR
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name=" motoror" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                           Goverment ID
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="govid" />

                    </div>

                </div>

                {/* R U D OWNER  */}
                <div tw="flex flex-wrap -mx-3 mb-6">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2" />


                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2 text-center">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Are you the registered owner of the motorcycle?
                        </label>
                        <input  type="radio" value="yes" name ="owneryes" /> YES
                        <input tw="ml-3"type="radio" value="no" name ="ownerno" /> NO

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
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="First Name" name="fname" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Middle Name" name="mname" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Last Name" name="lname" />

                    </div>
                </div>

                {/* ADDRESS  */}

                <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                   ADDRESS
                </p>
                <div tw="flex flex-wrap -mx-4 mb-6">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  placeholder="House/Unit  Number, Street" name="houseunit"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Barangay" name="brgy"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="City, Province" name="cityprovince"/>

                    </div>

                </div>

                {/* AGE - BIRTHDAY - BIRTHPLACE  */}
                <div tw="flex flex-wrap -mx-4 mb-6">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  placeholder="Age" name="age"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 -mt-4">
                    <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Birthday
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date" placeholder="Birthday" name="bday" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Birthplace" name="bplace"/>

                    </div>

                </div>

                {/* GENDER - MOBNUM - EMAIL  */}

                <div tw="flex flex-wrap -mx-4 mb-6">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                    <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Gender
                        </label>
                        <input  type="radio" value="Male" name="male" /> Male
                        <input tw="ml-3"type="radio" value="Female" name="female "/> Female

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Mobile Number" name="mobilenumber" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Email" name="email"/>

                    </div>

                </div>

                {/*CIVIL STAT- SSS - TIN   */}

                <div tw="flex flex-wrap -mx-4 mb-6">
                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                                Civil Status
                            </label>
                            <input  type="radio" value="single"  name="single"/> Single
                            <input tw="ml-3"type="radio" value="married" name="married" /> Married

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="SSS" name="sssnumber"  />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="TIN No" name="tinnumber"/>

                    </div>



                </div>

                {/* PHONE BRAND MODEL - MOBNUM - EMAIL  */}
                <Subheading>Mobile Phone Information</Subheading>
                <div tw="flex flex-wrap -mx-3 mb-2">

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Mobile Phone Brand
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Cellhone Brand" name="cellphonebrand" />

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                           <i>Note: Dial *#06# to view IMEI1 </i>
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="IMEI1" name="imei1"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            IME1 Screenshot
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="file" name="imeipic" />

                    </div>

                </div>


                <Subheading>Motorcycle & License Information</Subheading>
                <i tw="block  tracking-wide text-gray-700 text-sm mt-6">
                   Note: Motorcycle information is found in your ORCR and CR
                </i>
                 {/* BRAND - MODEL - yr model - ENGINE NUMBER */}
                <div tw="flex flex-wrap -mx-4 mb-2">

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Brand" name="motorbrand" />

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcylcle Model" name="motormodel"/>

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Year Model" name="motoryrmodel" />

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Engine Number" name="motorenginemodel"/>

                    </div>

                </div>
                <i tw="block  tracking-wide text-gray-700 text-sm mt-6">
                   Note: Motor OR should not expire in one month
                </i>
                 {/* Plate no- piston displacement  - chasis - or expiry */}
                <div tw="flex flex-wrap -mx-4 mb-2">

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Plate Number or MV FILE Number" name="platenumber"/>

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Piston Displacement" name="pistondisplacement"/>

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="Motorcycle Chasis Number" name="chasisnumber" />

                    </div>

                    <div tw="w-full md:w-1/4 px-3 mb-6 md:mb-0 -mt-4">
                    <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Motor OR Expiry
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date" placeholder="Motorcycle Engine Number" name="enginenumber"/>

                    </div>

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
                            <input  type="radio" value="professional"name="professional" /> Professional
                            <input tw="ml-3"type="radio" value="non-professional" name="nonprofressional" /> Non-professional

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">

                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="text" placeholder="License Number" name="licensenumber"/>

                    </div>

                    <div tw="w-full md:w-1/3 px-3 mb-6 md:mb-0 -mt-4">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            License Expiry
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-0"  type="date"name="licenseexpiry" />

                    </div>

                </div>

                {/*CONTACT PERSONS*/}

                <Subheading>Emergency Contact Person</Subheading>
                <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                   Contact Person 1:
                </p>
                <div tw="flex flex-wrap -mx-2 mb-6">

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Full Name" name="contactperson1"/>

                    </div>

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Contact Number" name="contactpersonnumber1" />

                    </div>
                </div>

                <p tw="block  tracking-wide text-gray-700 text-sm mt-6">
                   Contact Person 2:
                </p>
                <div tw="flex flex-wrap -mx-2 mb-6">

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Full Name" name="contactperson2" />

                    </div>

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Contact Number" name="contactpersonnumber2" />

                    </div>
                </div>

                {/*APPLICATION INFORMATION*/}

                <Subheading>Application Information</Subheading>

                <div tw="flex flex-wrap -mx-2 mb-6">

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            What is your current work?
                        </label>
                        <input  type="radio" value="no other work" name="nowork"/> I don't have work
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="What is your work?" name="workplace" />

                    </div>

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Are you a member of a biker group?
                        </label>
                        <input  type="radio" value="not bike member" name="notbikermember"/> NO
                        <input tw="ml-3"type="radio" value="bike member" name="yesbikermember" /> YES
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="What is the name of your group?" name="bikergroupname" />

                    </div>

                </div>

                <div tw="flex flex-wrap -mx-2 mb-6">

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Who's your referrer?
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Name of Referrer" name="referrer" />

                    </div>

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            What is your Gcash Kidlat Phone Number?
                        </label>
                        <Input tw="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Gcash Mobile Number" name="gcash-mobilenumber" />

                    </div>

                </div>

                <div tw="flex flex-wrap -mx-2 mb-6">

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            Do you have a seperate android phone that you will be using in Kidlat?
                        </label>
                        <input  type="radio" value="not seperate phone" name="noseperatephone" /> NO
                        <input tw="ml-3"type="radio" value="seperate phone"  name="haveseperatephone"/> YES

                    </div>

                    <div tw="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                        <label tw="block  tracking-wide text-gray-700 text-sm ">
                            When and Where you can attend Kidlat Seminar?
                        </label>
                        <input  type="radio" value="texted for seminar" name="iftexted"/> When Kidlat texted me
                        <input tw="ml-3"type="radio" value="not yet sure" name="notsure" /> Not yet sure

                    </div>

                </div>


                <Subheading>Declarations</Subheading>

                <div tw="flex flex-wrap -mx-3 mb-3 mt-6">
                    <div tw="w-full px-3 text-xs" >
                        <input tw="ml-3" type="checkbox" value="agree" name="agree7" /> In addition to the national licensing policy or the requirements of any authority, this company may conduct a background check.
                    </div>

                </div>

                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs">
                        <input tw="ml-3"type="checkbox" value="agree" name="agree1" /> I declare that I have personally read and completed the Angkas application and that the information I have written is true to the best of my knowledge.
                    </div>

                </div>

                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs" >
                        <input tw="ml-3"type="checkbox" value="agree" name="agree2" /> This company reserves the right to remove the biker if it fails the credit and community investigation or does not comply with company standards.
                    </div>

                </div>

                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs">
                        <input tw="ml-3"type="checkbox" value="agree" name="agree3" /> I understand that this company may share information with other agencies or individuals to assist in crime prevention as needed.
                    </div>

                </div>

                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs">
                        <input tw="ml-3"type="checkbox" value="agree" name="agree4" /> I agree and I will abide by such guidelines of this company.
                    </div>

                </div>

                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs">
                        <input tw="ml-3"type="checkbox" value="agree" name="agree5" /> I agree to be responsible for the tax service or commission that the company or the government may charge. This can be deducted from the money I receive.
                    </div>

                </div>


                <div tw="flex flex-wrap -mx-3 mb-3">
                    <div tw="w-full px-3 text-xs">
                        <input tw="ml-3"type="checkbox" value="agree" name="agree6" /> I understand that my personal information may be shared with third party service providers, business partners, and affiliated companies, or if requested by the authorities for legal purposes.
                    </div>

                </div>





                <SubmitButton type="submit" name="submit">

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
