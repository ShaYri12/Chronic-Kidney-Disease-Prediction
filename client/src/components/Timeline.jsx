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
        Simply input your data, let our system analyze it, and get personalized
        predictions about chronic kidney disease risk.
      </Typography>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: "14px", sm: "16px", md: "18px" }}>
              Input Data
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
              color="text.secondary"
            >
              You start by inputting relevant health data, such as symptoms
              you're experiencing, your medical history, and other personal
              information that could affect kidney health.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: "14px", sm: "16px", md: "18px" }}>
              Data Analysis
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
              color="text.secondary"
            >
              Once your data is submitted, our system uses advanced algorithms
              to analyze it. This may involve machine learning techniques and
              statistical analysis to identify patterns and predict the
              likelihood of developing chronic kidney disease.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: "14px", sm: "16px", md: "18px" }}>
              Prediction Generation
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
              color="text.secondary"
            >
              Based on the analysis, our system generates predictions about your
              risk for chronic kidney disease. These predictions might be
              presented as a risk score, estimated probability, or specific
              recommendations for next steps, such as consulting with a
              healthcare professional.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: "14px", sm: "16px", md: "18px" }}>
              Personalized Recommendations
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
              color="text.secondary"
            >
              Along with your prediction, our system offers personalized
              suggestions to help you lower your risk. These might include
              lifestyle changes, dietary advice, exercise routines, and other
              strategies tailored to your unique needs.
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box fontSize={{ xs: "14px", sm: "16px", md: "18px" }}>
              User Feedback and Engagement
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent px={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
              color="text.secondary"
            >
              Finally, you can provide feedback on your results and the
              suggestions given. This helps refine the system’s predictions over
              time and ensures that the advice remains accurate and up-to-date.
              You can also track your kidney health regularly with new updates
              from our platform.
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default TimeLine;
