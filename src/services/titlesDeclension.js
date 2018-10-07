import Declension from "./declension";

const titles = ["интерес", "интереса", "интересов"];

class TitlesDeclension {
  convert(n) {
    return Declension.convert(n, titles);
  }
}

export default new TitlesDeclension();
