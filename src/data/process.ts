export interface ProcessStep {
  number: string;
  titleKey: string;
  descKey: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    titleKey: "process.step1Title",
    descKey: "process.step1Desc",
  },
  {
    number: "02",
    titleKey: "process.step2Title",
    descKey: "process.step2Desc",
  },
  {
    number: "03",
    titleKey: "process.step3Title",
    descKey: "process.step3Desc",
  },
];
