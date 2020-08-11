import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";

import pabiliIcon from "images/pabili.png";
import padalaIcon from "images/deliver-1.png";
import pasundoIcon from "images/motor.png";
import palengkeIcon from "images/palengke.png";
import kusinaIcon from "images/restau-2.png";
import papilaIcon from "images/store-2.png";
// import padalaIcon from "images/deliver-1.png";

const Container = tw.div`relative bg-black -mx-8 px-8 text-gray-100`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-white`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100 mb-4 `}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-gray-400`}
  }
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "",
  description = "Gamit ang mobile app, maaari mong i-avail ang mga sumusunod na Kidlat Services."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: pabiliIcon,
      title: "Pabili",
      description: "Maaari kang magpabili sa ating mga Kidlat riders ng mga nais mong items o goods mula sa iyong paboritong tindahan. Makatitiyak kanga ng iyong pinabili ay makakarating sa’yo nang mabilis at nasa tamang kondisyon.  "
    },
    {
      imageSrc: padalaIcon,
      title: "Padala",
      description: "May mga nais ka bang ipadalang gamit gaya na lamang ng dokumento o produkto? Sagot ka ng ating mga Kidlat rider. Magbook lamang sa app at tiyak na makakarating sa padadalhan ang iyong padalang gamit."
    },
    {
      imageSrc: pasundoIcon,
      title: "Pasundo",
      description: "Para sa hassle-free na ride, pwede ka ring magbook ng ating Pasundo service. Ang ating Kidlat rider na ang bahala sa’yong maghatid o magsundo. Dahil rehistrado ang mga riders, makatitiyak kang ikaw ay ligtas at mabilis na makakarating sa iyong patutunguhan. "
    },
    {
      imageSrc: palengkeIcon,
      title: "Palengke",
      description: "May nais ka bang ipamalengke ngunit wala kang oras? Sagot kang muli ng ating mga Kidlat rider. Maaari kang magpabili ng mga produkto mula sa pinakamalapit na palengke."
    },
    {
      imageSrc: kusinaIcon,
      title: "Kusina",
      description: "Meron ka bang cravings? I-satisfy natin yan gamit ang iyong Kidlat app. Maaari ka ng bumili ng iyong mga paboritong pagkain mula sa ating mga partner businesses. Umorder gamit ang app at ang ating Kidlat riders na ang maghahatid nito sa iyong bahay."
    },
    {
      imageSrc: papilaIcon,
      title: "Papila",
      description: "Madami ka na bang bills na malapit na mag-due gaya ng sa Meralco at iba pa? Maaari ka ring magpapila sa ating mga Kidlat riders upang sila na ang magbayad para sa iyo."
    },

  ];


  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer" >
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title" >{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>

        ))}
      </ThreeColumnContainer>
      <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
    </Container>
  );
};
