import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TimeLine = () => {
  return (
    <section className="bg-[#eafeeb] py-8 min-h-screen text-center">
      <h1 className="text-3xl font-bold py-3">How It Works</h1>
      <Typography variant="body1" className="pb-10 mx-auto px-3 text-gray-500">
        Simply input your data, let our algorithms analyze, and receive
        personalized disease predictions.
      </Typography>

      <Timeline position="alternate">
      <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
            Input Data
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }} color="text.secondary">
            Users begin by inputting relevant data into your platform. This
            could include information such as symptoms they are experiencing,
            their medical history, lifestyle factors (such as diet and exercise
            habits), demographic details, and any other data points that could
            be relevant for disease prediction.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
              Data Analysis
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }} color="text.secondary">
              Once the user has inputted their data, your platform's algorithms
              analyze this information. The analysis may involve various
              techniques, such as machine learning, statistical analysis, and data
              mining, to identify patterns and correlations between the user's
              data points and known risk factors for different diseases.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
              Prediction Generation
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }} color="text.secondary">
              Based on the results of the data analysis, your platform generates
              predictions regarding the user's risk of developing certain diseases
              or health conditions. These predictions may be presented in the form
              of a risk score, probability estimates, or specific recommendations
              for further action (such as seeking medical advice or making
              lifestyle changes).
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
              Personalized Recommendations
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }} color="text.secondary">
              In addition to providing disease predictions, your platform offers
              personalized recommendations to help users mitigate their health
              risks and improve their overall well-being. These recommendations
              may include lifestyle changes, preventive screenings, dietary
              adjustments, exercise routines, or other interventions tailored to
              the individual user's needs and risk factors.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
              User Feedback and Engagement
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: '14px', sm: '16px', md: '18px' }} color="text.secondary">
              Finally, users have the opportunity to provide feedback on the
              predictions and recommendations provided by your platform. This
              feedback loop helps improve the accuracy and effectiveness of your
              disease prediction algorithms over time. Additionally, users may be
              encouraged to engage with your platform regularly to track their
              health status, receive updated predictions, and access new features
              or resources.
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default TimeLine;
