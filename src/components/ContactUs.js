import React, {useState} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "./headers/light.js";
import Footer from "./footers/FiveColumnWithBackground.js";
// import ContactUsForm from "./forms/TwoColContactUsWithIllustrationFullForm.js";

import axios from 'axios'
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import Swal from 'sweetalert2'
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-10 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 bg-yellow-500 text-black hocus:bg-black text-white`

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;


export default ({
  subheading = "",
  heading = <>Feel free to <span tw="text-yellow-500">get in touch</span> with us.</>,
  description = "Meron ka bang inquiries sa amin? I-message lamang kami dito at ikaw ay aming rereplayan As soon as possible!",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "post",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [formData, setFormData] = useState({
    emailAddress: "",
    fullName: "",
    subject: "",
    message: ""
  });

  const {
    emailAddress,
    fullName,
    subject,
    message
  } = formData;
  console.log(formData);
  console.log(emailAddress);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name] : e.target.value });

    const onSubmit = async (e) => {
      e.preventDefault();

      //axios post here
      try{
        axios.post('http://kidlat-api.herokuapp.com/Messages/', formData)
        .then(res => {
          Swal.fire({
            title: 'Success!',
            text: 'Message successfully sent!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      )
        .catch(err =>
          Swal.fire({
            title: 'Something is wrong!',
            text: err,
            icon: 'error',
            confirmButtonText: 'OK'
          })
        );
      }
      catch (error){
        console.log(error.response);
      }
    }

    return (
      <AnimationRevealPage>
        <Header roundedHeaderButton={true} />
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <Form onSubmit={(e) => onSubmit(e)} >
                <Input required type="email" name="emailAddress" onChange={(e) => onChange(e)} value={emailAddress} placeholder="Your Email Address" />
                <Input required type="text" name="fullName" onChange={(e) => onChange(e)} value={fullName} placeholder="Full Name" />
                <Input required type="text" name="subject" onChange={(e) => onChange(e)} value={subject} placeholder="Subject" />
                <Textarea required name="message" onChange={(e) => onChange(e)} value={message} placeholder="Your Message Here" />
                <SubmitButton name="submit" type="submit">{submitButtonText}</SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
      <Footer />
    </ AnimationRevealPage>
    );

};
