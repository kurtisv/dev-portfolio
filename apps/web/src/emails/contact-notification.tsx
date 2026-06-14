import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export function ContactNotificationEmail({
  name,
  email,
  projectType,
  message,
}: {
  name: string;
  email: string;
  projectType?: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio contact from {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New contact message</Heading>
          <Section>
            <Text style={label}>From</Text>
            <Text style={text}>{name} &lt;{email}&gt;</Text>
            {projectType && (
              <>
                <Text style={label}>Project type</Text>
                <Text style={text}>{projectType}</Text>
              </>
            )}
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f5f2",
  color: "#161513",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #dedbd2",
  margin: "32px auto",
  padding: "32px",
  width: "560px",
};

const heading = {
  fontSize: "20px",
  lineHeight: "28px",
  margin: "0 0 20px",
};

const label = {
  color: "#17483e",
  fontSize: "11px",
  fontWeight: "600" as const,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  margin: "16px 0 4px",
};

const text = {
  color: "#5f5b53",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0",
};

const messageStyle = {
  color: "#161513",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};
