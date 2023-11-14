import local from "next/font/local";

export const fonts = local({
  src: [
    {
      path: "./Epidemic-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Epidemic-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./Epidemic-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-sans",
});
