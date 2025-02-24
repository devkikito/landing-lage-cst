export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  console.log(id, element);
  if (element) {
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
