export const scrollToQuote = () => {
  const quoteSection = document.getElementById("quote");

  if (quoteSection) {
    quoteSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};