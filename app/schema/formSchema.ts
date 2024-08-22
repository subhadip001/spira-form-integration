export const formSchema = {
  title: "Frontend Developer Job Application",
  description:
    "Please fill out the form to apply for the Frontend Developer position.",
  fields: [
    {
      type: "text",
      label: "Full Name",
      name: "fullName",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      type: "email",
      label: "Email Address",
      name: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      type: "tel",
      label: "Phone Number",
      name: "phone",
      placeholder: "Enter your phone number",
      required: true,
    },
    {
      type: "text",
      label: "LinkedIn Profile",
      name: "linkedin",
      placeholder: "Enter your LinkedIn profile URL",
      required: false,
    },
    {
      type: "text",
      label: "GitHub Profile",
      name: "github",
      placeholder: "Enter your GitHub profile URL",
      required: false,
    },
    {
      type: "text",
      label: "Portfolio",
      name: "portfolio",
      placeholder: "Enter your portfolio URL",
      required: false,
    },
    {
      type: "textarea",
      label: "Summary",
      name: "summary",
      placeholder: "Briefly describe your experience and skills",
      required: true,
    },
    {
      type: "select",
      label: "Years of Experience",
      placeholder: "Select years of experience",
      name: "experience",
      options: [
        { label: "0-1 years", value: "0-1" },
        { label: "1-3 years", value: "1-3" },
        { label: "3-5 years", value: "3-5" },
        { label: "5+ years", value: "5+" },
      ],
      required: true,
    },
    {
      type: "checkbox",
      label: "Skills",
      name: "skills",
      options: [
        { label: "HTML", value: "html" },
        { label: "CSS", value: "css" },
        { label: "JavaScript", value: "javascript" },
        { label: "React", value: "react" },
        { label: "Angular", value: "angular" },
        { label: "Vue.js", value: "vuejs" },
        { label: "TypeScript", value: "typescript" },
        { label: "Sass", value: "sass" },
        { label: "Webpack", value: "webpack" },
        { label: "Git", value: "git" },
        { label: "Other", value: "other" },
      ],
      required: true,
    },
    {
      type: "checkbox",
      label: "Terms and Conditions",
      name: "terms",
      options: [
        {
          label: "I agree to the terms and conditions",
          value: "agree",
        },
      ],
    },
    {
      type: "radio",
      label: "Preferred Work Location",
      name: "workLocation",
      options: [
        { label: "Remote", value: "remote" },
        { label: "On-site", value: "onsite" },
        { label: "Hybrid", value: "hybrid" },
      ],
      required: true,
    },
    {
      type: "textarea",
      label: "Why do you want to work with us?",
      name: "reason",
      placeholder: "Explain your motivation to join our team",
      required: true,
    },
    {
      type: "range",
      label: "Salary Range",
      name: "salary",
      min: 0,
      max: 100000,
      step: 5000,
      required: true,
    },
    {
      type: "file",
      label: "Resume",
      name: "resume",
      required: false,
      accept: ".pdf,.doc,.docx",
    },
    {
      type: "file",
      label: "Cover Letter",
      name: "coverLetter",
      required: false,
      accept: ".pdf,.doc,.docx",
    },
  ],
};

export const ebikeFormSchema = {
  title: "E-Bike User Research Form",
  description:
    "Share your thoughts and opinions about e-bikes to help us improve the user experience.",
  fields: [
    {
      type: "text",
      label: "What do you know about e-bikes?",
      name: "eBikeKnowledge",
      placeholder: "Share your experience or what you've learned about e-bikes",
      required: true,
    },
    {
      type: "select",
      label: "How often do you currently use a bike?",
      name: "bikeUsageFrequency",
      options: [
        { label: "Daily", value: "daily" },
        { label: "Several times a week", value: "severalTimesAWeek" },
        { label: "Occasionally", value: "occasionally" },
        { label: "Rarely", value: "rarely" },
        { label: "Never", value: "never" },
      ],
      required: true,
    },
    {
      type: "radio",
      label: "What motivates you to consider using an e-bike?",
      name: "eBikeMotivation",
      options: [
        { label: "Environmental concerns", value: "environmentalConcerns" },
        { label: "Health and fitness", value: "healthAndFitness" },
        {
          label: "Convenience and time-saving",
          value: "convenienceAndTimeSaving",
        },
        { label: "Other (please specify)", value: "other" },
      ],
      required: true,
    },
    {
      type: "checkbox",
      label: "What features are important to you when considering an e-bike?",
      name: "eBikeFeatures",
      options: [
        { label: "Range and battery life", value: "rangeAndBatteryLife" },
        { label: "Speed and acceleration", value: "speedAndAcceleration" },
        { label: "Comfort and ergonomics", value: "comfortAndErgonomics" },
        { label: "Price and affordability", value: "priceAndAffordability" },
        { label: "Design and aesthetics", value: "designAndAesthetics" },
        { label: "Other (please specify)", value: "other" },
      ],
      required: false,
    },
    {
      type: "textarea",
      label: "What do you think is the biggest advantage of e-bikes?",
      name: "eBikeAdvantage",
      placeholder: "Share your thoughts",
      required: true,
    },
    {
      type: "textarea",
      label:
        "What do you think is the biggest challenge or barrier to adopting e-bikes?",
      name: "eBikeChallenge",
      placeholder: "Share your thoughts",
      required: true,
    },
    {
      type: "file",
      label:
        "Do you have any photos or videos of your current bike or e-bike experience?",
      name: "eBikeMedia",
      accept: ".jpg, .jpeg, .png, .mp4, .mov",
      required: false,
    },
    {
      type: "text",
      label: "How did you hear about e-bikes?",
      name: "eBikeDiscovery",
      placeholder: "Share your source",
      required: true,
    },
  ],
};

export const qaFormSchema = {
  "title": "QA Tester Application Form",
  "description": "Please fill out this form to apply for the QA Tester position",
  "fields": [
      {
          "type": "text",
          "label": "Full Name",
          "name": "fullName",
          "placeholder": "John Doe"
      },
      {
          "type": "email",
          "label": "Email Address",
          "name": "email",
          "required": true
      },
      {
          "type": "tel",
          "label": "Phone Number",
          "name": "phoneNumber",
          "placeholder": "123-456-7890"
      },
      {
          "type": "textarea",
          "label": "Summary of Experience",
          "name": "summaryExperience",
          "placeholder": "Briefly describe your QA testing experience and skills"
      },
      {
          "type": "select",
          "label": "Preferred Programming Languages",
          "name": "preferredLanguages",
          "options": [
              {
                  "label": "Java",
                  "value": "java"
              },
              {
                  "label": "Python",
                  "value": "python"
              },
              {
                  "label": "C#",
                  "value": "csharp"
              },
              {
                  "label": "Other (please specify)",
                  "value": "other"
              }
          ]
      },
      {
          "type": "checkbox",
          "label": "Certifications",
          "name": "certifications",
          "options": [
              {
                  "label": "ISTQB",
                  "value": "istqb"
              },
              {
                  "label": "CSTE",
                  "value": "cste"
              },
              {
                  "label": "Other (please specify)",
                  "value": "other"
              }
          ]
      },
      {
          "type": "radio",
          "label": "Availability",
          "name": "availability",
          "options": [
              {
                  "label": "Full-time",
                  "value": "fulltime"
              },
              {
                  "label": "Part-time",
                  "value": "parttime"
              },
              {
                  "label": "Contract",
                  "value": "contract"
              }
          ]
      },
      {
          "type": "file",
          "label": "Resume",
          "name": "resume",
          "accept": ".pdf, .docx"
      }
  ]
}
