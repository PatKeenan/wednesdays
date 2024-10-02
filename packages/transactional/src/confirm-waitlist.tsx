import {
  Heading,
  Section,
  Tailwind,
  Text,
  Body,
  Row,
  Column,
  Img,
  Button,
  Hr,
} from "@react-email/components";
import config from "project-tailwind/with-actual-values";

export function ConfirmWaitlistEmailTemplate() {
  return (
    <Tailwind config={config}>
      <Body className="font-sans text-gray-800 leading-normal max-w-[600px] mx-auto overflow-x-hidden mt-0">
        <Section className="w-full py-12 bg-green-100 p-5 text-center rounded-t-lg">
          <Row>
            {/*  <Column className="text-3xl">🏌️‍♂️</Column> */}
            {/* // mirror */}
            <Column className="text-3xl transofrm rotate-[180deg] scale-x-[-1]">
              🎉
            </Column>
            <Column colSpan={2}>
              <Heading className="font-bold text-4xl text-gray-900 text-center">
                {/*   🏌️‍♂️  */} Wednesdays <br />
                Golf App
              </Heading>
            </Column>
            <Column className="text-3xl">🎉</Column>
          </Row>
        </Section>
        <Section className="bg-gray-100 p-5 rounded-b-lg">
          <Row>
            <Text className="m-0 text-[24px] font-semibold leading-[32px] text-gray-900">
              Hey there, golf enthusiast!
            </Text>
            <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
              We're thrilled to have you on board! You're now officially on the
              waitlist for the Wednesdays Golf App - your future favorite
              golfing companion. Here are some of the{" "}
              <a
                href="https://www.wednesday-golf.com/#features"
                target="_blank"
                className="text-green-500 no-underline"
              >
                features
              </a>{" "}
              you can expect when we launch:
            </Text>
          </Row>
          <Row className="mt-[16px]">
            <Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
              <Img
                alt="Zap"
                height={36}
                width={36}
                src="https://www.wednesday-golf.com/zap.png"
              />

              <Text className="m-0 mt-[16px] text-[20px] font-semibold leading-[28px] text-gray-900">
                Dynamic Mini-Games
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Enjoy unique challenges on every hole, keeping your rounds fresh
                and exciting.
              </Text>
              <a
                href="https://www.wednesday-golf.com/features/mini-games"
                className="text-green-500 no-underline text-sm"
              >
                Learn More
              </a>
            </Column>
            <Column className="w-1/2 pl-[12px] align-baseline" colSpan={1}>
              <Img
                alt="Trophy"
                height={36}
                width={36}
                src="https://www.wednesday-golf.com/trophy.png"
              />
              <Text className="m-0 mt-[16px] text-[20px] font-semibold leading-[28px] text-gray-900">
                Real-Time Leaderboards
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Compete with friends and track your progress with live, updating
                leaderboards.
              </Text>
              <a
                href="https://www.wednesday-golf.com/features/leaderboards"
                className="text-green-500 no-underline text-sm"
              >
                Learn More
              </a>
            </Column>
          </Row>
          <Row className="mt-[32px]">
            <Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
              <Img
                alt="Users"
                height={36}
                width={36}
                src="https://www.wednesday-golf.com/users.png"
              />

              <Text className="m-0 mt-[16px] text-[20px] font-semibold leading-[28px] text-gray-900">
                Social Networking
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Connect with other golfers, join groups, and organize events
                easily through the app.
              </Text>
              <a
                href="https://www.wednesday-golf.com/features/social"
                className="text-green-500 no-underline text-sm"
              >
                Learn More
              </a>
            </Column>
            <Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
              <Img
                alt="Clock"
                height={36}
                width={36}
                src="https://www.wednesday-golf.com/clock.png"
              />

              <Text className="m-0 mt-[16px] text-[20px] font-semibold leading-[28px] text-gray-900">
                Tee Time Booking
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Seamlessly book tee times at participating courses directly
                through the app.
              </Text>
              <a
                href="https://www.wednesday-golf.com/features/tee-time-booking"
                className="text-green-500 no-underline text-sm"
              >
                Learn More
              </a>
            </Column>
          </Row>
          <Hr className="my-[16px] border-t-2 border-gray-300" />
          <Text className="text-gray-500">
            We're working hard to get the app ready for launch. We'll send you
            an email when it's available. In the meantime, check{" "}
            <a
              href="https://www.wednesday-golf.com/blog"
              className="text-green-500 no-underline"
            >
              our blog
            </a>{" "}
            for updates and sneak peeks.
          </Text>
        </Section>
        <Section>
          <Row>
            <Column align="center">
              <Row>
                <Text className="text-gray-900 text-center">
                  Available soon on iOS and Android
                </Text>
              </Row>
              <Row>
                <td align="center">
                  <table>
                    <tr>
                      <td className="pr-[16px]">
                        <Button
                          href="https://www.wednesday-golf.com/#subscribe"
                          target="_blank"
                        >
                          <Img
                            alt="Get it on Google Play button"
                            height={35}
                            src="https://react.email/static/get-it-on-google-play.png"
                          />
                        </Button>
                      </td>
                      <td className="pl-[16px]">
                        <Button
                          href="https://www.wednesday-golf.com/#subscribe"
                          target="_blank"
                        >
                          <Img
                            alt="Download on the App Store button"
                            height={35}
                            src="https://react.email/static/download-on-the-app-store.png"
                          />
                        </Button>
                      </td>
                    </tr>
                  </table>
                </td>
              </Row>
            </Column>
          </Row>
        </Section>
      </Body>
    </Tailwind>
  );
}

export default ConfirmWaitlistEmailTemplate;
