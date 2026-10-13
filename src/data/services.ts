export interface ServiceItem {
  number: string;
  titleKey: string;
  descKey: string;
  bgToken: string;
  textToken: string;
  borderColor: string;
}

export const services: ServiceItem[] = [
  {
    number: "01",
    titleKey: "services.service1Title",
    descKey: "services.service1Desc",
    bgToken: "var(--color-accent)",
    textToken: "var(--color-ink)",
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  {
    number: "02",
    titleKey: "services.service2Title",
    descKey: "services.service2Desc",
    bgToken: "var(--color-ink)",
    textToken: "var(--color-bg)",
    borderColor: "var(--color-line-dark)",
  },
  {
    number: "03",
    titleKey: "services.service3Title",
    descKey: "services.service3Desc",
    bgToken: "#5B6BFF",
    textToken: "#FAFAF7",
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
];
